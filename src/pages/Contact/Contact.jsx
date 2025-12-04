import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const handleSendMessage = (e) => {
    e.preventDefault();
    // এখানে আপনি টোস্ট বা ব্যাকএন্ড লজিক বসাতে পারেন
    alert("Message sent successfully!");
  };

  return (
    <div className="bg-[#FFF0F5] min-h-screen pb-20">
      
      {/* --- Hero / Header Section --- */}
      <section className="relative py-20 bg-[#7D2E4E] text-white overflow-hidden mb-16">
        {/* Decorative Background Blur */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#F59E0B] rounded-full blur-3xl opacity-20 -ml-16 -mt-16"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#FBBF24] rounded-full blur-3xl opacity-20 -mr-16 -mb-16"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Get in <span className="text-[#FBBF24]">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-orange-100 max-w-2xl mx-auto">
            Have questions about our winter care services? We'd love to hear from you.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* --- Left Side: Contact Info & Map --- */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            
            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Phone */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-[#F59E0B]/10 hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-[#F59E0B]/10 rounded-full flex items-center justify-center text-[#F59E0B] text-xl mb-4">
                  <FaPhoneAlt />
                </div>
                <h3 className="text-xl font-bold text-[#7D2E4E] mb-2">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
                <p className="text-gray-600">+1 (555) 987-6543</p>
              </div>

              {/* Email */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-[#F59E0B]/10 hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-[#7D2E4E]/10 rounded-full flex items-center justify-center text-[#7D2E4E] text-xl mb-4">
                  <FaEnvelope />
                </div>
                <h3 className="text-xl font-bold text-[#7D2E4E] mb-2">Email</h3>
                <p className="text-gray-600">hello@warmpaws.com</p>
                <p className="text-gray-600">support@warmpaws.com</p>
              </div>

              {/* Location */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-[#F59E0B]/10 hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-[#F59E0B]/10 rounded-full flex items-center justify-center text-[#F59E0B] text-xl mb-4">
                  <FaMapMarkerAlt />
                </div>
                <h3 className="text-xl font-bold text-[#7D2E4E] mb-2">Location</h3>
                <p className="text-gray-600">123 Pet Street, Snow City,</p>
                <p className="text-gray-600">Winterland, WL 9988</p>
              </div>

              {/* Hours */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-[#F59E0B]/10 hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-[#7D2E4E]/10 rounded-full flex items-center justify-center text-[#7D2E4E] text-xl mb-4">
                  <FaClock />
                </div>
                <h3 className="text-xl font-bold text-[#7D2E4E] mb-2">Working Hours</h3>
                <p className="text-gray-600">Mon - Fri: 9:00 AM - 8:00 PM</p>
                <p className="text-gray-600">Sat - Sun: 10:00 AM - 6:00 PM</p>
              </div>
            </div>

            {/* Embedded Map (Google Maps Placeholder) */}
            <div className="w-full h-64 bg-gray-200 rounded-2xl overflow-hidden shadow-lg border border-[#F59E0B]/20">
              <iframe 
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902344799999!2d90.3910!3d23.7505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ1JzAxLjgiTiA5MMKwMjMnMjcuNiJF!5e0!3m2!1sen!2sbd!4v1633000000000!5m2!1sen!2sbd" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
            </div>

          </div>

          {/* --- Right Side: Contact Form --- */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-[#F59E0B]/10">
              <h2 className="text-3xl font-bold text-[#7D2E4E] mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSendMessage} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-bold text-[#7D2E4E]">Your Name</span>
                    </label>
                    <input 
                      type="text" 
                      placeholder="Enter your name" 
                      className="input input-bordered w-full bg-[#FFF0F5] focus:bg-white focus:border-[#F59E0B] focus:outline-none transition-colors" 
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-bold text-[#7D2E4E]">Your Email</span>
                    </label>
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="input input-bordered w-full bg-[#FFF0F5] focus:bg-white focus:border-[#F59E0B] focus:outline-none transition-colors" 
                      required
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold text-[#7D2E4E]">Subject</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g., Winter Coat Inquiry" 
                    className="input input-bordered w-full bg-[#FFF0F5] focus:bg-white focus:border-[#F59E0B] focus:outline-none transition-colors" 
                  />
                </div>

                {/* Message */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold text-[#7D2E4E]">Message</span>
                  </label>
                  <textarea 
                    className="textarea textarea-bordered h-32 w-full bg-[#FFF0F5] focus:bg-white focus:border-[#F59E0B] focus:outline-none transition-colors text-base" 
                    placeholder="How can we help your pet?"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="btn w-full bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] hover:from-orange-600 hover:to-amber-500 text-white font-bold border-none shadow-md hover:shadow-lg transition-transform hover:scale-105 flex items-center gap-2 text-lg"
                >
                  Send Message <FaPaperPlane />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;