import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyContainer from "../../components/MyContainer/MyContainer";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { auth } from "../../firebase/firebase.config";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [showPassword, setShowPassword] = useState(false);

  const handleSignin = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!email || !password) {
      toast.error("Please enter both email and password");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/", { state: { toastMessage: "Login Successful ✅" } });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleGoogleSignin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(() => {
        navigate("/", { state: { toastMessage: "Login Successful ✅" } });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  // 🔹 Updated Forget Password handler
  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    navigate("/forget-password", { state: { email } });
  };

  return (
    <div className="min-h-[calc(100vh-20px)] flex items-center justify-center bg-gradient-to-br from-amber-100 via-orange-100 to-rose-50 relative overflow-hidden">
      <MyContainer>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 text-amber-800">
          <div className="max-w-lg text-center lg:text-left">
            <h1 className="text-5xl font-extrabold drop-shadow-lg">Welcome Back</h1>
            <p className="mt-4 text-lg text-cyan-950/80 leading-relaxed">
              Login to continue your journey. Manage your account, explore new features, and more.
            </p>
          </div>

          <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
            <form onSubmit={handleSignin} className="space-y-5">
              <h2 className="text-2xl font-semibold mb-2 text-center text-amber-950">Login</h2>

              <div>
                <label className="block text-sm mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  ref={emailRef}
                  placeholder="example@email.com"
                  className="input input-bordered w-full bg-white/20 text-black placeholder-gray-400/60 focus:outline-none focus:ring-2 focus:ring-amber-800"
                  autoComplete="off"
                />
              </div>

              <div className="relative">
                <label className="block text-sm mb-1">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  ref={passwordRef}
                  placeholder="••••••••"
                  className="input input-bordered w-full bg-white/20 text-black placeholder-gray-400/60 focus:outline-none focus:ring-2 focus:ring-amber-800 pr-10"
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 pt-[20px] top-1/2 -translate-y-1/2 text-amber-900/70 hover:text-amber-900 z-20"
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>

              <div className="flex flex-col gap-2 items-start">
                <button type="button" className="hover:underline cursor-pointer" onClick={handleForgetPassword}>
                  Forget password?
                </button>
                <button type="submit" className="my-btn">Login</button>
              </div>

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

              <p className="text-center text-sm text-gray-700/80 mt-3">
                Don’t have an account?{" "}
                <Link to="/signup" className="text-blue-900 hover:text-blue-400 underline">Sign up</Link>
              </p>
            </form>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Login;
