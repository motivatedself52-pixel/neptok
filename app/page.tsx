"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();

  return (
    <main className="min-h-screen bg-black text-white max-w-md mx-auto relative pb-20">
      {/* Top Header Feed Nav */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-b from-black/80 to-transparent p-4 flex justify-between items-center text-xs font-bold">
        <span>LIVE</span>
        <div className="flex gap-4">
          <span className="text-gray-400">Following</span>
          <span className="border-b-2 border-white pb-1">For You</span>
        </div>
        <span>🔍</span>
      </header>

      {/* Main Video Area */}
      <div className="h-screen w-full flex items-center justify-center bg-gray-900 relative">
        <p className="text-gray-500 text-sm">Video Feed Preview</p>

        {/* Right Sidebar Icons */}
        <div className="absolute right-3 bottom-24 flex flex-col items-center gap-4 text-xs">
          <div className="w-10 h-10 rounded-full bg-red-500 border-2 border-white flex items-center justify-center font-bold">
            S
          </div>
          <div className="flex flex-col items-center">
            <span>❤️</span>
            <span className="text-[10px]">772</span>
          </div>
          <div className="flex flex-col items-center">
            <span>💬</span>
            <span className="text-[10px]">4</span>
          </div>
          <div className="flex flex-col items-center">
            <span>🔖</span>
            <span className="text-[10px]">82</span>
          </div>
          <div className="flex flex-col items-center">
            <span>↪️</span>
            <span className="text-[10px]">21</span>
          </div>
        </div>
      </div>

      {/* Embedded Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-around items-center bg-black border-t border-gray-800 py-2 text-[10px] text-white">
        <Link
          href="/"
          className={`flex flex-col items-center gap-0.5 ${
            pathname === "/" ? "text-white font-bold" : "text-gray-400"
          }`}
        >
          <span className="text-lg">🏠</span>
          <span>Home</span>
        </Link>
        <Link
          href="/explore"
          className={`flex flex-col items-center gap-0.5 ${
            pathname === "/explore" ? "text-white font-bold" : "text-gray-400"
          }`}
        >
          <span className="text-lg">🧭</span>
          <span>Discover</span>
        </Link>
        <Link href="/upload" className="flex flex-col items-center">
          <div className="w-10 h-7 bg-gradient-to-r from-cyan-400 via-white to-red-500 rounded-lg flex items-center justify-center text-black font-extrabold text-base">
            +
          </div>
        </Link>
        <Link
          href="/wallet"
          className={`flex flex-col items-center gap-0.5 relative ${
            pathname === "/wallet" ? "text-white font-bold" : "text-gray-400"
          }`}
        >
          <span className="text-lg">💬</span>
          <span className="absolute -top-1 right-2 bg-red-600 text-white text-[9px] font-bold px-1 rounded-full">
            10
          </span>
          <span>Inbox</span>
        </Link>
        <Link
          href="/profile"
          className={`flex flex-col items-center gap-0.5 ${
            pathname === "/profile" ? "text-white font-bold" : "text-gray-400"
          }`}
        >
          <span className="text-lg">👤</span>
          <span>Profile</span>
        </Link>
      </nav>
    </main>
  );
}
