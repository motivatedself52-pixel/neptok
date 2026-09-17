"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";

export default function ProfilePage() {
  const [balance, setBalance] = useState(2140);
  const [esewaNumber, setEsewaNumber] = useState("");
  const [amount, setAmount] = useState("");

  const handleWithdraw = (e: React.FormEvent) => {
    e.preventDefault();
    const withdrawAmount = parseFloat(amount);
    if (!esewaNumber || isNaN(withdrawAmount) || withdrawAmount <= 0) {
      alert("Please provide a valid eSewa ID and amount.");
      return;
    }
    if (withdrawAmount > balance) {
      alert("Insufficient earnings balance.");
      return;
    }
    setBalance((prev) => prev - withdrawAmount);
    alert(`Success: Withdrawal request of NPR ${withdrawAmount} submitted for eSewa account ${esewaNumber}`);
    setAmount("");
  };

  return (
    <main className="min-h-screen bg-black text-white p-6 pb-24">
      <div className="flex flex-col items-center mt-6">
        <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-red-500 to-green-500 flex items-center justify-center text-3xl font-bold">
          🇳🇵
        </div>
        <h2 className="mt-4 text-xl font-bold">@neptok_creator</h2>
        <p className="text-xs text-gray-400">Content Creator & Streamer</p>
      </div>

      <div className="flex justify-around bg-gray-900 border border-gray-800 rounded-xl p-4 mt-6">
        <div className="text-center">
          <p className="font-bold text-lg">12.4K</p>
          <p className="text-xs text-gray-400">Followers</p>
        </div>
        <div className="text-center">
          <p className="font-bold text-lg">182</p>
          <p className="text-xs text-gray-400">Following</p>
        </div>
        <div className="text-center">
          <p className="font-bold text-lg">89.2K</p>
          <p className="text-xs text-gray-400">Likes</p>
        </div>
      </div>

      <div className="bg-gray-900 border border-green-800/60 rounded-xl p-5 mt-6">
        <h3 className="text-base font-bold text-green-400 mb-1">Creator Earnings Wallet</h3>
        <p className="text-2xl font-extrabold text-white mb-4">NPR {balance}</p>

        <form onSubmit={handleWithdraw} className="space-y-3">
          <div>
            <label className="block text-xs text-gray-400 mb-1">eSewa Mobile Number / ID</label>
            <input
              type="text"
              placeholder="98XXXXXXXX"
              value={esewaNumber}
              onChange={(e) => setEsewaNumber(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-green-500"
              required
            />
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1">Withdraw Amount (NPR)</label>
            <input
              type="number"
              placeholder="Min. NPR 100"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-green-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 font-bold py-2.5 rounded-lg text-sm transition"
          >
            Withdraw to eSewa
          </button>
        </form>
      </div>

      <Navbar />
    </main>
  );
}
