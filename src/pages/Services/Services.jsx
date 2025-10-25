import React, { useEffect, useState } from "react";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { Link } from "react-router-dom";

const Services = () => {
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

  if (loading) {
    return <p className="text-center mt-10 text-gray-500">Loading services...</p>;
  }

  if (services.length === 0) {
    return <p className="text-center mt-10 text-red-500">No services found.</p>;
  }

  return (
    <div className="max-w-full mx-0 bg-amber-50 py-20 px-4 sm:px-40">
      <h1 className="text-3xl sm:text-4xl font-bold text-amber-950 text-center mb-10">
        Our Winter Pet Care Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div key={service.serviceId}>
            <ServiceCard service={service} />

          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
