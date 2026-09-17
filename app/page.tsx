"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";

interface VideoData {
  id: string;
  creator: string;
  description: string;
  likes: number;
  commentsCount: number;
  views: number;
  audioName: string;
  videoUrl: string;
  audioUrl: string;
}

const mockVideos: VideoData[] = [
  {
    id: "1",
    creator: "@neptok_official",
    description: "Welcome to NepTok! 🇳🇵 Earn money watching & creating videos.",
    likes: 1240,
    commentsCount: 18,
    views: 25000,
    audioName: "Nepali Folk Instrumental",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-vertical-shot-of-a-waterfall-in-a-forest-42891-large.mp4",
    audioUrl: "https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3",
  },
];

export default function Home() {
  const [user, setUser] = useState<{ name: string } | null>(null);
  const [likedMap, setLikedMap] = useState<{ [key: string]: boolean }>({});
  const [followingMap, setFollowingMap] = useState<{ [key: string]: boolean }>({});
  const [toast, setToast] = useState("");
  const [activeCommentVideo, setActiveCommentVideo] = useState<VideoData | null>(null);
  const [commentsList, setCommentsList] = useState<string[]>(["Awesome video! 🇳🇵", "Love this content!"]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("neptok_user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const triggerToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2000);
  };

  const handleUseSound = (audioName: string) => {
    triggerToast(`Sound selected: "${audioName}"`);
    setTimeout(() => {
      window.location.href = `/upload?sound=${encodeURIComponent(audioName)}`;
    }, 1000);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    setCommentsList([...commentsList, newComment]);
    setNewComment("");
  };

  return (
    <main className="relative h-screen w-full bg-black overflow-y-scroll snap-y snap-mandatory scrollbar-hide pb-16">
      {/* Top Banner Toast */}
      {toast && (
        <div className="fixed top-12 left-1/2 -translate-x-1/2 z-50 bg-red-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg border border-red-400">
          {toast}
        </div>
      )}

      <header className="fixed top-0 left-0 right-0 z-20 flex justify-between items-center p-4 bg-gradient-to-b from-black/80 to-transparent">
        <h1 className="text-xl font-bold tracking-wider text-red-500">NepTok</h1>
        {user ? (
          <a href="/profile" className="text-xs bg-gray-800 border border-gray-700 px-3 py-1 rounded-full font-bold text-white flex items-center gap-1">
            👤 <span>{user.name}</span>
          </a>
        ) : (
          <a href="/login" className="text-xs bg-red-600 px-3 py-1 rounded-full font-bold text-white">Login / Register</a>
        )}
      </header>

      {mockVideos.map((video) => {
        const pointsEarned = Math.round((video.views / 1000) * 100);
        const moneyNpr = Math.round((pointsEarned / 100) * 10);

        return (
          <section key={video.id} className="relative h-screen w-full snap-start flex items-center justify-center">
            <video src={video.videoUrl} className="h-full w-full object-cover" loop muted autoPlay playsInline />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

            {/* Right Action Menu */}
            <div className="absolute right-4 bottom-24 z-10 flex flex-col items-center gap-4 text-white">
              {/* Creator Avatar & Follow */}
              <div className="relative mb-1">
                <div className="w-11 h-11 rounded-full bg-red-600 flex items-center justify-center font-bold text-sm border-2 border-white">
                  🇳🇵
                </div>
                <button
                  onClick={() => {
                    setFollowingMap(p => ({ ...p, [video.creator]: !p[video.creator] }));
                    triggerToast(followingMap[video.creator] ? `Unfollowed ${video.creator}` : `Followed ${video.creator}!`);
                  }}
                  className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    followingMap[video.creator] ? "bg-gray-600" : "bg-red-500"
                  }`}
                >
                  {followingMap[video.creator] ? "✓" : "+"}
                </button>
              </div>

              {/* Like */}
              <button onClick={() => setLikedMap(p => ({ ...p, [video.id]: !p[video.id] }))} className="flex flex-col items-center">
                <div className={`w-11 h-11 rounded-full flex items-center justify-center text-lg ${likedMap[video.id] ? "bg-red-600" : "bg-gray-800/80"}`}>
                  ❤️
                </div>
                <span className="text-[11px] mt-0.5">{(video.likes + (likedMap[video.id] ? 1 : 0)).toLocaleString()}</span>
              </button>

              {/* Comment Drawer Trigger */}
              <button onClick={() => setActiveCommentVideo(video)} className="flex flex-col items-center">
                <div className="w-11 h-11 rounded-full bg-gray-800/80 flex items-center justify-center text-lg">💬</div>
                <span className="text-[11px] mt-0.5">{video.commentsCount + commentsList.length - 2}</span>
              </button>

              {/* Points / Earnings Display */}
              <div className="flex flex-col items-center">
                <div className="w-11 h-11 rounded-full bg-yellow-600/80 flex items-center justify-center text-lg">🪙</div>
                <span className="text-[10px] mt-0.5 text-yellow-400 font-bold">{pointsEarned} Pts</span>
                <span className="text-[9px] text-green-400 font-semibold">(NPR {moneyNpr})</span>
              </div>

              {/* Audio Disc / Clickable Reuse */}
              <button onClick={() => handleUseSound(video.audioName)} className="flex flex-col items-center mt-1 cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-gray-900 to-gray-700 border-2 border-red-500 flex items-center justify-center animate-spin">
                  🎵
                </div>
                <span className="text-[9px] mt-0.5 text-gray-300 font-bold">Use Sound</span>
              </button>
            </div>

            {/* Bottom Info Bar */}
            <div className="absolute bottom-20 left-4 z-10 text-white max-w-[75%]">
              <h2 className="font-bold text-base flex items-center gap-2">
                {video.creator}
              </h2>
              <p className="text-xs text-gray-200 mt-1">{video.description}</p>
              <button onClick={() => handleUseSound(video.audioName)} className="text-xs text-gray-300 mt-2 flex items-center gap-1 bg-black/40 px-2 py-1 rounded-full border border-gray-700">
                🎵 <span>{video.audioName} • Tap to Use</span>
              </button>
            </div>
          </section>
        );
      })}

      {/* Slide-Up Comments Drawer */}
      {activeCommentVideo && (
        <div className="fixed inset-0 z-50 bg-black/60 flex flex-col justify-end">
          <div className="bg-gray-900 border-t border-gray-800 rounded-t-2xl p-4 h-[60vh] flex flex-col text-white">
            <div className="flex justify-between items-center border-b border-gray-800 pb-2 mb-3">
              <h3 className="text-sm font-bold">Comments</h3>
              <button onClick={() => setActiveCommentVideo(null)} className="text-gray-400 font-bold text-lg">✕</button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-3 mb-3">
              {commentsList.map((c, idx) => (
                <div key={idx} className="bg-gray-800/60 p-2.5 rounded-lg text-xs">
                  <span className="font-bold text-red-400 block mb-0.5">@user_nepal</span>
                  {c}
                </div>
              ))}
            </div>

            <form onSubmit={handleAddComment} className="flex gap-2">
              <input
                type="text"
                placeholder="Add a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-red-500"
              />
              <button type="submit" className="bg-red-600 px-4 py-2 rounded-lg text-xs font-bold">Post</button>
            </form>
          </div>
        </div>
      )}

      <Navbar />
    </main>
  );
}
