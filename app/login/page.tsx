"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-black text-white p-6 flex flex-col justify-center items-center max-w-md mx-auto space-y-4">
      <h1 className="text-2xl font-bold text-red-500">NepTok</h1>
      <input type="text" placeholder="Username or Email" className="w-full bg-gray-900 border border-gray-800 p-3 rounded-lg text-xs" />
      <input type="password" placeholder="Password" className="w-full bg-gray-900 border border-gray-800 p-3 rounded-lg text-xs" />
      <Link href="/" className="w-full bg-red-600 font-bold py-3 rounded-lg text-xs text-center">Log In</Link>
    </main>
  );
}
