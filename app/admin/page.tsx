"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";

export default function AdminPanel() {
  const [pin, setPin] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [targetUser, setTargetUser] = useState("@ntngelse__");
  const [followerCount, setFollowerCount] = useState(1428);
  const [toast, setToast] = useState("");

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === "0911") {
      setIsUnlocked(true);
    } else {
      alert("Incorrect Admin PIN code!");
    }
  };

  const updateFollowers = (amount: number) => {
    const updated = Math.max(0, followerCount + amount);
    setFollowerCount(updated);
    localStorage.setItem(`followers_${targetUser}`, updated.toString());
    setToast(`Updated ${targetUser} followers to ${updated.toLocaleString()}`);
    setTimeout(() => setToast(""), 2000);
  };

  if (!isUnlocked) {
    return (
      <main className="min-h-screen bg-black text-white p-6 flex flex-col items-center justify-center">
        <form onSubmit={handleUnlock} className="w-full max-w-xs bg-gray-900 p-6 rounded-2xl border border-gray-800 text-center space-y-4">
          <h1 className="text-xl font-bold text-red-500">Admin Control Gate</h1>
          <p className="text-xs text-gray-400">Enter Admin Passcode to Access</p>
          <input
            type="password"
            placeholder="Enter PIN"
            maxLength={4}
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg p-2.5 text-center text-lg font-mono text-white tracking-widest focus:outline-none focus:border-red-500"
          />
          <button type="submit" className="w-full bg-red-600 font-bold py-2 rounded-lg text-xs">Unlock Panel</button>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-6 pb-24 max-w-md mx-auto relative">
      {toast && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-green-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg border border-green-400">
          ✓ {toast}
        </div>
      )}

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold text-red-500">Master Admin Control</h1>
        <button onClick={() => setIsUnlocked(false)} className="text-xs text-gray-400 border border-gray-700 px-2 py-1 rounded">Lock</button>
      </div>

      {/* Follower Management */}
      <div className="bg-gray-900 border border-gray-800 p-4 rounded-xl space-y-4 mb-6">
        <h2 className="text-sm font-bold text-white">Manage User Followers</h2>
        
        <div>
          <label className="text-[11px] text-gray-400 block mb-1">Target Handle</label>
          <input
            type="text"
            value={targetUser}
            onChange={(e) => setTargetUser(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded p-2 text-xs text-white"
          />
        </div>

        <div className="flex justify-between items-center bg-gray-800 p-3 rounded-lg">
          <span className="text-xs text-gray-400">Current Followers:</span>
          <span className="text-base font-bold text-yellow-400">{followerCount.toLocaleString()}</span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button onClick={() => updateFollowers(100)} className="bg-green-600 hover:bg-green-700 py-2 rounded text-xs font-bold">+100 Followers</button>
          <button onClick={() => updateFollowers(-100)} className="bg-red-600 hover:bg-red-700 py-2 rounded text-xs font-bold">-100 Followers</button>
          <button onClick={() => updateFollowers(1000)} className="bg-green-700 hover:bg-green-800 py-2 rounded text-xs font-bold">+1,000 Followers</button>
          <button onClick={() => updateFollowers(-1000)} className="bg-red-700 hover:bg-red-800 py-2 rounded text-xs font-bold">-1,000 Followers</button>
        </div>
      </div>

      <Navbar />
    </main>
  );
}
