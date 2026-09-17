"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";

interface VideoData {
  id: string;
  creator: string;
  description: string;
  likes: number;
  comments: number;
  audioName: string;
  videoUrl: string;
}

const mockVideos: VideoData[] = [
  {
    id: "1",
    creator: "@neptok_creator",
    description: "Beautiful sights of Nepal! 🇳🇵✨ #nepal #travel",
    likes: 12400,
    comments: 482,
    audioName: "Original Sound - neptok_creator",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-vertical-shot-of-a-waterfall-in-a-forest-42891-large.mp4",
  },
  {
    id: "2",
    creator: "@travelnepal",
    description: "Exploring hidden valleys ❤️ #explore",
    likes: 8700,
    comments: 231,
    audioName: "Original Sound - travelnepal",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-trees-in-a-forest-seen-from-below-43521-large.mp4",
  },
];

export default function Home() {
  const [likedMap, setLikedMap] = useState<{ [key: string]: boolean }>({});
  const [followingMap, setFollowingMap] = useState<{ [key: string]: boolean }>({});

  const toggleLike = (id: string) => {
    setLikedMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleFollow = (creator: string) => {
    setFollowingMap((prev) => ({ ...prev, [creator]: !prev[creator] }));
  };

  const handleShare = (creator: string) => {
    if (navigator.share) {
      navigator.share({ title: `Watch ${creator}'s video on NepTok!`, url: window.location.href });
    } else {
      alert("Link copied to clipboard!");
    }
  };

  const handleUseSound = (audioName: string) => {
    alert(`Using sound: "${audioName}" for your new video!`);
    window.location.href = "/upload";
  };

  return (
    <main className="relative h-screen w-full bg-black overflow-y-scroll snap-y snap-mandatory scrollbar-hide pb-16">
      <header className="fixed top-0 left-0 right-0 z-20 flex justify-between items-center p-4 bg-gradient-to-b from-black/80 to-transparent">
        <h1 className="text-xl font-bold tracking-wider text-red-500">NepTok</h1>
      </header>

      {mockVideos.map((video) => (
        <section key={video.id} className="relative h-screen w-full snap-start flex items-center justify-center">
          <video src={video.videoUrl} className="h-full w-full object-cover" loop muted autoPlay playsInline />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

          {/* Right Action Menu */}
          <div className="absolute right-4 bottom-24 z-10 flex flex-col items-center gap-5 text-white">
            {/* Creator Avatar & Follow Button */}
            <div className="relative mb-2">
              <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center font-bold text-sm border-2 border-white">
                🇳🇵
              </div>
              <button
                onClick={() => toggleFollow(video.creator)}
                className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                  followingMap[video.creator] ? "bg-gray-600" : "bg-red-500"
                }`}
              >
                {followingMap[video.creator] ? "✓" : "+"}
              </button>
            </div>

            {/* Like */}
            <button onClick={() => toggleLike(video.id)} className="flex flex-col items-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl ${likedMap[video.id] ? "bg-red-600" : "bg-gray-800/80"}`}>
                ❤️
              </div>
              <span className="text-xs mt-1">{(video.likes + (likedMap[video.id] ? 1 : 0)).toLocaleString()}</span>
            </button>

            {/* Comment */}
            <button onClick={() => alert("Comments section opening...")} className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gray-800/80 flex items-center justify-center text-xl">💬</div>
              <span className="text-xs mt-1">{video.comments}</span>
            </button>

            {/* Share */}
            <button onClick={() => handleShare(video.creator)} className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gray-800/80 flex items-center justify-center text-xl">🔗</div>
              <span className="text-xs mt-1">Share</span>
            </button>

            {/* Audio Disc / Reuse Sound */}
            <button onClick={() => handleUseSound(video.audioName)} className="flex flex-col items-center mt-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-gray-900 to-gray-700 border-2 border-gray-400 flex items-center justify-center animate-spin">
                🎵
              </div>
              <span className="text-[10px] mt-1 text-gray-300">Use Sound</span>
            </button>
          </div>

          {/* Bottom Info Bar */}
          <div className="absolute bottom-20 left-4 z-10 text-white max-w-[75%]">
            <h2 className="font-bold text-base flex items-center gap-2">
              {video.creator}
              <button
                onClick={() => toggleFollow(video.creator)}
                className="text-xs px-2 py-0.5 border border-white/50 rounded-md"
              >
                {followingMap[video.creator] ? "Following" : "Follow"}
              </button>
            </h2>
            <p className="text-xs text-gray-200 mt-1">{video.description}</p>
            <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
              🎵 <span>{video.audioName}</span>
            </p>
          </div>
        </section>
      ))}

      <Navbar />
    </main>
  );
}
