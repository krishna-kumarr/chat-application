'use client';
import { useState } from "react";
import { signIn } from "next-auth/react";   // ✅ import signIn
import jsx_json from "@/json/jsx_json";
import input_function from "@/json/input_function";
import { AuthLayout } from "@/components/Layouts/authLayout";
import { Box, Button, CardContent, Divider, IconButton, Stack, Typography } from "@mui/material";
import { icons } from "@/public/icons";
import { useRouter, useSearchParams } from "next/navigation";

export default function Home() {
  const [auth_credentials, setAuthCredentials] = useState({});
  const { auth_json } = jsx_json({ state: auth_credentials, setState: setAuthCredentials });
  const searchParams = useSearchParams();
  const router = useRouter();
  const error = searchParams.get('error');

  const errorMessages = {
    Signin: "Sign in failed. Please try again.",
    OAuthSignin: "OAuth sign in failed.",
    OAuthCallback: "You cancelled the OAuth login.",
    OAuthCreateAccount: "Could not create OAuth account.",
    EmailCreateAccount: "Could not create email account.",
    Callback: "You cancelled the login process.",
    OAuthAccountNotLinked: "This email is already linked with another account.",
    Default: "An unknown error occurred.",
  };

  if (error) {
    const message = errorMessages[error] || errorMessages.Default;
  }

  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/home" });
  };

  return (
    <AuthLayout>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h5" sx={{ color: "rgb(52, 71, 103)", fontWeight: 600, fontSize: "1.25rem", mb: 3, textAlign: 'center' }}>
            Sign in
          </Typography>

          <Stack direction="row" spacing={2} justifyContent="center" mb={4}>
            <IconButton
              aria-label="Google"
              sx={{ border: 1, borderColor: 'gray', borderRadius: 1, px: 2 }}
              onClick={handleGoogleSignIn} // ✅ hook into NextAuth
            >
              {icons.google_icons}
            </IconButton>
          </Stack>
        </Box>

        <Box sx={{ px: 3, py: 1 }}>
          {input_function(auth_json.login)}

          <Stack direction="column" spacing={2} justifyContent="center" mt={4}>
            <Button variant="sign_in_button" color="success" 
            // onClick={() => signIn()}
            >
              Sign in
            </Button>

            <Divider sx={{ fontSize: '0.7rem' }}>Or</Divider>

            <Button variant="sign_up_button" color="error" onClick={() => router.push('signup')}>Sign up</Button>
          </Stack>
        </Box>
      </CardContent>
    </AuthLayout>
  );
}
