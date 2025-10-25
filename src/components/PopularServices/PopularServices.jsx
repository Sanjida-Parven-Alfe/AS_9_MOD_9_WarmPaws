import React, { useEffect, useState } from "react";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";


const PopularServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load services:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-12 px-4 pb-20 bg-[#ece7df] sm:px-10 ">
      <h2 className="text-3xl sm:text-4xl text-amber-950 font-bold text-center mb-8 ">
        Popular Winter Care Services
      </h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading services...</p>
      ) : services.length === 0 ? (
        <p className="text-center text-red-500">No services found.</p>
      ) : (
        <Swiper
          slidesPerView={4} 
          spaceBetween={20}
          freeMode={true}
          loop={true}
          autoplay={{
            delay: 4000, 
            disableOnInteraction: false, 
          }}
          pagination={{ clickable: true }}
          modules={[FreeMode, Pagination, Autoplay]}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {services.slice(0, 8).map((service) => (
            <SwiperSlide className="p-10" key={service.serviceId}>
              <ServiceCard service={service} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default PopularServices;
