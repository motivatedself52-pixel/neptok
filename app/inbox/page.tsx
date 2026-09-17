"use client";

import Navbar from "../components/Navbar";

export default function InboxPage() {
  return (
    <main className="min-h-screen bg-black text-white p-6 pb-24">
      <h1 className="text-xl font-bold mb-4">Notifications & Messages</h1>

      <div className="space-y-3">
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-3.5 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-sm font-bold">❤️</div>
          <div>
            <p className="text-sm font-semibold">@travelnepal liked your video</p>
            <p className="text-xs text-gray-500">2 hours ago</p>
          </div>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-3.5 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-sm font-bold">💰</div>
          <div>
            <p className="text-sm font-semibold">eSewa Withdrawal Approved (NPR 500)</p>
            <p className="text-xs text-gray-500">Yesterday</p>
          </div>
        </div>
      </div>

      <Navbar />
    </main>
  );
}
