import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import PopularServices from "../../components/PopularServices/PopularServices";
import WinterCareTips from "../../components/WinterCareTips/WinterCareTips";
import ExpertVets from "../../components/ExpertVets/ExpertVets";
import "animate.css";
// React Icons
import { FaPaw, FaUserMd, FaSmile, FaStar, FaQuoteLeft, FaPaperPlane } from "react-icons/fa";

// --- 1. Modern Stats Section ---
const StatsSection = () => (
  <section className="py-20 bg-[#7D2E4E] dark:bg-[#2A0F18] relative overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-60 h-60 bg-[#F59E0B] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-[#FBBF24] rounded-full blur-3xl"></div>
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
            { icon: FaPaw, count: "500+", label: "Happy Pets" },
            { icon: FaUserMd, count: "50+", label: "Expert Vets" },
            { icon: FaSmile, count: "1.2k+", label: "Services Done" },
            { icon: FaStar, count: "4.9", label: "Avg Rating" }
        ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <item.icon className="text-4xl text-[#FBBF24] mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-4xl font-extrabold text-white mb-1">{item.count}</h3>
                <p className="text-[#FFF0F5]/70 text-sm uppercase tracking-wider">{item.label}</p>
            </div>
        ))}
      </div>
    </div>
  </section>
);

// --- 2. Stylish Testimonials ---
const Testimonials = () => (
  <section className="py-20 bg-[#FFF0F5] dark:bg-[#1a0f0a] transition-colors duration-300">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-[#7D2E4E] dark:text-[#FFF0F5] mb-4">Pawsitive Reviews 🐾</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">See what our furry friends and their humans are saying about us.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[1, 2, 3].map((i) => (
          <div key={i} className="relative bg-white dark:bg-[#2A0F18] p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-[#F59E0B]/10 group hover:-translate-y-2">
            <FaQuoteLeft className="absolute top-8 right-8 text-6xl text-[#F59E0B]/10 group-hover:text-[#F59E0B]/20 transition-colors" />
            
            <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#F59E0B] to-[#FBBF24] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {i === 1 ? 'A' : i === 2 ? 'S' : 'M'}
                </div>
                <div>
                    <h4 className="font-bold text-[#7D2E4E] dark:text-[#FFF0F5] text-lg">Happy Customer</h4>
                    <div className="flex text-[#F59E0B] text-sm"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
                </div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 italic leading-relaxed relative z-10">
              "The winter coat service was a game changer for my husky! The quality is top-notch and the delivery was super fast. Highly recommended!"
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- 3. Gradient Newsletter ---
const Newsletter = () => (
  <section className="py-20 px-4">
    <div className="container mx-auto max-w-5xl">
        <div className="rounded-[3rem] bg-gradient-to-r from-[#F59E0B] to-[#e85d04] p-10 md:p-16 text-center text-white shadow-2xl shadow-orange-500/30 relative overflow-hidden">
            {/* Shapes */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            
            <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Join the Winter Pack! ❄️</h2>
                <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">Get exclusive tips on keeping your pets warm, special discounts, and cuteness delivered to your inbox.</p>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                    <input 
                        type="email" 
                        placeholder="Enter your email address..." 
                        className="input w-full sm:w-96 px-6 py-4 rounded-full text-[#7D2E4E] bg-white border-none focus:ring-4 focus:ring-[#7D2E4E]/20 shadow-lg" 
                    />
                    <button className="btn px-8 py-3 rounded-full bg-[#7D2E4E] hover:bg-[#5a1a33] text-white border-none font-bold shadow-lg flex items-center gap-2 transform transition hover:scale-105">
                        Subscribe <FaPaperPlane />
                    </button>
                </div>
            </div>
        </div>
    </div>
  </section>
);

const HomePage = () => {
  const location = useLocation();
  const hasShownToast = useRef(false);

  useEffect(() => {
    if (location.state?.toastMessage && !hasShownToast.current) {
      toast.success(location.state.toastMessage);
      hasShownToast.current = true;
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  return (
    <div className="bg-[#FFF0F5] dark:bg-[#1E0911] transition-colors duration-300">
        <HeroSlider />
        <PopularServices />
        <StatsSection />
        <WinterCareTips />
        <ExpertVets />
        <Testimonials />
        <Newsletter />
    </div>
  );
};

export default HomePage;