"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "../components/Navbar";

export default function UploadPage() {
  const searchParams = useSearchParams();
  const initialSound = searchParams.get("sound") || "";

  const [caption, setCaption] = useState("");
  const [selectedSound, setSelectedSound] = useState(initialSound);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [toast, setToast] = useState("");
  const [videoFile, setVideoFile] = useState<File | null>(null);

  const triggerToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2000);
  };

  const handleSaveDraft = () => {
    if (!caption && !videoFile) {
      triggerToast("Nothing to save to draft!");
      return;
    }
    const drafts = JSON.parse(localStorage.getItem("neptok_drafts") || "[]");
    drafts.push({ caption, sound: selectedSound, date: new Date().toLocaleDateString() });
    localStorage.setItem("neptok_drafts", JSON.stringify(drafts));
    triggerToast("Saved to Drafts!");
    setCaption("");
    setVideoFile(null);
  };

  const handleStartUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!videoFile) {
      triggerToast("Please select a video file!");
      return;
    }

    setIsUploading(true);
    let current = 0;

    const interval = setInterval(() => {
      current += 20;
      setUploadProgress(current);

      if (current >= 100) {
        clearInterval(interval);
        setIsUploading(false);
        triggerToast("Video posted successfully!");
        setCaption("");
        setVideoFile(null);
        setUploadProgress(0);
      }
    }, 400);
  };

  return (
    <main className="min-h-screen bg-black text-white p-6 pb-24 flex flex-col items-center relative max-w-md mx-auto">
      {toast && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-red-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg border border-red-400">
          {toast}
        </div>
      )}

      <h1 className="text-xl font-bold my-3">Create Video</h1>

      <form onSubmit={handleStartUpload} className="w-full bg-gray-900 border border-gray-800 rounded-2xl p-5 space-y-4">
        {/* Selected Audio Banner */}
        <div className="bg-gray-800 border border-gray-700 p-3 rounded-xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span>🎵</span>
            <span className="text-xs font-semibold">{selectedSound || "Original Sound"}</span>
          </div>
          <button
            type="button"
            onClick={() => setSelectedSound("Nepali Remix Beat 2026")}
            className="text-xs text-red-500 font-bold"
          >
            Change Sound ›
          </button>
        </div>

        {/* Video Picker with Permissions */}
        <div className="border-2 border-dashed border-gray-700 rounded-xl p-6 flex flex-col items-center text-center bg-gray-900/50">
          <span className="text-3xl mb-2">📷 / 📹</span>
          <p className="text-xs font-semibold">Camera or Gallery</p>
          <input
            type="file"
            accept="video/*"
            capture="environment"
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
            placeholder="Describe your video #nepal #trending..."
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-red-500"
            required
          />
        </div>

        {/* Upload Progress Bar */}
        {isUploading && (
          <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden border border-gray-700">
            <div className="bg-red-600 h-full transition-all duration-300" style={{ width: `${uploadProgress}%` }} />
          </div>
        )}

        <div className="flex gap-2 pt-2">
          <button
            type="button"
            onClick={handleSaveDraft}
            className="flex-1 bg-gray-800 hover:bg-gray-700 font-bold py-2.5 rounded-lg text-xs transition border border-gray-700"
          >
            Save Draft
          </button>
          <button
            type="submit"
            disabled={isUploading}
            className="flex-1 bg-red-600 hover:bg-red-700 font-bold py-2.5 rounded-lg text-xs transition disabled:opacity-50"
          >
            {isUploading ? `Uploading ${uploadProgress}%` : "Post Video"}
          </button>
        </div>
      </form>

      <Navbar />
    </main>
  );
}
