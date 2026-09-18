"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";

export default function AdminPage() {
  const [pin, setPin] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [followers, setFollowers] = useState(1428);

  if (!unlocked) {
    return (
      <main className="min-h-screen bg-black text-white p-6 flex flex-col items-center justify-center">
        <div className="w-full max-w-xs bg-gray-900 p-6 rounded-2xl border border-gray-800 text-center space-y-4">
          <h1 className="text-xl font-bold text-red-500">Admin Control</h1>
          <p className="text-xs text-gray-400">Enter PIN code to access settings</p>
          <input
            type="password"
            placeholder="Passcode"
            maxLength={4}
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg p-2.5 text-center text-lg font-mono text-white tracking-widest focus:outline-none focus:border-red-500"
          />
          <button
            onClick={() => (pin === "0911" ? setUnlocked(true) : alert("Wrong Passcode!"))}
            className="w-full bg-red-600 font-bold py-2 rounded-lg text-xs"
          >
            Access Panel
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-6 pb-24 max-w-md mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold text-red-500">Master Admin Control</h1>
        <button onClick={() => setUnlocked(false)} className="text-xs text-gray-400 border border-gray-700 px-2 py-1 rounded">
          Lock
        </button>
      </div>

      <div className="bg-gray-900 border border-gray-800 p-4 rounded-xl space-y-4">
        <h2 className="text-sm font-bold text-white">Follower Count Modifier</h2>
        <div className="flex justify-between items-center bg-gray-800 p-3 rounded-lg">
          <span className="text-xs text-gray-400">Current Followers:</span>
          <span className="text-base font-bold text-yellow-400">{followers.toLocaleString()}</span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button onClick={() => setFollowers(followers + 100)} className="bg-green-600 hover:bg-green-700 py-2 rounded text-xs font-bold">
            +100 Followers
          </button>
          <button onClick={() => setFollowers(Math.max(0, followers - 100))} className="bg-red-600 hover:bg-red-700 py-2 rounded text-xs font-bold">
            -100 Followers
          </button>
          <button onClick={() => setFollowers(followers + 1000)} className="bg-green-700 hover:bg-green-800 py-2 rounded text-xs font-bold">
            +1,000 Followers
          </button>
          <button onClick={() => setFollowers(Math.max(0, followers - 1000))} className="bg-red-700 hover:bg-red-800 py-2 rounded text-xs font-bold">
            -1,000 Followers
          </button>
        </div>
      </div>

      <Navbar />
    </main>
  );
}
