import React, { useRef } from "react";
import { Link } from "react-router";
import MyContainer from "../../components/MyContainer/MyContainer";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSignin = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value, passwordRef.current.value);
  };

  const handleGoogleSignin = () => {};
  const handleSignout = () => {};
  const handleForgetPassword = () => {};
  const handleGithubSignin = () => {};

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
            <p className="mt-4 text-lg text-cyan-950/80  leading-relaxed">
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

              <div>
                <label className="block text-sm mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  ref={emailRef}
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@email.com"
                  className="input input-bordered w-full bg-white/20 text-black placeholder-gray-400/60 focus:outline-none focus:ring-2 focus:ring-amber-800"
                />
              </div>

              <div className="relative">
                <label className="block text-sm mb-1">Password</label>
                <input
                  type={"text"}
                  name="password"
                  placeholder="••••••••"
                  className="input input-bordered w-full bg-white/20 text-black placeholder-gray-400/60 focus:outline-none focus:ring-2 focus:ring-amber-800"
                />
              </div>

              <div className="flex flex-col gap-2 items-start">
                <button
                  className="hover:underline cursor-pointer pb-[20px]"
                  onClick={handleForgetPassword}
                  type="button"
                >
                  Forget password?
                </button>

                <button
                  type="submit"
                  className="my-btn"
                >
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

              {/* Github Signin */}
              <button
                type="button"
                onClick={handleGithubSignin}
                className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <img
                  src="https://img.icons8.com/fluency/48/github.png"
                  alt="google"
                  className="w-5 h-5"
                />
                Continue with Github
              </button>

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
