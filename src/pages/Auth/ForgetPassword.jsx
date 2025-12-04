import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { FaEnvelope, FaArrowLeft, FaKey } from "react-icons/fa";

const ForgetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  const handleReset = () => {
    if (!email) {
      alert("Please enter your email first.");
      return;
    }
    // Open Gmail in a new tab
    window.open("https://mail.google.com/", "_blank");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFF0F5] relative overflow-hidden px-4">
      
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#F59E0B]/10 rounded-full blur-3xl -ml-20 -mt-20 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#7D2E4E]/10 rounded-full blur-3xl -mr-20 -mb-20 pointer-events-none"></div>

      <div className="w-full max-w-md bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-[#F59E0B]/10 relative z-10">
        
        {/* Icon Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-[#FFF0F5] rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
            <FaKey className="text-4xl text-[#F59E0B]" />
          </div>
          <h2 className="text-3xl font-extrabold text-[#7D2E4E] mb-2">
            Forgot Password?
          </h2>
          <p className="text-gray-500 text-sm">
            No worries! Enter your email and we'll send you reset instructions.
          </p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          
          {/* Email Input */}
          <div className="form-control">
            <label className="block text-sm font-bold text-[#7D2E4E] mb-2 pl-1">Email Address</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="text-gray-400" />
                </div>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@email.com"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FFF0F5] border-transparent focus:bg-white focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/20 text-[#7D2E4E] font-medium outline-none transition-all placeholder-gray-400"
                />
            </div>
          </div>

          {/* Reset Button */}
          <button
            onClick={handleReset}
            className="w-full bg-[#F59E0B] hover:bg-[#d97706] text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-orange-500/30 transition-transform transform hover:scale-[1.02] active:scale-95"
          >
            Reset Password
          </button>

          {/* Back to Login */}
          <div className="text-center mt-6">
            <Link 
                to="/login" 
                className="inline-flex items-center gap-2 text-[#7D2E4E] font-bold hover:text-[#F59E0B] transition-colors"
            >
                <FaArrowLeft size={14} /> Back to Login
            </Link>
          </div>

        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;