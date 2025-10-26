"use client";

import { useState } from "react";
import axios from "axios";

interface AdminLoginModalProps {
  onSuccess: () => void;
}

const AdminLoginModal = ({ onSuccess }: AdminLoginModalProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.post("https://zanu-sunidhi-coliving-4.onrender.co/api/admin/login", {
        email,
        password,
      });

      if (res.data.success) {
        onSuccess(); // ✅ login successful
      } else {
        setError(res.data.message || "❌ Login failed");
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "❌ Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-xl p-6 w-80 shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-center">Admin Login</h2>
        {error && <p className="text-red-600 text-sm mb-2 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 w-full rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 w-full rounded"
            required
          />
          <button
            type="submit"
            className={`w-full py-2 px-4 rounded text-white transition ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
            }`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginModal;
