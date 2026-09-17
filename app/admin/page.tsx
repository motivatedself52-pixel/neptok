"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";

interface WithdrawalRequest {
  id: string;
  user: string;
  esewaNumber: string;
  amount: number;
  status: "Pending" | "Approved" | "Rejected";
  date: string;
}

export default function AdminPanel() {
  const [requests, setRequests] = useState<WithdrawalRequest[]>([
    { id: "W101", user: "@neptok_creator", esewaNumber: "9812345678", amount: 500, status: "Pending", date: "2026-09-17" },
    { id: "W102", user: "@travelnepal", esewaNumber: "9800000000", amount: 1200, status: "Approved", date: "2026-09-16" },
  ]);

  const totalAdRevenue = 15400; // Simulated total revenue from Google AdMob / Adsterra
  const adminProfit = Math.round(totalAdRevenue * 0.30); // 30% Admin Margin
  const creatorPayouts = Math.round(totalAdRevenue * 0.70); // 70% Creator Allocation

  const handleStatusChange = (id: string, newStatus: "Approved" | "Rejected") => {
    setRequests(prev => prev.map(req => req.id === id ? { ...req, status: newStatus } : req));
  };

  return (
    <main className="min-h-screen bg-black text-white p-6 pb-24 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold text-red-500 mb-1">Admin Dashboard</h1>
      <p className="text-xs text-gray-400 mb-6">Manage Ads Revenue & eSewa Cashout Approvals</p>

      {/* Revenue Breakdown */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="bg-gray-900 border border-gray-800 p-4 rounded-xl">
          <p className="text-xs text-gray-400">Total Ad Revenue</p>
          <p className="text-lg font-bold text-green-400">NPR {totalAdRevenue.toLocaleString()}</p>
        </div>
        <div className="bg-gray-900 border border-gray-800 p-4 rounded-xl">
          <p className="text-xs text-gray-400">Your Admin Profit (30%)</p>
          <p className="text-lg font-bold text-yellow-400">NPR {adminProfit.toLocaleString()}</p>
        </div>
      </div>

      {/* Withdrawal Queue */}
      <h2 className="text-base font-bold mb-3">Pending eSewa Payout Requests</h2>
      <div className="space-y-3">
        {requests.map((req) => (
          <div key={req.id} className="bg-gray-900 border border-gray-800 p-4 rounded-xl">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-sm">{req.user}</span>
              <span className={`text-xs px-2 py-0.5 rounded ${req.status === "Pending" ? "bg-yellow-600/30 text-yellow-400" : "bg-green-600/30 text-green-400"}`}>
                {req.status}
              </span>
            </div>
            <p className="text-xs text-gray-300">eSewa ID: <span className="font-mono text-white">{req.esewaNumber}</span></p>
            <p className="text-xs text-gray-300">Amount: <span className="font-bold text-green-400">NPR {req.amount}</span></p>
            <p className="text-[10px] text-gray-500 mt-1">Requested on {req.date}</p>

            {req.status === "Pending" && (
              <div className="flex gap-2 mt-3">
                <button
                  onClick={() => handleStatusChange(req.id, "Approved")}
                  className="flex-1 bg-green-600 hover:bg-green-700 py-1.5 rounded text-xs font-bold transition"
                >
                  Approve (Paid via eSewa)
                </button>
                <button
                  onClick={() => handleStatusChange(req.id, "Rejected")}
                  className="flex-1 bg-red-600/80 hover:bg-red-700 py-1.5 rounded text-xs font-bold transition"
                >
                  Reject
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      <Navbar />
    </main>
  );
}
