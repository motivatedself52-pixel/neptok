"use client";

import Navbar from "@/components/Navbar";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-black text-white p-4 pb-24 max-w-md mx-auto">
      <div className="flex justify-between items-center mb-4">
        <span className="text-lg">✏️</span>
        <span className="font-bold text-sm">SAKCHAM NEUPANE</span>
        <span className="text-lg">☰</span>
      </div>

      <div className="flex flex-col items-center gap-2 mb-4">
        <div className="w-20 h-20 rounded-full bg-gray-700 border-2 border-white flex items-center justify-center text-2xl font-bold">
          SN
        </div>
        <p className="text-xs text-gray-400">@ntngelse__</p>
      </div>

      <div className="flex justify-center gap-6 text-center mb-4">
        <div><p className="font-bold text-sm">86</p><p className="text-[10px] text-gray-400">Following</p></div>
        <div><p className="font-bold text-sm">1,428</p><p className="text-[10px] text-gray-400">Followers</p></div>
        <div><p className="font-bold text-sm">4,110</p><p className="text-[10px] text-gray-400">Likes</p></div>
      </div>

      <div className="flex justify-center mb-6">
        <button className="bg-gray-800 text-xs px-4 py-1.5 rounded-full border border-gray-700 font-semibold">
          🎬 TikTok Studio
        </button>
      </div>

      <div className="grid grid-cols-3 gap-1">
        <div className="aspect-[3/4] bg-gray-800 flex items-center justify-center text-xs text-gray-500">Drafts: 5</div>
        <div className="aspect-[3/4] bg-gray-800 flex items-center justify-center text-xs text-gray-500">▷ 2,280</div>
        <div className="aspect-[3/4] bg-gray-800 flex items-center justify-center text-xs text-gray-500">▷ 6,966</div>
      </div>

      <Navbar />
    </main>
  );
}
