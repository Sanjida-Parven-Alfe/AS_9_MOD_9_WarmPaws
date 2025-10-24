import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "../../Context/AuthContext";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedService = data.find(
          (s) => s.serviceId.toString() === serviceId
        );
        setService(selectedService);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load service:", err);
        setLoading(false);
      });
  }, [serviceId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Service booked successfully!");
    setName("");
    setEmail("");
  };

  if (loading) {
    return <p className="text-center mt-10 text-amber-900">Loading...</p>;
  }

  if (!service) {
    return (
      <p className="text-center mt-10 text-amber-900">Service not found.</p>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-10">
      <ToastContainer position="top-center" autoClose={3000} />

      <h1 className="text-3xl sm:text-4xl font-bold text-amber-900 text-center mb-8">
        {service.serviceName}
      </h1>

      <div className="bg-white shadow-xl rounded-lg p-6 mb-8 flex flex-col md:flex-row gap-6">
        <img
          src={service.image}
          alt={service.serviceName}
          className="w-full md:w-1/2 h-64 object-cover rounded"
        />
        <div className="flex-1 text-amber-900">
          <p>
            <span className="font-semibold">Provider: </span>
            {service.providerName} ({service.providerEmail})
          </p>
          <p>
            <span className="font-semibold">Category: </span>
            {service.category}
          </p>
          <p>
            <span className="font-semibold">Price: </span>${service.price}
          </p>
          <p>
            <span className="font-semibold">Rating: </span>
            {service.rating} ⭐
          </p>
          <p>
            <span className="font-semibold">Slots Available: </span>
            {service.slotsAvailable}
          </p>
          <p className="mt-2">
            <span className="font-semibold">Description: </span>
            {service.description}
          </p>
        </div>
      </div>

      {/* Book Service Form */}
      <div className="bg-white shadow-xl p-6 rounded">
        <h2 className="text-2xl font-semibold mb-4 text-amber-900">
          Book this Service
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 text-amber-900">
          <div>
            <label className="block font-medium mb-1 text-amber-900">
              Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 text-amber-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-800"
              placeholder={user?.displayName || "Your Name"}
            />
          </div>

          <div>
            <label className="block font-medium mb-1 text-amber-900">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 text-amber-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-800"
              placeholder={user?.email || "Your Email"}
            />
          </div>

          <button
            type="submit"
            className="bg-amber-600 text-white px-6 py-2 rounded hover:bg-amber-700 transition"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServiceDetails;
