"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";

export default function AdminPanel() {
  const [pin, setPin] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === "9800") { // Admin Master PIN
      setIsAuthenticated(true);
    } else {
      alert("Invalid Admin PIN");
    }
  };

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-black text-white p-6 flex flex-col items-center justify-center">
        <form onSubmit={handleLogin} className="w-full max-w-xs bg-gray-900 p-6 rounded-2xl border border-gray-800 text-center space-y-4">
          <h1 className="text-xl font-bold text-red-500">Admin Authentication</h1>
          <input
            type="password"
            placeholder="Enter Master PIN"
            maxLength={4}
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg p-2 text-center text-sm font-mono text-white"
          />
          <button type="submit" className="w-full bg-red-600 font-bold py-2 rounded-lg text-xs">Unlock Admin Panel</button>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-6 pb-24 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold text-red-500 mb-1">Admin Dashboard</h1>
      <p className="text-xs text-gray-400 mb-6">Review AdSense Revenue & Approve eSewa Cashouts</p>

      <div className="bg-gray-900 border border-gray-800 p-4 rounded-xl mb-4">
        <p className="text-xs text-gray-400">Total Platform Earnings</p>
        <p className="text-xl font-bold text-green-400">NPR 12,500</p>
      </div>

      <Navbar />
    </main>
  );
}
