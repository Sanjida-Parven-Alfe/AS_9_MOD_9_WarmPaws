import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Keyboard, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "animate.css";

import img1 from "../../assets/hero1.jpg";
import img2 from "../../assets/hero2.jpg";
import img3 from "../../assets/hero3.webp";

const slides = [
  { id: 1, image: img1, title: "Cozy Winter Outfits", subtitle: "Keep your pets warm and stylish this winter" },
  { id: 2, image: img2, title: "Snuggly Pet Care", subtitle: "Grooming & comfort for your furry friends" },
  { id: 3, image: img3, title: "Winter Walks Made Safe", subtitle: "Protect paws and enjoy outdoor fun" },
];

const HeroSlider = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full h-[65vh] sm:h-[70vh] relative overflow-hidden"> 
      <Swiper
        modules={[Navigation, Pagination, Autoplay, Keyboard, Mousewheel]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        loop
        className="w-full h-full"
      >
        {slides.map((s) => (
          <SwiperSlide key={s.id}>
            <div className="relative w-full h-full">
             
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img 
                    src={s.image} 
                    alt={s.title} 
                    className="w-full h-full object-cover scale-110 blur-[3px] brightness-75" 
                />
              </div>

              {/* Dark Overlay for better text contrast */}
              <div className="absolute inset-0 bg-black/40" />
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                <h2 className="text-white text-4xl md:text-6xl font-extrabold mb-4 animate__animated animate__fadeInDown drop-shadow-lg">
                  {s.title}
                </h2>
                <p className="text-white/95 text-lg md:text-2xl mb-8 max-w-2xl animate__animated animate__fadeInUp drop-shadow-md font-medium">
                  {s.subtitle}
                </p>
                <button
                  onClick={() => navigate("/services")}
                  className="px-8 py-3 bg-[#F59E0B] hover:bg-[#d97706] text-white font-bold rounded-full shadow-lg transition transform hover:scale-105 animate__animated animate__zoomIn border-none"
                >
                  Explore Services
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;