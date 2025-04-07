'use client'

import Link from "next/link";

export default function Login() {

    return (
        <div className="flex bg-slate-900 w-screen h-screen">
            <h1>Login Page</h1>

            <Link href="/" className="cursor-pointer active:bg-purple-300">Home</Link>
        </div>
    );
}
