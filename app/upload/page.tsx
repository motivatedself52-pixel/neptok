"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";

const mockSounds = [
  { id: "1", title: "Nepali Flute Instrumental", duration: "0:30" },
  { id: "2", title: "Lo-Fi Beats Nepal", duration: "0:45" },
  { id: "3", title: "Trending TikTok Sound - Viral", duration: "0:15" },
];

export default function UploadPage() {
  const [caption, setCaption] = useState("");
  const [selectedSound, setSelectedSound] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [showSoundModal, setShowSoundModal] = useState(false);
  const [videoFile, setVideoFile] = useState<File | null>(null);

  const filteredSounds = mockSounds.filter(s => s.title.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!videoFile) {
      alert("Please select a video file first!");
      return;
    }
    alert(`Video uploaded successfully with sound: "${selectedSound || "Original Audio"}"!`);
    setCaption("");
    setVideoFile(null);
  };

  return (
    <main className="min-h-screen bg-black text-white p-6 pb-24 flex flex-col items-center">
      <h1 className="text-xl font-bold mt-2 mb-4">Create Video</h1>

      <form onSubmit={handleUpload} className="w-full max-w-sm bg-gray-900 border border-gray-800 rounded-2xl p-5 space-y-4">
        {/* Sound Selection */}
        <div
          onClick={() => setShowSoundModal(true)}
          className="bg-gray-800 hover:bg-gray-700 border border-gray-700 p-3 rounded-xl flex items-center justify-between cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <span>🎵</span>
            <span className="text-xs font-semibold">{selectedSound || "Add Sound / Music"}</span>
          </div>
          <span className="text-xs text-red-500 font-bold">Select ›</span>
        </div>

        {/* Video File Input */}
        <div className="border-2 border-dashed border-gray-700 rounded-xl p-6 flex flex-col items-center text-center">
          <span className="text-3xl mb-2">📹</span>
          <p className="text-xs font-semibold">Choose video from device</p>
          <input
            type="file"
            accept="video/*"
            onChange={(e) => setVideoFile(e.target.files?.[0] || null)}
            className="mt-3 text-xs text-gray-400 w-full"
            required
          />
        </div>

        {/* Caption */}
        <div>
          <label className="block text-xs text-gray-400 mb-1">Caption & Hashtags</label>
          <textarea
            rows={3}
            placeholder="Write a description..."
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-red-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 font-bold py-2.5 rounded-lg text-sm transition"
        >
          Post Video
        </button>
      </form>

      {/* Sound Selection Modal */}
      {showSoundModal && (
        <div className="fixed inset-0 z-50 bg-black/90 p-6 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Select Audio</h2>
            <button onClick={() => setShowSoundModal(false)} className="text-gray-400 text-xl">✕</button>
          </div>

          <input
            type="text"
            placeholder="Search sounds..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-2 text-sm mb-4 focus:outline-none"
          />

          <div className="space-y-2 overflow-y-auto">
            {filteredSounds.map((sound) => (
              <div
                key={sound.id}
                onClick={() => {
                  setSelectedSound(sound.title);
                  setShowSoundModal(false);
                }}
                className="bg-gray-900 border border-gray-800 p-3 rounded-xl flex justify-between items-center cursor-pointer hover:bg-gray-800"
              >
                <div>
                  <p className="text-sm font-bold">🎵 {sound.title}</p>
                  <p className="text-[10px] text-gray-400">{sound.duration}</p>
                </div>
                <button className="text-xs bg-red-600 px-3 py-1 rounded-full font-bold">Use</button>
              </div>
            ))}
          </div>
        </div>
      )}

      <Navbar />
    </main>
  );
}
