"use client";

import { useState } from "react";

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
  const [balance, setBalance] = useState(2140);
  const [esewaNumber, setEsewaNumber] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [showWallet, setShowWallet] = useState(false);

  const handleWithdraw = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = parseFloat(withdrawAmount);
    if (!esewaNumber || isNaN(amount) || amount <= 0) {
      alert("Please enter a valid eSewa number and amount.");
      return;
    }
    if (amount > balance) {
      alert("Insufficient wallet balance.");
      return;
    }
    setBalance((prev) => prev - amount);
    alert(`Withdrawal request of NPR ${amount} sent for eSewa account ${esewaNumber}`);
    setWithdrawAmount("");
    setShowWallet(false);
  };

  return (
    <main className="relative h-screen w-full bg-black overflow-y-scroll snap-y snap-mandatory scrollbar-hide">
      {/* Top Header Bar */}
      <header className="fixed top-0 left-0 right-0 z-20 flex justify-between items-center p-4 bg-gradient-to-b from-black/80 to-transparent">
        <h1 className="text-xl font-bold tracking-wider text-red-500">NepTok</h1>
        <button
          onClick={() => setShowWallet(true)}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold text-xs px-3 py-1.5 rounded-full shadow-lg transition"
        >
          Wallet: NPR {balance}
        </button>
      </header>

      {/* Video Feed */}
      {mockVideos.map((video) => (
        <section key={video.id} className="relative h-screen w-full snap-start flex items-center justify-center">
          <video
            src={video.videoUrl}
            className="h-full w-full object-cover"
            loop
            muted
            autoPlay
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

          {/* Right Action Menu */}
          <div className="absolute right-4 bottom-20 z-10 flex flex-col items-center gap-5 text-white">
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

          {/* Bottom Info Bar */}
          <div className="absolute bottom-6 left-4 z-10 text-white max-w-[75%]">
            <h2 className="font-bold text-base">{video.creator}</h2>
            <p className="text-xs text-gray-200 mt-1">{video.description}</p>
          </div>
        </section>
      ))}

      {/* eSewa Withdrawal Modal */}
      {showWallet && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-gray-800 text-white rounded-2xl p-6 w-full max-w-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-green-400">eSewa Cashout</h3>
              <button onClick={() => setShowWallet(false)} className="text-gray-400 hover:text-white">✕</button>
            </div>
            <p className="text-xs text-gray-400 mb-4">
              Available Balance: <span className="text-white font-semibold">NPR {balance}</span>
            </p>
            <form onSubmit={handleWithdraw} className="space-y-4">
              <div>
                <label className="block text-xs text-gray-400 mb-1">eSewa ID / Mobile Number</label>
                <input
                  type="text"
                  placeholder="98XXXXXXXX"
                  value={esewaNumber}
                  onChange={(e) => setEsewaNumber(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-green-500"
                  required
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1">Amount (NPR)</label>
                <input
                  type="number"
                  placeholder="Minimum NPR 100"
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-green-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 font-bold py-2.5 rounded-lg text-sm transition"
              >
                Request Withdrawal
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
