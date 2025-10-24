import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ForgetPassword = () => {
  const location = useLocation();
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  const handleReset = () => {
    window.open("https://mail.google.com/", "_blank");
  };

  return (
    <div className="min-h-[calc(100vh-20px)] flex items-center justify-center bg-gradient-to-br from-amber-100 via-orange-100 to-rose-50">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl">
        <h2 className="text-2xl font-semibold mb-4 text-amber-950 text-center">
          Reset Password
        </h2>

        <div className="mb-4">
          <label className="block text-sm mb-1 text-amber-950">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered border border-gray-400 w-full bg-white/20 text-amber-950 placeholder-gray-400/60 focus:outline-none focus:ring-2 focus:ring-amber-800"
          />
        </div>

        <button
          onClick={handleReset}
          className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-lg font-semibold transition-colors"
        >
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default ForgetPassword;
