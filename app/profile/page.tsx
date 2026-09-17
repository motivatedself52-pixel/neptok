"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";

export default function ProfilePage() {
  const [balance, setBalance] = useState(2140);
  const [activeTab, setActiveTab] = useState<"videos" | "likes">("videos");

  const myUploadedVideos = [
    { id: "1", views: "14.2K", thumbnail: "https://assets.mixkit.co/videos/preview/mixkit-vertical-shot-of-a-waterfall-in-a-forest-42891-large.mp4" },
  ];

  return (
    <main className="min-h-screen bg-black text-white p-4 pb-24">
      <div className="flex flex-col items-center mt-4">
        <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center text-2xl font-bold">🇳🇵</div>
        <h2 className="mt-2 text-lg font-bold">@neptok_creator</h2>
        <p className="text-xs text-gray-400">Nepal Content Creator</p>
      </div>

      <div className="flex justify-around bg-gray-900 border border-gray-800 rounded-xl p-3 mt-4 text-center">
        <div><p className="font-bold text-sm">12.4K</p><p className="text-[10px] text-gray-400">Followers</p></div>
        <div><p className="font-bold text-sm">182</p><p className="text-[10px] text-gray-400">Following</p></div>
        <div><p className="font-bold text-sm">89.2K</p><p className="text-[10px] text-gray-400">Likes</p></div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-800 mt-6">
        <button
          onClick={() => setActiveTab("videos")}
          className={`flex-1 py-2 text-center text-xs font-bold border-b-2 ${
            activeTab === "videos" ? "border-red-500 text-white" : "border-transparent text-gray-500"
          }`}
        >
          Uploaded Videos
        </button>
        <button
          onClick={() => setActiveTab("likes")}
          className={`flex-1 py-2 text-center text-xs font-bold border-b-2 ${
            activeTab === "likes" ? "border-red-500 text-white" : "border-transparent text-gray-500"
          }`}
        >
          Liked Videos
        </button>
      </div>

      {/* Uploaded Videos Grid */}
      <div className="grid grid-cols-3 gap-1 mt-2">
        {myUploadedVideos.map((vid) => (
          <div key={vid.id} className="relative aspect-[3/4] bg-gray-900 rounded-md overflow-hidden">
            <video src={vid.thumbnail} className="w-full h-full object-cover" />
            <span className="absolute bottom-1 left-1 text-[10px] font-bold bg-black/60 px-1 rounded">
              ▶ {vid.views}
            </span>
          </div>
        ))}
      </div>

      <Navbar />
    </main>
  );
}
