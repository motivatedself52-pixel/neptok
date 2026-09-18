"use client";

import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white max-w-md mx-auto relative pb-20">
      <header className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-b from-black/80 to-transparent p-4 flex justify-between items-center text-xs font-bold">
        <span>LIVE</span>
        <div className="flex gap-4">
          <span className="text-gray-400">Following</span>
          <span className="border-b-2 border-white pb-1">For You</span>
        </div>
        <span>🔍</span>
      </header>

      <div className="h-screen w-full flex items-center justify-center bg-gray-900 relative">
        <p className="text-gray-500 text-sm">Video Feed Preview</p>

        <div className="absolute right-3 bottom-24 flex flex-col items-center gap-4 text-xs">
          <div className="w-10 h-10 rounded-full bg-red-500 border-2 border-white flex items-center justify-center font-bold">S</div>
          <div className="flex flex-col items-center">❤️ <span className="text-[10px]">772</span></div>
          <div className="flex flex-col items-center">💬 <span className="text-[10px]">4</span></div>
          <div className="flex flex-col items-center">🔖 <span className="text-[10px]">82</span></div>
          <div className="flex flex-col items-center">↪️ <span className="text-[10px]">21</span></div>
        </div>
      </div>

      <Navbar />
    </main>
  );
}
