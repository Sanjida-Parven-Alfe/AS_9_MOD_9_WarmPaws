import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyContainer from "../../components/MyContainer/MyContainer";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash, FaUser, FaEnvelope, FaImage, FaLock, FaGoogle } from "react-icons/fa";
import signupimage from "../../assets/signupimage.png";

const SignUp = () => {
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    const name = e.target.name?.value;
    const email = e.target.email?.value;
    const photo = e.target.photo?.value;
    const password = e.target.password?.value;

    // Password Validation
    if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setPasswordError("Password must contain at least one lowercase letter.");
      return;
    }
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      return;
    }
    setPasswordError("");

    // Create User
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateProfile(userCredential.user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            navigate("/", { state: { toastMessage: "Signup Successful ✅" } });
          })
          .catch((err) => {
            console.error("Profile update failed:", err);
            toast.error("Failed to set profile info");
          });
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  const handleGoogleSignin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(() => {
        navigate("/", { state: { toastMessage: "Login Successful ✅" } });
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFF0F5] relative overflow-hidden py-10">
      
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F59E0B]/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#7D2E4E]/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>

      <MyContainer>
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row-reverse max-w-5xl mx-auto border border-[#F59E0B]/10">
          
          {/* --- Left Side (Image) --- */}
          <div className="lg:w-1/2 bg-[#FFF0F5] p-10 flex flex-col justify-center items-center text-center relative">
            <div className="absolute inset-0 bg-[#F59E0B]/5"></div>
            <div className="relative z-10">
                <img 
                    src={signupimage} 
                    className="w-64 h-64 lg:w-80 lg:h-80 object-contain mb-6 drop-shadow-xl transform hover:scale-105 transition-transform duration-500" 
                    alt="Signup Illustration" 
                />
                <h2 className="text-3xl font-extrabold text-[#7D2E4E] mb-3">Join Our Community</h2>
                <p className="text-gray-600 max-w-xs mx-auto">
                    Create an account to access exclusive pet care services and keep your furry friend happy!
                </p>
            </div>
          </div>

          {/* --- Right Side (Form) --- */}
          <div className="lg:w-1/2 p-8 md:p-12 bg-white">
            <div className="mb-6 text-center lg:text-left">
                <h2 className="text-3xl font-bold text-[#7D2E4E]">Create Account</h2>
                <p className="text-gray-500 text-sm mt-2">Get started with your free account today.</p>
            </div>

            <form onSubmit={handleSignup} className="space-y-4" autoComplete="off">
              
              {/* Name Input */}
              <div className="form-control">
                <label className="block text-sm font-bold text-[#7D2E4E] mb-1 pl-1">Full Name</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUser className="text-gray-400" />
                    </div>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FFF0F5] border-transparent focus:bg-white focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/20 text-[#7D2E4E] font-medium outline-none transition-all placeholder-gray-400"
                    />
                </div>
              </div>

              {/* Email Input */}
              <div className="form-control">
                <label className="block text-sm font-bold text-[#7D2E4E] mb-1 pl-1">Email Address</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaEnvelope className="text-gray-400" />
                    </div>
                    <input
                        type="email"
                        name="email"
                        placeholder="example@email.com"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FFF0F5] border-transparent focus:bg-white focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/20 text-[#7D2E4E] font-medium outline-none transition-all placeholder-gray-400"
                    />
                </div>
              </div>

              {/* Photo URL Input */}
              <div className="form-control">
                <label className="block text-sm font-bold text-[#7D2E4E] mb-1 pl-1">Photo URL</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaImage className="text-gray-400" />
                    </div>
                    <input
                        type="text"
                        name="photo"
                        placeholder="Paste your photo URL"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FFF0F5] border-transparent focus:bg-white focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/20 text-[#7D2E4E] font-medium outline-none transition-all placeholder-gray-400"
                    />
                </div>
              </div>

              {/* Password Input */}
              <div className="form-control">
                <label className="block text-sm font-bold text-[#7D2E4E] mb-1 pl-1">Password</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaLock className="text-gray-400" />
                    </div>
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="••••••••"
                        className="w-full pl-10 pr-10 py-3 rounded-xl bg-[#FFF0F5] border-transparent focus:bg-white focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/20 text-[#7D2E4E] font-medium outline-none transition-all placeholder-gray-400"
                        autoComplete="new-password"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#F59E0B] transition-colors"
                    >
                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </button>
                </div>
                {passwordError && (
                  <p className="text-red-500 text-xs mt-1 font-semibold pl-1">{passwordError}</p>
                )}
              </div>

              {/* Register Button */}
              <button 
                type="submit" 
                className="w-full bg-[#F59E0B] hover:bg-[#d97706] text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-orange-500/30 transition-transform transform hover:scale-[1.02] active:scale-95 mt-2"
              >
                Register
              </button>

              {/* Divider */}
              <div className="flex items-center gap-2 my-4">
                <div className="h-px w-full bg-gray-200"></div>
                <span className="text-sm text-gray-400 font-medium">OR</span>
                <div className="h-px w-full bg-gray-200"></div>
              </div>

              {/* Google Button */}
              <button
                type="button"
                onClick={handleGoogleSignin}
                className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-sm"
              >
                <FaGoogle className="text-[#F59E0B]" />
                Continue with Google
              </button>

              {/* Login Link */}
              <p className="text-center text-gray-600 mt-4 text-sm">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-[#7D2E4E] hover:text-[#F59E0B] font-bold underline transition-colors"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default SignUp;