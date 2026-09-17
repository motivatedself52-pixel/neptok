"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";

export default function ExplorePage() {
  const [search, setSearch] = useState("");
  const [followingMap, setFollowingMap] = useState<{ [key: string]: boolean }>({});

  const creators = ["@kathmandu_vlogs", "@pokhara_vibes", "@cricket_nepal"];

  return (
    <main className="min-h-screen bg-black text-white p-4 pb-24 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search videos, creators, or sound..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-red-500"
      />

      <h2 className="text-xs font-bold text-gray-400 mt-6 mb-3 uppercase tracking-wider">Find & Follow Friends</h2>
      <div className="space-y-2">
        {creators.map((c) => (
          <div key={c} className="bg-gray-900 border border-gray-800 p-3 rounded-xl flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center font-bold text-xs">🇳🇵</div>
              <span className="text-xs font-bold">{c}</span>
            </div>
            <button
              onClick={() => setFollowingMap(p => ({ ...p, [c]: !p[c] }))}
              className={`text-xs px-3 py-1 rounded-full font-bold ${followingMap[c] ? "bg-gray-700 text-gray-300" : "bg-red-600 text-white"}`}
            >
              {followingMap[c] ? "Following" : "Follow"}
            </button>
          </div>
        ))}
      </div>

      <Navbar />
    </main>
  );
}
