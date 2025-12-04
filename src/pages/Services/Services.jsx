import React, { useEffect, useState } from "react";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // State for Sort and Filter
  const [sortOrder, setSortOrder] = useState("default");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setFilteredServices(data); // Initially show all
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load services:", err);
        setLoading(false);
      });
  }, []);

  // Handle Sort and Filter Logic
  useEffect(() => {
    let tempServices = [...services];

    // Filter by Category
    if (selectedCategory !== "All") {
      tempServices = tempServices.filter(service => service.category === selectedCategory);
    }

    // Sort by Price
    if (sortOrder === "asc") {
      tempServices.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      tempServices.sort((a, b) => b.price - a.price);
    }

    setFilteredServices(tempServices);
  }, [services, sortOrder, selectedCategory]);

  if (loading) return <div className="min-h-screen flex justify-center items-center"><span className="loading loading-spinner text-amber-600 loading-lg"></span></div>;

  // Extract unique categories for filter dropdown
  const categories = ["All", ...new Set(services.map(s => s.category))];

  return (
    <div className="bg-amber-50 min-h-screen py-10 px-4 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-amber-950 text-center mb-8">
          All Winter Services
        </h1>

        {/* Search/Filter/Sort Control Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-lg shadow-md mb-10 gap-4">
            
            {/* Filter */}
            <div className="flex items-center gap-2">
                <span className="font-semibold text-amber-900">Filter by Category:</span>
                <select 
                    className="select select-bordered select-sm border-amber-300 focus:outline-none focus:border-amber-600 text-amber-900 bg-white"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
                <span className="font-semibold text-amber-900">Sort by Price:</span>
                <select 
                    className="select select-bordered select-sm border-amber-300 focus:outline-none focus:border-amber-600 text-amber-900 bg-white"
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                >
                    <option value="default">Default</option>
                    <option value="asc">Low to High</option>
                    <option value="desc">High to Low</option>
                </select>
            </div>
        </div>

        {filteredServices.length === 0 ? (
          <p className="text-center mt-10 text-red-500 font-semibold">No services found matching your criteria.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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