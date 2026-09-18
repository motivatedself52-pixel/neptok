"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";

export default function WalletPage() {
  const [points, setPoints] = useState(380); // Example points balance
  const [nprBalance, setNprBalance] = useState(0);
  const [esewaNumber, setEsewaNumber] = useState("");
  const [toast, setToast] = useState("");

  const triggerToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2000);
  };

  const handleConvert = () => {
    if (points < 100) {
      triggerToast("Minimum 100 points required to convert!");
      return;
    }
    const nprToAdd = (points / 100) * 10;
    setNprBalance((prev) => prev + nprToAdd);
    setPoints(0);
    triggerToast(`Converted ${points} Points to NPR ${nprToAdd}!`);
  };

  const handleWithdrawal = (e: React.FormEvent) => {
    e.preventDefault();

    if (nprBalance < 25) {
      triggerToast("Minimum withdrawal is NPR 25 (250 Points required)!");
      return;
    }

    if (!/^(98|97)\d{8}$/.test(esewaNumber)) {
      triggerToast("Please enter a valid 10-digit eSewa ID (98/97...)");
      return;
    }

    triggerToast(`Cashout request of NPR ${nprBalance} submitted to Admin!`);
    setNprBalance(0);
  };

  return (
    <main className="min-h-screen bg-black text-white p-4 pb-24 max-w-md mx-auto relative">
      {toast && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-red-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg border border-red-400">
          {toast}
        </div>
      )}

      <h1 className="text-xl font-bold my-3 text-red-500">Points & Earnings Wallet</h1>

      {/* Points Card */}
      <div className="bg-gray-900 border border-gray-800 p-4 rounded-xl mb-4 space-y-3">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-xs text-gray-400">Available Points</p>
            <p className="text-2xl font-bold text-yellow-400">{points} Pts</p>
          </div>
          <button
            onClick={handleConvert}
            className="bg-yellow-600 hover:bg-yellow-700 px-3 py-2 rounded-lg text-xs font-bold text-white transition"
          >
            Exchange to NPR
          </button>
        </div>
        <p className="text-[10px] text-gray-500 border-t border-gray-800 pt-2">
          Rate: 100 Points = NPR 10 | 1,000 Views = 100 Points
        </p>
      </div>

      {/* eSewa Cashout Form */}
      <form onSubmit={handleWithdrawal} className="bg-gray-900 border border-gray-800 p-4 rounded-xl space-y-4">
        <div className="flex justify-between items-center border-b border-gray-800 pb-2">
          <h2 className="text-sm font-bold text-green-400">eSewa Withdrawal</h2>
          <span className="text-sm font-bold text-white">NPR {nprBalance}</span>
        </div>

        <p className="text-[11px] text-gray-400">
          Minimum withdrawal requirement: <span className="text-yellow-400 font-bold">NPR 25 (250 Points)</span>
        </p>

        <div>
          <label className="text-[11px] text-gray-400 block mb-1">eSewa Registered Number</label>
          <input
            type="tel"
            placeholder="98XXXXXXXX / 97XXXXXXXX"
            maxLength={10}
            value={esewaNumber}
            onChange={(e) => setEsewaNumber(e.target.value.replace(/\D/g, ""))}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-green-500 font-mono"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 font-bold py-2.5 rounded-lg text-xs transition"
        >
          Request eSewa Payout
        </button>
      </form>

      <Navbar />
    </main>
  );
}
