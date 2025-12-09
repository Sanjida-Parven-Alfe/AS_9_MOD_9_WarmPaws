import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyContainer from "../../components/MyContainer/MyContainer";
import { FaEye, FaEyeSlash, FaEnvelope, FaLock, FaGoogle } from "react-icons/fa"; // Icons added
import { auth } from "../../firebase/firebase.config";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import toast from "react-hot-toast";
import loginimg from "../../assets/Loginimage.png";

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
        toast.error("Invalid email or password");
        console.error(err);
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

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    navigate("/forget-password", { state: { email } });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFF0F5] relative overflow-hidden py-10">
      
  
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#F59E0B]/10 rounded-full blur-3xl -ml-20 -mt-20 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#7D2E4E]/10 rounded-full blur-3xl -mr-20 -mb-20 pointer-events-none"></div>

      <MyContainer>
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row max-w-5xl mx-auto border border-[#F59E0B]/10">
          
          {/* --- Left Side: Image & Text --- */}
          <div className="lg:w-1/2 bg-[#FFF0F5] p-10 flex flex-col justify-center items-center text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[#F59E0B]/5"></div>
            <div className="relative z-10">
                <img 
                    src={loginimg} 
                    className="w-64 h-64 lg:w-80 lg:h-80 object-contain mb-6 drop-shadow-xl transform hover:scale-105 transition-transform duration-500" 
                    alt="Login Illustration" 
                />
                <h2 className="text-3xl font-extrabold text-[#7D2E4E] mb-3">Welcome Back!</h2>
                <p className="text-gray-600 max-w-xs mx-auto">
                    Login to access your personalized pet care dashboard and exclusive winter offers.
                </p>
            </div>
          </div>

          {/* --- Right Side: Login Form --- */}
          <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 bg-white">
            <div className="mb-8 text-center lg:text-left">
                <h2 className="text-3xl font-bold text-[#7D2E4E]">Login</h2>
                <p className="text-gray-500 text-sm mt-2">Please enter your details to sign in.</p>
            </div>

            <form onSubmit={handleSignin} className="space-y-6">
              
              {/* Email Input */}
              <div className="form-control">
                <label className="block text-sm font-bold text-[#7D2E4E] mb-2 pl-1">Email Address</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaEnvelope className="text-gray-400" />
                    </div>
                    <input
                        type="email"
                        name="email"
                        ref={emailRef}
                        placeholder="example@email.com"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FFF0F5] border-transparent focus:bg-white focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/20 text-[#7D2E4E] font-medium outline-none transition-all placeholder-gray-400"
                        autoComplete="off"
                    />
                </div>
              </div>

              {/* Password Input */}
              <div className="form-control">
                <label className="block text-sm font-bold text-[#7D2E4E] mb-2 pl-1">Password</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaLock className="text-gray-400" />
                    </div>
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        ref={passwordRef}
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
                
              
                <div className="flex justify-end mt-2">
                    <button
                        type="button"
                        className="text-sm text-[#F59E0B] hover:text-[#d97706] font-semibold hover:underline"
                        onClick={handleForgetPassword}
                    >
                        Forget password?
                    </button>
                </div>
              </div>

              {/* Login Button */}
              <button 
                type="submit" 
                className="w-full bg-[#F59E0B] hover:bg-[#d97706] text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-orange-500/30 transition-transform transform hover:scale-[1.02] active:scale-95"
              >
                Login
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

              {/* Sign Up Link */}
              <p className="text-center text-gray-600 mt-6">
                Don’t have an account?{" "}
                <Link
                  to="/signup"
                  className="text-[#7D2E4E] hover:text-[#F59E0B] font-bold underline transition-colors"
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