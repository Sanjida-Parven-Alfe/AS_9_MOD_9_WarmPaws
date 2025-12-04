import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "../../Context/AuthContext";
import { FaArrowLeft, FaStar, FaUserMd, FaTag, FaEnvelope, FaUser, FaCheckCircle } from "react-icons/fa";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
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
    if (!user) {
        toast.error("Please login to book a service!");
        navigate("/login");
        return;
    }
    toast.success("Service booked successfully!");
    setName("");
    setEmail("");
  };

  if (loading) {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-[#FFF0F5]">
            <span className="loading loading-spinner text-[#F59E0B] loading-lg"></span>
        </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-[#FFF0F5] text-[#7D2E4E]">
        <h2 className="text-3xl font-bold mb-4">Service Not Found</h2>
        <button onClick={() => navigate('/services')} className="btn bg-[#F59E0B] text-white border-none">Back to Services</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF0F5] py-10 px-4 sm:px-10">
      <ToastContainer position="top-center" autoClose={3000} />
      
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <button 
            onClick={() => navigate(-1)} 
            className="flex items-center gap-2 text-[#7D2E4E] font-bold mb-6 hover:text-[#F59E0B] transition-colors"
        >
            <FaArrowLeft /> Back to Services
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* --- LEFT SIDE: Image & Details --- */}
            <div className="lg:col-span-2 space-y-8">
                
                {/* Image Card */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-[#F59E0B]/10">
                    <img
                        src={service.image}
                        alt={service.serviceName}
                        className="w-full h-80 sm:h-96 object-cover"
                    />
                    <div className="p-8">
                        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                            <span className="px-4 py-1 rounded-full bg-[#FFF0F5] text-[#7D2E4E] font-bold text-sm border border-[#7D2E4E]/20 flex items-center gap-2">
                                <FaTag /> {service.category}
                            </span>
                            <span className="flex items-center gap-1 text-[#F59E0B] font-bold text-lg bg-[#F59E0B]/10 px-3 py-1 rounded-lg">
                                <FaStar /> {service.rating}
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#7D2E4E] mb-4">
                            {service.serviceName}
                        </h1>

                        <h3 className="text-lg font-bold text-[#7D2E4E] mb-2 border-l-4 border-[#F59E0B] pl-3">Description</h3>
                        <p className="text-gray-600 leading-relaxed text-lg mb-6">
                            {service.description}
                        </p>

                        <div className="divider"></div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex items-center gap-3 p-4 bg-[#FFF0F5] rounded-xl">
                                <div className="p-3 bg-white rounded-full text-[#F59E0B] shadow-sm"><FaUserMd size={20}/></div>
                                <div>
                                    <p className="text-xs text-gray-500 font-bold uppercase">Provider</p>
                                    <p className="text-[#7D2E4E] font-bold">{service.providerName}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-[#FFF0F5] rounded-xl">
                                <div className="p-3 bg-white rounded-full text-[#F59E0B] shadow-sm"><FaEnvelope size={20}/></div>
                                <div>
                                    <p className="text-xs text-gray-500 font-bold uppercase">Contact</p>
                                    <p className="text-[#7D2E4E] font-bold text-sm">{service.providerEmail}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- RIGHT SIDE: Booking Form --- */}
            <div className="lg:col-span-1">
                <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-[#F59E0B] sticky top-24">
                    <div className="mb-6 text-center">
                        <p className="text-gray-500 font-medium">Price per session</p>
                        <h2 className="text-4xl font-extrabold text-[#7D2E4E]">${service.price}</h2>
                        <p className="text-sm text-green-600 font-bold mt-2 flex items-center justify-center gap-1">
                            <FaCheckCircle /> {service.slotsAvailable} Slots Available
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-sm font-bold text-[#7D2E4E] mb-2 pl-1">Your Name</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                    <FaUser />
                                </div>
                                <input
                                    type="text"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FFF0F5] border-transparent focus:bg-white focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/20 text-[#7D2E4E] font-medium outline-none transition-all"
                                    placeholder={user?.displayName || "Enter your name"}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-[#7D2E4E] mb-2 pl-1">Your Email</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                    <FaEnvelope />
                                </div>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FFF0F5] border-transparent focus:bg-white focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/20 text-[#7D2E4E] font-medium outline-none transition-all"
                                    placeholder={user?.email || "Enter your email"}
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="btn w-full bg-[#F59E0B] hover:bg-[#d97706] text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-orange-500/40 border-none mt-4 transition-transform hover:scale-105"
                        >
                            Book This Service
                        </button>
                    </form>

                    <p className="text-xs text-gray-400 text-center mt-6">
                        By booking, you agree to our Terms of Service.
                    </p>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;