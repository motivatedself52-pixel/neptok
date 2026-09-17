"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

export default function ProfilePage() {
  const [points, setPoints] = useState(350); // 350 Points
  const [nprBalance, setNprBalance] = useState(35); // NPR 35
  const [esewaNumber, setEsewaNumber] = useState("");
  const [activeTab, setActiveTab] = useState<"videos" | "drafts" | "wallet">("wallet");
  const [toast, setToast] = useState("");
  
  // Profile edit fields
  const [name, setName] = useState("Saksham Neupane");
  const [bio, setBio] = useState("Content creator from Nepal 🇳🇵");
  const [isEditing, setIsEditing] = useState(false);

  const triggerToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2000);
  };

  const handleConvertPoints = () => {
    if (points < 100) {
      triggerToast("Minimum 100 points needed to convert!");
      return;
    }
    const convertedNpr = (points / 100) * 10;
    setNprBalance(prev => prev + convertedNpr);
    setPoints(0);
    triggerToast(`Converted ${points} Points to NPR ${convertedNpr}!`);
  };

  const handleWithdrawal = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Minimum threshold check
    if (nprBalance < 25) {
      triggerToast("Minimum withdrawal is NPR 25 (250 Points required)!");
      return;
    }

    if (!/^(98|97)\d{8}$/.test(esewaNumber)) {
      triggerToast("Enter a valid 10-digit eSewa ID starting with 98 or 97.");
      return;
    }

    triggerToast(`Withdrawal request for NPR ${nprBalance} submitted to Admin!`);
    setNprBalance(0);
  };

  return (
    <main className="min-h-screen bg-black text-white p-4 pb-24 max-w-md mx-auto relative">
      {toast && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-red-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg border border-red-400">
          {toast}
        </div>
      )}

      {/* Profile Header */}
      <div className="flex flex-col items-center mt-4 text-center">
        <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center text-3xl font-bold border-2 border-white">
          🇳🇵
        </div>
        
        {isEditing ? (
          <div className="mt-3 w-full space-y-2">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded p-1.5 text-xs text-center"
            />
            <input
              type="text"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded p-1.5 text-xs text-center"
            />
            <button onClick={() => setIsEditing(false)} className="bg-green-600 px-3 py-1 rounded text-xs font-bold">
              Save Profile
            </button>
          </div>
        ) : (
          <>
            <h2 className="mt-2 text-lg font-bold">{name}</h2>
            <p className="text-xs text-gray-400 max-w-xs">{bio}</p>
            <button onClick={() => setIsEditing(true)} className="mt-2 text-[11px] border border-gray-700 bg-gray-900 px-3 py-1 rounded-full text-gray-300">
              Edit Profile
            </button>
          </>
        )}
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-800 mt-6">
        <button
          onClick={() => setActiveTab("wallet")}
          className={`flex-1 py-2 text-center text-xs font-bold border-b-2 ${
            activeTab === "wallet" ? "border-red-500 text-white" : "border-transparent text-gray-500"
          }`}
        >
          Wallet / Earnings
        </button>
        <button
          onClick={() => setActiveTab("videos")}
          className={`flex-1 py-2 text-center text-xs font-bold border-b-2 ${
            activeTab === "videos" ? "border-red-500 text-white" : "border-transparent text-gray-500"
          }`}
        >
          Videos
        </button>
        <button
          onClick={() => setActiveTab("drafts")}
          className={`flex-1 py-2 text-center text-xs font-bold border-b-2 ${
            activeTab === "drafts" ? "border-red-500 text-white" : "border-transparent text-gray-500"
          }`}
        >
          Drafts
        </button>
      </div>

      {/* Tab Contents */}
      {activeTab === "wallet" && (
        <div className="mt-4 space-y-4">
          <div className="bg-gray-900 border border-gray-800 p-4 rounded-xl flex justify-between items-center">
            <div>
              <p className="text-xs text-gray-400">Total Reward Points</p>
              <p className="text-xl font-bold text-yellow-400">{points} Pts</p>
              <p className="text-[10px] text-gray-500">100 Points = NPR 10</p>
            </div>
            <button
              onClick={handleConvertPoints}
              className="bg-yellow-600 hover:bg-yellow-700 px-3 py-2 rounded-lg text-xs font-bold"
            >
              Convert to NPR
            </button>
          </div>

          {/* eSewa Withdrawal Form */}
          <form onSubmit={handleWithdrawal} className="bg-gray-900 border border-gray-800 p-4 rounded-xl space-y-3">
            <h3 className="text-sm font-bold text-green-400 flex items-center justify-between">
              <span>eSewa Withdrawal</span>
              <span className="text-white">Balance: NPR {nprBalance}</span>
            </h3>
            <p className="text-[11px] text-gray-400">Minimum withdrawal requirement: NPR 25 (250 Points)</p>

            <input
              type="tel"
              placeholder="eSewa Mobile ID (98XXXXXXXX)"
              maxLength={10}
              value={esewaNumber}
              onChange={(e) => setEsewaNumber(e.target.value.replace(/\D/g, ""))}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-green-500"
              required
            />

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 font-bold py-2.5 rounded-lg text-xs transition"
            >
              Request Cashout via eSewa
            </button>
          </form>
        </div>
      )}

      {activeTab === "drafts" && (
        <div className="mt-4 p-4 bg-gray-900 border border-gray-800 rounded-xl text-center">
          <p className="text-xs text-gray-400">Saved offline drafts will show up here.</p>
        </div>
      )}

      <Navbar />
    </main>
  );
}
