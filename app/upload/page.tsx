"use client";

import Navbar from "@/components/Navbar";

export default function UploadPage() {
  return (
    <main className="min-h-screen bg-black text-white p-6 flex flex-col items-center justify-center max-w-md mx-auto">
      <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl text-center space-y-4 max-w-xs">
        <div className="text-3xl">📹</div>
        <h2 className="text-sm font-bold">Allow TikTok to take pictures and record video?</h2>
        <div className="flex flex-col gap-2 text-xs">
          <button className="bg-blue-600 font-bold py-2 rounded-lg">While using the app</button>
          <button className="bg-gray-800 py-2 rounded-lg">Only this time</button>
          <button className="bg-gray-800 py-2 rounded-lg text-red-400">Don't allow</button>
        </div>
      </div>

      <Navbar />
    </main>
  );
}
