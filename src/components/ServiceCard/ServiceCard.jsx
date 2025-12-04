import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-gray-100 overflow-hidden group">
      
      <div className="relative overflow-hidden h-48 w-full">
        <img
          src={service.image}
          alt={service.serviceName}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded text-xs font-bold text-amber-800 shadow">
            {service.category}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow text-center">
        <h3 className="text-lg font-bold text-amber-900 mb-2 line-clamp-1">
          {service.serviceName}
        </h3>
        
        <p className="text-sm text-gray-500 mb-3 flex-grow line-clamp-2">
            {service.description}
        </p>

        <div className="flex items-center justify-between w-full mb-4 px-2">
             <span className="text-lg font-bold text-amber-700">${service.price}</span>
             <span className="text-sm font-medium text-yellow-500 bg-yellow-50 px-2 py-1 rounded">⭐ {service.rating}</span>
        </div>

        <Link
          to={`/services/${service.serviceId}`}
          className="btn w-full bg-amber-600 hover:bg-amber-700 text-white border-none rounded-lg"
        >
          See More
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;