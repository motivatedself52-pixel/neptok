"use client";

import { useState } from "react";

const videos = [
  {
    id: 1,
    video:
      "https://videos.pexels.com/video-files/3045163/3045163-hd_1080_1920_25fps.mp4",
    username: "@neptok_creator",
    caption: "Beautiful Nepal 🇳🇵✨",
    likes: 12400,
    comments: 482,
  },
  {
    id: 2,
    video:
      "https://videos.pexels.com/video-files/3129595/3129595-hd_1080_1920_25fps.mp4",
    username: "@travelnepal",
    caption: "Exploring new places ❤️",
    likes: 8700,
    comments: 231,
  },
];

export default function Home() {
  const [liked, setLiked] = useState<number[]>([]);

  function toggleLike(id: number) {
    setLiked((old) =>
      old.includes(id)
        ? old.filter((item) => item !== id)
        : [...old, id]
    );
  }

  return (
    <main className="bg-black text-white">
      {/* TOP BAR */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
        <div className="rounded-full bg-black/50 px-5 py-2 backdrop-blur-md">
          <span className="font-bold">For You</span>
          <span className="mx-3 text-gray-500">|</span>
          <span className="text-gray-400">Following</span>
        </div>
      </header>

      {/* VIDEO FEED */}
      <div className="h-screen snap-y snap-mandatory overflow-y-scroll">
        {videos.map((item) => (
          <section
            key={item.id}
            className="relative h-screen w-full snap-start overflow-hidden"
          >
            <video
              src={item.video}
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />

            {/* DARK GRADIENT */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20" />

            {/* CREATOR INFO */}
            <div className="absolute bottom-20 left-5 max-w-[70%]">
              <h2 className="text-lg font-bold">
                {item.username}
              </h2>

              <p className="mt-2 text-sm">
                {item.caption}
              </p>

              <p className="mt-3 text-xs text-gray-300">
                🎵 Original sound
              </p>
            </div>

            {/* ACTION BUTTONS */}
            <div className="absolute bottom-24 right-4 flex flex-col items-center gap-5">

              <button
                onClick={() => toggleLike(item.id)}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-black/40 text-2xl"
              >
                <span
                  className={
                    liked.includes(item.id)
                      ? "text-red-500"
                      : "text-white"
                  }
                >
                  ♥
                </span>
              </button>

              <span className="text-xs">
                {(item.likes / 1000).toFixed(1)}K
              </span>

              <button className="flex h-12 w-12 items-center justify-center rounded-full bg-black/40 text-2xl">
                💬
              </button>

              <span className="text-xs">
                {item.comments}
              </span>

              <button className="flex h-12 w-12 items-center justify-center rounded-full bg-black/40 text-2xl">
                ↗
              </button>

            </div>
          </section>
        ))}
      </div>

      {/* BOTTOM NAVIGATION */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around bg-black/80 px-3 py-3 backdrop-blur-md">

        <button className="flex flex-col items-center text-xs">
          <span className="text-xl">⌂</span>
          Home
        </button>

        <button className="flex flex-col items-center text-xs text-gray-400">
          <span className="text-xl">⌕</span>
          Discover
        </button>

        <button className="flex h-10 w-14 items-center justify-center rounded-xl bg-white text-2xl text-black">
          +
        </button>

        <button className="flex flex-col items-center text-xs text-gray-400">
          <span className="text-xl">♡</span>
          Inbox
        </button>

        <button className="flex flex-col items-center text-xs text-gray-400">
          <span className="text-xl">●</span>
          Profile
        </button>

      </nav>
    </main>
  );
}
