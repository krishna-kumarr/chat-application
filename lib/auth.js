import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDatabase } from "@/utils/mongodb";

export const authConfig = {
    session: { strategy: "jwt", maxAge: 60 * 60 },
    jwt: { maxAge: 60 * 60 },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: { email: {}, password: {} },
            async authorize(credentials) {
                await connectToDatabase();
                // const user = await User.findOne({ email: credentials.email });
                // if (!user) return null;
                // const isValid = await compare(credentials.password, user.passwordHash);
                // if (!isValid) return null;
                // return {
                //     id: user._id.toString(),
                //     email: user.email,
                //     name: user.name,
                // };
                return {
                    id: '',
                    email: '',
                    name: ''
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) token.uid = user.id;
            return token;
        },
        async session({ session, token }) {
            if (token?.uid) session.user.id = token.uid;
            return session;
        },
    },
};

const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };
