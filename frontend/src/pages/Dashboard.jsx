import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Baad mein yahan backend ka logout function aayega
    navigate('/');
  };

  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col shadow-2xl">
        <div className="h-20 flex items-center justify-center border-b border-gray-800">
          <h1 className="text-2xl font-bold tracking-wider">EduCore<span className="text-blue-500">.</span></h1>
        </div>
        
        <nav className="flex-1 px-4 py-8 space-y-2">
          <a href="#" className="flex items-center gap-3 bg-blue-600 px-4 py-3 rounded-xl text-white font-medium shadow-lg shadow-blue-500/30">
            📊 Overview
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-gray-800 transition">
            👥 Students
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-gray-800 transition">
            👨‍🏫 Teachers
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-gray-800 transition">
            💰 Fees
          </a>
        </nav>

        <div className="p-4 border-t border-gray-800">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 bg-gray-800 hover:bg-red-500 hover:text-white text-gray-300 py-3 rounded-xl transition-all"
          >
            Log Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        {/* Top Navbar */}
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-gray-200 flex items-center justify-between px-8 z-10 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800">Admin Dashboard</h2>
          <div className="flex items-center gap-4">
            <span className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm font-semibold border border-gray-200">
              Session 2026-27
            </span>
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-2 border-white shadow-md cursor-pointer"></div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-8 relative">
           {/* Background subtle blur */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 -z-10"></div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition">
              <h3 className="text-gray-500 text-sm font-semibold mb-1">Total Students</h3>
              <p className="text-3xl font-bold text-gray-900">1,248</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition">
              <h3 className="text-gray-500 text-sm font-semibold mb-1">Total Teachers</h3>
              <p className="text-3xl font-bold text-gray-900">54</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition">
              <h3 className="text-gray-500 text-sm font-semibold mb-1">Fee Collection</h3>
              <p className="text-3xl font-bold text-gray-900">$45,200</p>
            </div>
          </div>

          {/* Recent Activity Table Placeholder */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Admissions</h3>
            <p className="text-gray-500 italic">No new data to show yet. Backend API integration pending...</p>
          </div>
        </div>
      </main>

    </div>
  );
};

export default Dashboard;