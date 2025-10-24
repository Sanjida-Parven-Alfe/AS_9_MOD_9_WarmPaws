import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyContainer from "../../components/MyContainer/MyContainer";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { auth } from "../../firebase/firebase.config";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [show, setShow] = useState(false);

  // Email/Password Login
  const handleSignin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email || !password) {
      toast.error("Please enter both email and password");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        toast.success("Login Successful ✅");
        navigate("/"); // Home page এ redirect
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.message); // এখানে e.massage নয়, err.message
      });
  };

  // Google Login
  const handleGoogleSignin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res.user);
        toast.success("Google login successful");
        navigate("/"); // Navigate to home
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.message);
      });
  };

  // Forget Password
  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      toast.error("Please enter your email first.");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => toast.success("Password reset email sent ✅"))
      .catch((e) => {
        console.error(e);
        toast.error(e.message);
      });
  };

  return (
    <div className="min-h-[calc(100vh-20px)] flex items-center justify-center bg-gradient-to-br from-amber-100 via-orange-100 to-rose-50 relative overflow-hidden">
      {/* Animated glow orbs */}
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-pink-300/30 rounded-full blur-xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-purple-300/30 rounded-full blur-xl bottom-10 right-10 animate-pulse"></div>
      </div>

      <MyContainer>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 text-amber-800">
          {/* Left section */}
          <div className="max-w-lg text-center lg:text-left">
            <h1 className="text-5xl font-extrabold drop-shadow-lg">
              Welcome Back
            </h1>
            <p className="mt-4 text-lg text-cyan-950/80 leading-relaxed">
              Sign in to continue your journey. Manage your account, explore new
              features, and more.
            </p>
          </div>

          {/* Login card */}
          <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
            <form onSubmit={handleSignin} className="space-y-5">
              <h2 className="text-2xl font-semibold mb-2 text-center text-amber-950">
                Sign In
              </h2>

              {/* Email */}
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  ref={emailRef}
                  placeholder="example@email.com"
                  className="input input-bordered w-full bg-white/20 text-black placeholder-gray-400/60 focus:outline-none focus:ring-2 focus:ring-amber-800"
                />
              </div>

              {/* Password */}
              <div className="relative">
                <label className="block text-sm mb-1">Password</label>
                <div className="relative">
                  <input
                    type={show ? "text" : "password"}
                    name="password"
                    ref={passwordRef}
                    placeholder="••••••••"
                    className="input input-bordered w-full bg-white/20 text-black placeholder-gray-400/60 focus:outline-none focus:ring-2 focus:ring-amber-800 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShow(!show)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-amber-900/70 hover:text-amber-900 z-20"
                  >
                    {show ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              {/* Forget Password & Login */}
              <div className="flex flex-col gap-2 items-start">
                <button
                  type="button"
                  className="hover:underline cursor-pointer pb-[20px]"
                  onClick={handleForgetPassword}
                >
                  Forget password?
                </button>
                <button type="submit" className="my-btn">
                  Login
                </button>
              </div>

              {/* Divider */}
              <div className="flex items-center justify-center gap-2 my-2">
                <div className="h-px w-16 bg-cyan-950/30"></div>
                <span className="text-sm text-cyan-950/70">or</span>
                <div className="h-px w-16 bg-cyan-950/30"></div>
              </div>

              {/* Google Signin */}
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

              {/* Signup Link */}
              <p className="text-center text-sm text-gray-700/80 mt-3">
                Don’t have an account?{" "}
                <Link
                  to="/signup"
                  className="text-blue-900 hover:text-blue-400 underline"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Login;
