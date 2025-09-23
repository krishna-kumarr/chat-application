// app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDatabase } from "@/utils/mongodb";

export const authConfig = {
    secret: process.env.NEXTAUTH_SECRET,
    session: { strategy: "jwt" },

    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: { params: { scope: "openid email profile" } },
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const { db } = await connectToDatabase();
                const user = await db.collection("users").findOne({ email: credentials.email });
                if (!user) return {}; // only allow login
                return {
                    id: String(user._id),
                    email: user.email,
                    name: user.name,
                };
            },
        }),
    ],

    pages: {
        signIn: "/",
        error: "/auth-error",
    },

    callbacks: {
        async signIn({ user }) {
            const { db } = await connectToDatabase();

            // check if user already exists
            let dbUser = await db.collection("users").findOne({ email: user.email });

            if (!dbUser) {
                // register new user automatically
                const insertRes = await db.collection("users").insertOne({
                    email: user.email,
                    name: user.name || user.email.split("@")[0]
                });
                dbUser = await db.collection("users").findOne({ _id: insertRes.insertedId });
            }

            // attach ids
            user.id = String(dbUser._id);
            return true;
        },

        async jwt({ token, user }) {
            if (user) {
                token.userId = user.id;
            }
            return token;
        },

        async session({ session, token }) {
            session.user.id = token.userId;
            return session;
        },
    },
};

const handler = NextAuth(authConfig);
export { handler as GET, handler as POST };
