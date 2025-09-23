"use client";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme";
import { encryptData } from "@/utils/crypto";
import { useEffect, useState } from "react";

export default function Providers({ children }) {
    const [basePath, setBasePath] = useState(null);

    useEffect(() => {
        (async () => {
            const encrypted = await encryptData({
                url: "auth",
                expires_in: new Date(Date.now() + process.env.NEXT_PUBLIC_URL_EXPIRES_SECONDS * 1000).toISOString()
            });
            setBasePath(encrypted);
        })();
    }, []);
    if (!basePath) return null;

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <SessionProvider basePath={process.env.NEXT_PUBLIC_APP_ENV === 'production' ? `/api/enc__${basePath}__enc` : '/api/auth'}>
                {children}
            </SessionProvider>
        </ThemeProvider>
    );
}
