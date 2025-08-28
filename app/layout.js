import Providers from "@/app/providers";

export const metadata = {
  title: "My App",
  description: "App with encrypted NextAuth paths",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}