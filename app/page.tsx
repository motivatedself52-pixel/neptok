"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";

interface VideoData {
  id: string;
  creator: string;
  description: string;
  likes: number;
  comments: number;
  earnings: number;
  videoUrl: string;
}

const mockVideos: VideoData[] = [
  {
    id: "1",
    creator: "@neptok_creator",
    description: "Beautiful sights of Nepal! 🇳🇵✨ #nepal #travel",
    likes: 12400,
    comments: 482,
    earnings: 1250,
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-vertical-shot-of-a-waterfall-in-a-forest-42891-large.mp4",
  },
  {
    id: "2",
    creator: "@travelnepal",
    description: "Exploring hidden valleys ❤️ #explore",
    likes: 8700,
    comments: 231,
    earnings: 890,
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-trees-in-a-forest-seen-from-below-43521-large.mp4",
  },
];

export default function Home() {
  return (
    <main className="relative h-screen w-full bg-black overflow-y-scroll snap-y snap-mandatory scrollbar-hide pb-16">
      <header className="fixed top-0 left-0 right-0 z-20 flex justify-between items-center p-4 bg-gradient-to-b from-black/80 to-transparent">
        <h1 className="text-xl font-bold tracking-wider text-red-500">NepTok</h1>
      </header>

      {mockVideos.map((video) => (
        <section key={video.id} className="relative h-screen w-full snap-start flex items-center justify-center">
          <video src={video.videoUrl} className="h-full w-full object-cover" loop muted autoPlay playsInline />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

          <div className="absolute right-4 bottom-24 z-10 flex flex-col items-center gap-5 text-white">
            <button className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gray-800/80 flex items-center justify-center">❤️</div>
              <span className="text-xs mt-1">{(video.likes / 1000).toFixed(1)}k</span>
            </button>
            <button className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gray-800/80 flex items-center justify-center">💬</div>
              <span className="text-xs mt-1">{video.comments}</span>
            </button>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-green-800/80 flex items-center justify-center">💰</div>
              <span className="text-xs mt-1">NPR {video.earnings}</span>
            </div>
          </div>

          <div className="absolute bottom-20 left-4 z-10 text-white max-w-[75%]">
            <h2 className="font-bold text-base">{video.creator}</h2>
            <p className="text-xs text-gray-200 mt-1">{video.description}</p>
          </div>
        </section>
      ))}

      <Navbar />
    </main>
  );
}
