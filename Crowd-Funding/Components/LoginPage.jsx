import React, { useState } from "react";

export default function LoginPage({ onLogin, onCancel }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError("Both fields are required.");
      return;
    }
    setError("");
    onLogin({ email, password });
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login</h2>
      {error && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-lg mb-4 text-sm"
          role="alert"
        >
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500 transition"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500 transition"
            placeholder="••••••••"
          />
        </div>
        <div className="flex justify-between items-center pt-2">
          <button
            type="button"
            onClick={onCancel}
            className="text-gray-600 font-semibold py-2 px-4 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-emerald-500 text-white font-semibold py-2 px-6 rounded-md shadow-sm hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-75 transition"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
