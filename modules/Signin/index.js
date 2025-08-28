'use client'
import { useState } from "react";
import jsx_json from "@/utils/jsx_json";
import input_function from "@/utils/input_function";
import { AuthLayout } from "@/components/Layouts/authLayout";

export default function Signin() {
    const [auth_credentials, setAuthCredentials] = useState({});
    const { auth_json } = jsx_json({ state: auth_credentials, setState: setAuthCredentials });

    return (
        <AuthLayout>
            {input_function(auth_json.login)}
        </AuthLayout>
    );
}