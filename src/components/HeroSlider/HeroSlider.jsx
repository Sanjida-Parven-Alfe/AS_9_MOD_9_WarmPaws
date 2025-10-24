import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  Keyboard,
  Mousewheel,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import img1 from "../../assets/hero1.jpg";
import img2 from "../../assets/hero2.jpg";
import img3 from "../../assets/hero3.webp";

const slides = [
  {
    id: 1,
    image: img1,
    title: "Cozy Winter Outfits",
    subtitle: "Keep your pets warm and stylish this winter",
  },
  {
    id: 2,
    image: img2,
    title: "Snuggly Pet Care",
    subtitle: "Grooming & comfort for your furry friends",
  },
  {
    id: 3,
    image: img3,
    title: "Winter Walks Made Safe",
    subtitle: "Protect paws and enjoy outdoor fun",
  },
];

const HeroSlider = () => {
  const navigate = useNavigate();

  const handleViewServices = () => {
    navigate("/services");
  };

  return (
    <section className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, Keyboard, Mousewheel]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        loop
        keyboard={{ enabled: true }}
        mousewheel={{ forceToAxis: true }}
        className="w-full"
      >
        {slides.map((s) => (
          <SwiperSlide key={s.id}>
            <div className="relative w-full h-[280px] sm:h-[380px] md:h-[480px] lg:h-[560px] overflow-hidden">
              {/* Background Image */}
              <img
                src={s.image}
                alt={s.title}
                className="absolute inset-0 w-full h-full object-cover scale-105 brightness-90 transition-transform duration-[4000ms] ease-in-out"
              />

              {/* Cinematic Overlay */}
              <div className="absolute inset-0 bg-black/55 backdrop-blur-[3px]" />

              {/* Caption Content */}
              <div className="relative z-10 max-w-6xl mx-auto h-full flex items-center justify-center sm:justify-start">
                <div className="px-4 sm:px-8 md:px-12 lg:px-20 text-center sm:text-left">
                  <h2 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wide leading-tight drop-shadow-[0_4px_15px_rgba(0,0,0,0.9)]">
                    {s.title}
                  </h2>
                  <p className="mt-4 text-white/90 text-base sm:text-lg md:text-2xl lg:text-3xl max-w-2xl tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                    {s.subtitle}
                  </p>

                  <div className="mt-6 flex justify-center sm:justify-start gap-4">
                    <button
                      onClick={handleViewServices}
                      className="btn btn-warning btn-md sm:btn-lg border-none shadow-lg shadow-yellow-500/30 transition-all duration-300 transform hover:scale-105 hover:bg-black hover:text-yellow-400"
                    >
                      View Services
                    </button>

                    <button className="btn btn-outline btn-md sm:btn-lg transition-all duration-300 transform hover:scale-105 text-white border-white/40 hover:bg-white/20 ">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>

              {/* Inner Shadow Frame */}
              <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.7)] rounded-none" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
