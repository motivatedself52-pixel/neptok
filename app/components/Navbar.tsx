"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/", icon: "🏠" },
    { label: "Explore", href: "/explore", icon: "🔍" },
    { label: "Upload", href: "/upload", icon: "➕" },
    { label: "Profile", href: "/profile", icon: "👤" },
    { label: "Admin", href: "/admin", icon: "⚙️" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-around items-center bg-black/95 border-t border-gray-800 py-2 text-[10px] text-white">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`flex flex-col items-center gap-0.5 ${
            pathname === item.href ? "text-red-500 font-bold" : "text-gray-400"
          }`}
        >
          <span className="text-base">{item.icon}</span>
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}
