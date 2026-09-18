"use client";

import Navbar from "@/components/Navbar";

export default function DiscoverPage() {
  return (
    <main className="min-h-screen bg-black text-white p-4 pb-24 max-w-md mx-auto">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search videos, hashtags..."
          className="w-full bg-gray-900 border border-gray-800 rounded-lg p-2.5 text-xs text-white"
        />
      </div>

      <div className="h-32 bg-gradient-to-r from-purple-900 to-indigo-900 rounded-xl mb-6 flex items-center justify-center font-extrabold text-xl tracking-wider text-pink-400 border border-pink-500/30">
        Shooting Guide
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-xs font-bold mb-2"># abapalomahilako <span className="text-gray-500 font-normal">737 &gt;</span></p>
          <div className="grid grid-cols-3 gap-1">
            <div className="aspect-[3/4] bg-gray-800 rounded"></div>
            <div className="aspect-[3/4] bg-gray-800 rounded"></div>
            <div className="aspect-[3/4] bg-gray-800 rounded"></div>
          </div>
        </div>
      </div>

      <Navbar />
    </main>
  );
}
