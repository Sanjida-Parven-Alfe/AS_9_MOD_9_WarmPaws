import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
      {/* Service Image */}
      <img
        src={service.image}
        alt={service.serviceName}
        className="w-full h-48 object-cover"
      />

      {/* Service Info */}
      <div className="p-4 flex flex-col items-center">
        <h3 className="text-lg text-amber-800 sm:text- font-semibold mb-2">
          {service.serviceName}
        </h3>
        <p className="text-yellow-500 font-medium mb-1">
          Rating: {service.rating} ⭐
        </p>
        <p className="font-bold text-amber-800 mb-4">${service.price}</p>

        {/* View Details Button with Link */}
        <Link
          to={`/services/${service.serviceId}`}
          className="btn btn-warning btn-sm sm:btn-md shadow-lg shadow-yellow-500/30
          transition-all duration-300 transform hover:scale-105 hover:bg-black hover:text-yellow-400"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
