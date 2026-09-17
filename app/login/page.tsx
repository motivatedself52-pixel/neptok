"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";

export default function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Redirect user after login
    if (isSignUp) {
      alert("Account created successfully!");
    } else {
      alert("Logged in successfully!");
    }
    
    router.push("/"); // Redirects to Home page immediately
  };

  return (
    <main className="min-h-screen bg-black text-white p-6 pb-24 flex flex-col items-center justify-center">
      <div className="w-full max-w-sm bg-gray-900 border border-gray-800 rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-center text-red-500 mb-2">NepTok</h1>
        <p className="text-xs text-gray-400 text-center mb-6">
          {isSignUp ? "Create an account to earn money" : "Welcome back! Log in to continue"}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs text-gray-400 mb-1">Mobile Number</label>
            <input
              type="text"
              placeholder="98XXXXXXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-red-500 text-white"
              required
            />
          </div>

          <div>
            <label className="block text-xs text-gray-400 mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-red-500 text-white"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 font-bold py-2.5 rounded-lg text-sm transition text-white"
          >
            {isSignUp ? "Sign Up" : "Log In"}
          </button>
        </form>

        <button
          onClick={() => setIsSignUp(!isSignUp)}
          className="w-full text-center text-xs text-gray-400 mt-4 underline"
        >
          {isSignUp ? "Already have an account? Log In" : "Don't have an account? Sign Up"}
        </button>
      </div>

      <Navbar />
    </main>
  );
}
