import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import PopularServices from "../../components/PopularServices/PopularServices";
import WinterCareTips from "../../components/WinterCareTips/WinterCareTips";
import ExpertVets from "../../components/ExpertVets/ExpertVets";
import "animate.css";

// 1. Stats Section Component
const StatsSection = () => (
  <section className="py-12 bg-amber-800 text-amber-50">
    <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div><h3 className="text-4xl font-bold">500+</h3><p>Happy Pets</p></div>
      <div><h3 className="text-4xl font-bold">50+</h3><p>Expert Vets</p></div>
      <div><h3 className="text-4xl font-bold">1200+</h3><p>Services Done</p></div>
      <div><h3 className="text-4xl font-bold">5.0</h3><p>Average Rating</p></div>
    </div>
  </section>
);

// 2. Testimonials Section Component
const Testimonials = () => (
    <section className="py-16 px-4 bg-orange-50 text-center">
        <h2 className="text-3xl font-bold text-amber-950 mb-8">What Pet Parents Say</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-md border border-amber-100">
                    <p className="italic text-gray-600 mb-4">"Absolutely amazing service! My dog loves the winter coat I bought here."</p>
                    <h4 className="font-bold text-amber-900">- Happy Customer {i}</h4>
                </div>
            ))}
        </div>
    </section>
);

// 3. Newsletter Section Component
const Newsletter = () => (
    <section className="py-20 px-4 bg-gradient-to-r from-amber-600 to-orange-500 text-white text-center">
        <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Join Our Winter Pack</h2>
            <p className="mb-8 text-amber-100">Subscribe for exclusive winter care tips and discounts.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <input type="email" placeholder="Enter your email" className="input text-black w-full sm:w-80" />
                <button className="btn bg-amber-900 text-white border-none hover:bg-amber-950">Subscribe</button>
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
    <div>
        {/* Section 1: Hero */}
        <HeroSlider />
        
        {/* Section 2: Popular/Featured Services */}
        <PopularServices />
        
        {/* Section 3: Stats (New) */}
        <StatsSection />

        {/* Section 4: Winter Tips */}
        <WinterCareTips />

        {/* Section 5: Expert Vets */}
        <ExpertVets />

        {/* Section 6: Testimonials (New) */}
        <Testimonials />

        {/* Section 7: Newsletter (New) */}
        <Newsletter />
    </div>
  );
};

export default HomePage;