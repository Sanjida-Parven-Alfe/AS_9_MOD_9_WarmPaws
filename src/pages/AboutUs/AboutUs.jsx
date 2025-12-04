import React from "react";
import { Link } from "react-router-dom";
import { FaPaw, FaHandHoldingHeart, FaUserMd, FaSnowflake } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="bg-[#FFF0F5] min-h-screen">
      
      {/* --- Hero Section --- */}
      <section className="relative py-20 bg-[#7D2E4E] text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#F59E0B] rounded-full blur-3xl opacity-20 -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FBBF24] rounded-full blur-3xl opacity-20 -ml-16 -mb-16"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            About <span className="text-[#FBBF24]">WarmPaws</span>
          </h1>
          <p className="text-lg md:text-xl text-orange-100 max-w-2xl mx-auto">
            We are dedicated to keeping your furry friends happy, healthy, and warm during the chilly winter months.
          </p>
        </div>
      </section>

      {/* --- Our Mission Section --- */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Image */}
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-[#F59E0B]/20 rounded-2xl transform rotate-3"></div>
                <img 
                  src="https://images.pexels.com/photos/5749776/pexels-photo-5749776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Veterinarian with dog" 
                  className="relative rounded-2xl shadow-xl w-full object-cover h-[400px]"
                />
              </div>
            </div>
            
            {/* Text */}
            <div className="w-full md:w-1/2">
              <h4 className="text-[#F59E0B] font-bold uppercase tracking-widest mb-2">Our Mission</h4>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#7D2E4E] mb-6">
                Protecting Paws from the Winter Chill
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                At WarmPaws, we believe that every pet deserves to feel safe and comfortable, regardless of the weather. Our mission is to provide specialized winter care, from cozy clothing to health checkups, ensuring your pets thrive even in the coldest days.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-[#7D2E4E]/10 rounded-full text-[#7D2E4E]">
                    <FaHandHoldingHeart size={24} />
                  </div>
                  <span className="font-bold text-[#7D2E4E]">Compassionate Care</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-[#F59E0B]/10 rounded-full text-[#F59E0B]">
                    <FaUserMd size={24} />
                  </div>
                  <span className="font-bold text-[#7D2E4E]">Expert Vets</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Why Choose Us (Stats) --- */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-8 border border-[#F59E0B]/10 rounded-2xl bg-[#FFF0F5] text-center hover:shadow-lg transition-shadow duration-300">
              <FaSnowflake className="text-5xl text-[#F59E0B] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#7D2E4E] mb-2">Winter Specialists</h3>
              <p className="text-gray-600">We specialize in cold-weather protection and health plans for all breeds.</p>
            </div>
            {/* Card 2 */}
            <div className="p-8 border border-[#F59E0B]/10 rounded-2xl bg-[#FFF0F5] text-center hover:shadow-lg transition-shadow duration-300">
              <FaPaw className="text-5xl text-[#7D2E4E] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#7D2E4E] mb-2">Pet-First Approach</h3>
              <p className="text-gray-600">Your pet's comfort is our top priority. We treat them like our own family.</p>
            </div>
            {/* Card 3 */}
            <div className="p-8 border border-[#F59E0B]/10 rounded-2xl bg-[#FFF0F5] text-center hover:shadow-lg transition-shadow duration-300">
              <FaUserMd className="text-5xl text-[#FBBF24] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#7D2E4E] mb-2">Certified Pros</h3>
              <p className="text-gray-600">Our team consists of certified veterinarians and experienced groomers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="py-20 px-6 text-center">
        <div className="container mx-auto max-w-4xl bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] rounded-3xl p-10 md:p-16 shadow-2xl text-white">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Ready to keep your pet warm?</h2>
          <p className="text-lg mb-8 opacity-90">Join thousands of happy pet parents who trust WarmPaws for their winter care needs.</p>
          <Link 
            to="/services" 
            className="inline-block px-8 py-4 bg-[#7D2E4E] hover:bg-[#5a1e36] text-white font-bold rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            Explore Services
          </Link>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;