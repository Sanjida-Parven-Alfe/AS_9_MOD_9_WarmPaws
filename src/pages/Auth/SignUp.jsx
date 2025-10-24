import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyContainer from "../../components/MyContainer/MyContainer";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

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

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        toast.success("Signup Successful 🎉");
        navigate("/");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  const handleGoogleSignin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        toast.success("Logged in with Google ✅");
        navigate("/");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  return (
    <div className="min-h-[96vh] flex items-center justify-center bg-gradient-to-br from-orange-200 via-orange-300 to-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-pink-400/30 rounded-full blur-2xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-purple-400/30 rounded-full blur-2xl bottom-10 right-10 animate-pulse"></div>
      </div>

      <MyContainer>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 text-amber-800">
          <div className="max-w-lg text-center lg:text-left">
            <h1 className="text-5xl font-extrabold drop-shadow-lg">
              Create Your Account
            </h1>
            <p className="mt-4 text-lg text-cyan-950/80 leading-relaxed">
              Join our community and unlock exclusive features. Your journey
              begins here!
            </p>
          </div>

          <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center text-amber-950">
              Sign Up
            </h2>

            <form onSubmit={handleSignup} className="space-y-4" autoComplete="off">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  autoComplete="off"
                  className="input input-bordered w-full bg-white/20 text-black placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-800"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  autoComplete="off"
                  className="input input-bordered w-full bg-white/20 text-black placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-800"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Photo</label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Your photo URL here"
                  autoComplete="off"
                  className="input input-bordered w-full bg-white/20 text-black placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-800"
                />
              </div>

              <div className="relative">
                <label className="block text-sm font-medium mb-1">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="••••••••"
                    autoComplete="new-password"
                    className="input input-bordered w-full bg-white/20 text-black placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-800 pr-10 relative z-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-amber-900/70 hover:text-amber-900 z-20"
                  >
                    {showPassword ?  <FaEye /> :<FaEyeSlash />}
                  </button>
                </div>
                {passwordError && (
                  <p className="text-red-600 text-sm mt-1">{passwordError}</p>
                )}
              </div>

              <button type="submit" className="my-btn">Register</button>

              <div className="flex items-center justify-center gap-2 my-2">
                <div className="h-px w-16 bg-cyan-950/30"></div>
                <span className="text-sm text-cyan-950/70">or</span>
                <div className="h-px w-16 bg-cyan-950/30"></div>
              </div>

              <button
                type="button"
                onClick={handleGoogleSignin}
                className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="google"
                  className="w-5 h-5"
                />
                Continue with Google
              </button>

              <div className="text-center mt-3">
                <p className="text-sm text-gray-700/80">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-blue-900 hover:text-blue-400 font-medium underline"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default SignUp;
