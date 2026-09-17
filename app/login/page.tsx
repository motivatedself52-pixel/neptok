"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";

export default function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [toast, setToast] = useState("");
  const router = useRouter();

  const validateNepaliPhone = (num: string) => {
    const nepaliRegex = /^(98|97)\d{8}$/;
    return nepaliRegex.test(num);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!validateNepaliPhone(phone)) {
      setError("Please enter a valid 10-digit Nepali number starting with 98 or 97.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    // Save mock session locally
    localStorage.setItem("neptok_user", JSON.stringify({ phone, name: `@user_${phone.slice(-4)}` }));
    
    setToast(isSignUp ? "Account created successfully!" : "Login successful!");
    
    setTimeout(() => {
      router.push("/");
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-black text-white p-6 pb-24 flex flex-col items-center justify-center relative">
      {/* Top Floating Toast Notification */}
      {toast && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-green-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg border border-green-400 animate-bounce">
          ✓ {toast}
        </div>
      )}

      <div className="w-full max-w-sm bg-gray-900 border border-gray-800 rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-center text-red-500 mb-1">NepTok</h1>
        <p className="text-xs text-gray-400 text-center mb-6">
          {isSignUp ? "Create account to earn NPR" : "Welcome back! Log in to continue"}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs text-gray-400 mb-1">Mobile Number (Nepal)</label>
            <input
              type="tel"
              placeholder="98XXXXXXXX / 97XXXXXXXX"
              maxLength={10}
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-red-500 text-white font-mono"
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

          {error && <p className="text-[11px] text-red-400 font-semibold">{error}</p>}

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 font-bold py-2.5 rounded-lg text-sm transition text-white"
          >
            {isSignUp ? "Sign Up" : "Log In"}
          </button>
        </form>

        <button
          onClick={() => { setIsSignUp(!isSignUp); setError(""); }}
          className="w-full text-center text-xs text-gray-400 mt-4 underline"
        >
          {isSignUp ? "Already have an account? Log In" : "Don't have an account? Sign Up"}
        </button>
      </div>

      <Navbar />
    </main>
  );
}
