import React, { useEffect, useState } from "react";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { FaFilter, FaSortAmountDown, FaSnowflake, FaSearch } from "react-icons/fa";

const Services = () => {
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [loading, setLoading] = useState(true);

  // State for Sort, Filter, and Search
  const [sortOrder, setSortOrder] = useState("default");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setFilteredServices(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load services:", err);
        setLoading(false);
      });
  }, []);

  // Handle Filter, Sort & Search Logic
  useEffect(() => {
    let tempServices = [...services];

    // 1. Filter by Category
    if (selectedCategory !== "All") {
      tempServices = tempServices.filter(
        (service) => service.category === selectedCategory
      );
    }

    // 2. Filter by Search Term
    if (searchTerm) {
      tempServices = tempServices.filter((service) =>
        service.serviceName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // 3. Sort by Price
    if (sortOrder === "asc") {
      tempServices.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      tempServices.sort((a, b) => b.price - a.price);
    }

    setFilteredServices(tempServices);
  }, [services, sortOrder, selectedCategory, searchTerm]);

  // Loading Spinner
  if (loading)
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-[#FFF0F5]">
        <span className="loading loading-spinner text-[#F59E0B] loading-lg"></span>
        <p className="mt-4 text-[#7D2E4E] font-bold animate-pulse">
          Loading Winter Care...
        </p>
      </div>
    );

  // Extract unique categories
  const categories = ["All", ...new Set(services.map((s) => s.category))];

  return (
    <div className="bg-[#FFF0F5] min-h-screen py-12 px-4 sm:px-10 lg:px-20 relative overflow-hidden">
      
      {/* Background Decoration (Soft Blobs) */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F59E0B]/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#7D2E4E]/5 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#7D2E4E] mb-4 tracking-tight flex items-center justify-center gap-3">
            <FaSnowflake className="text-[#F59E0B] animate-spin-slow" />
            All Winter Services
            <FaSnowflake className="text-[#F59E0B] animate-spin-slow" />
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the best care packages to keep your furry friends warm, healthy, and happy this season.
          </p>
        </div>

        {/* --- Control Bar (Search, Filter, Sort) --- */}
        <div className="flex flex-col lg:flex-row justify-between items-center bg-white p-6 rounded-2xl shadow-xl border border-[#F59E0B]/10 mb-12 gap-6">
          
          {/* Search Input */}
          <div className="relative w-full lg:w-1/3">
            <input
              type="text"
              placeholder="Search services..."
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#FFF0F5] border-transparent focus:bg-white focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/20 text-[#7D2E4E] font-medium outline-none transition-all placeholder-gray-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            
            {/* Filter Dropdown */}
            <div className="flex items-center gap-3 bg-[#FFF0F5] px-4 py-2 rounded-xl border border-[#F59E0B]/10">
              <FaFilter className="text-[#F59E0B]" />
              <span className="font-bold text-sm text-[#7D2E4E] whitespace-nowrap">
                Category:
              </span>
              <select
                className="select select-ghost select-sm w-full max-w-xs focus:bg-transparent text-[#7D2E4E] font-bold focus:outline-none"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-3 bg-[#FFF0F5] px-4 py-2 rounded-xl border border-[#F59E0B]/10">
              <FaSortAmountDown className="text-[#F59E0B]" />
              <span className="font-bold text-sm text-[#7D2E4E] whitespace-nowrap">
                Price:
              </span>
              <select
                className="select select-ghost select-sm w-full max-w-xs focus:bg-transparent text-[#7D2E4E] font-bold focus:outline-none"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="default">Default</option>
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* --- Services Grid --- */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-gray-300">
            <FaSnowflake className="text-6xl text-gray-300 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-[#7D2E4E] mb-2">No Services Found</h3>
            <p className="text-gray-500">Try adjusting your filters or search term.</p>
            <button 
                onClick={() => {setSelectedCategory("All"); setSearchTerm("");}}
                className="btn btn-link text-[#F59E0B] mt-2 no-underline hover:text-[#d97706]"
            >
                Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredServices.map((service) => (
              <ServiceCard key={service.serviceId} service={service} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;