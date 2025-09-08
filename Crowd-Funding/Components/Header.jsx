import React from "react";

export default function Header({ onNavigate, isLoggedIn, onLogout }) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Home */}
          <div
            className="flex-shrink-0 cursor-pointer flex items-center gap-2"
            onClick={() => onNavigate("home")}
          >
            <h1 className="text-xl font-bold text-gray-800 hover:text-emerald-600 transition-colors">
              CrowdFunding
            </h1>
          </div>

          {/* Navigation buttons */}
          <nav className="flex gap-4">
            {isLoggedIn ? (
              <button
                onClick={onLogout}
                className="bg-red-500 text-white font-semibold py-2 px-4 rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => onNavigate("login")}
                className="bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded-md shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
              >
                Login
              </button>
            )}
            <button
              onClick={() => onNavigate("create")}
              className="bg-emerald-500 text-white font-semibold py-2 px-4 rounded-md shadow-sm hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
            >
              Start a Project
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
