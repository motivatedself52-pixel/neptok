"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-around items-center bg-black border-t border-gray-800 py-2 text-[10px] text-white">
      <Link href="/" className={`flex flex-col items-center gap-0.5 ${pathname === "/" ? "text-white font-bold" : "text-gray-400"}`}>
        <span className="text-lg">🏠</span>
        <span>Home</span>
      </Link>

      <Link href="/explore" className={`flex flex-col items-center gap-0.5 ${pathname === "/explore" ? "text-white font-bold" : "text-gray-400"}`}>
        <span className="text-lg">🧭</span>
        <span>Discover</span>
      </Link>

      <Link href="/upload" className="flex flex-col items-center">
        <div className="w-10 h-7 bg-gradient-to-r from-cyan-400 via-white to-red-500 rounded-lg flex items-center justify-center text-black font-extrabold text-base">
          +
        </div>
      </Link>

      <Link href="/wallet" className={`flex flex-col items-center gap-0.5 relative ${pathname === "/wallet" ? "text-white font-bold" : "text-gray-400"}`}>
        <span className="text-lg">💬</span>
        <span className="absolute -top-1 right-2 bg-red-600 text-white text-[9px] font-bold px-1 rounded-full">10</span>
        <span>Inbox</span>
      </Link>

      <Link href="/profile" className={`flex flex-col items-center gap-0.5 ${pathname === "/profile" ? "text-white font-bold" : "text-gray-400"}`}>
        <span className="text-lg">👤</span>
        <span>Profile</span>
      </Link>
    </nav>
  );
}
