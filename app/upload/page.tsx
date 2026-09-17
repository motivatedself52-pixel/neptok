"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";

export default function UploadPage() {
  const [caption, setCaption] = useState("");

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Video uploaded successfully to NepTok!");
    setCaption("");
  };

  return (
    <main className="min-h-screen bg-black text-white p-6 pb-24 flex flex-col items-center">
      <h1 className="text-xl font-bold mt-4 mb-6">Upload Video</h1>

      <form onSubmit={handleUpload} className="w-full max-w-sm bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-4">
        <div className="border-2 border-dashed border-gray-700 rounded-xl p-8 flex flex-col items-center justify-center text-center">
          <span className="text-3xl mb-2">📹</span>
          <p className="text-sm font-semibold">Select Video File</p>
          <p className="text-xs text-gray-500 mt-1">MP4 or WebM (Max 50MB)</p>
          <input type="file" accept="video/*" className="mt-3 text-xs text-gray-400" required />
        </div>

        <div>
          <label className="block text-xs text-gray-400 mb-1">Video Caption & Hashtags</label>
          <textarea
            rows={3}
            placeholder="Write a caption..."
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

      <Navbar />
    </main>
  );
}
