"use client";

import { useEffect, useState } from "react";
import { RefreshCcw } from "lucide-react";

export default function StatsSection() {
  const [stats, setStats] = useState({
    pageViews: 0,
    uniqueVisitors: 0,
    articleCount: 0,
    lastUpdate: "Loading...",
  });

  // Fungsi untuk mengambil data statistik dari API (Mock)
  const fetchStats = async () => {
    try {
      const response = await fetch("https://67b41927392f4aa94fa94b60.mockapi.io/kitabantu/stats");
      const data = await response.json();

      setStats({
        pageViews: data.pageViews,
        uniqueVisitors: data.uniqueVisitors,
        articleCount: data.articleCount,
        lastUpdate: new Date().toLocaleTimeString(),
      });
    } catch (error) {
      console.error("Failed to fetch stats:", error);
    }
  };

  useEffect(() => {
    fetchStats();
    const interval = setInterval(fetchStats, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white shadow-md rounded-lg p-6 mx-auto mt-10 w-full max-w-4xl">
      <h2 className="text-2xl font-bold text-center mb-6">📊 Website Statistics</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Page Views */}
        <div className="text-center p-4 bg-gray-100 rounded-lg">
          <h3 className="text-lg font-semibold">Page Views</h3>
          <p className="text-2xl font-bold">{stats.pageViews}</p>
          <p className="text-sm text-gray-500">Total halaman yang dikunjungi pengguna.</p>
        </div>

        {/* Unique Visitors */}
        <div className="text-center p-4 bg-gray-100 rounded-lg">
          <h3 className="text-lg font-semibold">Unique Visitors</h3>
          <p className="text-2xl font-bold">{stats.uniqueVisitors}</p>
          <p className="text-sm text-gray-500">Pengguna unik yang mengunjungi website.</p>
        </div>

        {/* Total Articles */}
        <div className="text-center p-4 bg-gray-100 rounded-lg">
          <h3 className="text-lg font-semibold">Total Articles</h3>
          <p className="text-2xl font-bold">{stats.articleCount}</p>
          <p className="text-sm text-gray-500">Jumlah artikel yang telah dipublikasikan.</p>
        </div>

        {/* Last Update */}
        <div className="text-center p-4 bg-gray-100 rounded-lg">
          <h3 className="text-lg font-semibold">Last Update</h3>
          <p className="text-lg">{stats.lastUpdate}</p>
          <p className="text-sm text-gray-500">Data terakhir diperbarui.</p>
        </div>
      </div>

      <div className="text-center mt-6">
        <button
          onClick={fetchStats}
          className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded flex items-center justify-center mx-auto"
        >
          <RefreshCcw className="h-5 w-5 mr-2" /> Refresh Data
        </button>
      </div>
    </section>
  );
}
