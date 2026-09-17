"use client";

import Navbar from "../components/Navbar";

export default function ExplorePage() {
  return (
    <main className="min-h-screen bg-black text-white p-6 pb-24">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search creators, videos, hashtags..."
          className="w-full bg-gray-900 border border-gray-800 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:border-red-500"
        />
      </div>

      <h2 className="text-base font-bold mb-3">Trending #Nepal</h2>
      <div className="grid grid-cols-2 gap-3">
        <div className="h-40 bg-gray-900 rounded-xl flex items-center justify-center border border-gray-800">#TravelNepal</div>
        <div className="h-40 bg-gray-900 rounded-xl flex items-center justify-center border border-gray-800">#Kathmandu</div>
        <div className="h-40 bg-gray-900 rounded-xl flex items-center justify-center border border-gray-800">#NepTok</div>
        <div className="h-40 bg-gray-900 rounded-xl flex items-center justify-center border border-gray-800">#Viral</div>
      </div>

      <Navbar />
    </main>
  );
}
