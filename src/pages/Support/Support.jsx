import React, { useState } from "react";
import { FaSearch, FaHeadset, FaEnvelope, FaBookOpen, FaChevronDown, FaChevronUp, FaPaperPlane } from "react-icons/fa";

const Support = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I book a winter care service?",
      answer: "You can book a service by navigating to the 'All Services' page, selecting a service, and clicking the 'Book Now' button. You will need to be logged in to complete the booking."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We offer a full refund if you cancel at least 24 hours before the scheduled appointment. For cancellations within 24 hours, a 20% fee may apply."
    },
    {
      question: "Do you provide emergency vet services?",
      answer: "Yes, we have a dedicated team for emergency winter health checkups. Please contact our support hotline immediately for urgent cases."
    },
    {
      question: "How do I measure my dog for a winter coat?",
      answer: "We recommend measuring the neck, chest girth, and back length. You can find a detailed size guide in the description of our 'Winter Coat for Dogs' service."
    },
  ];

  return (
    <div className="bg-[#FFF0F5] min-h-screen pb-20">
      
      {/* --- Hero Section with Search --- */}
      <section className="relative py-20 bg-[#7D2E4E] text-white overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#F59E0B] rounded-full blur-3xl opacity-10 -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FBBF24] rounded-full blur-3xl opacity-10 -ml-20 -mb-20"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
            How can we <span className="text-[#FBBF24]">help you?</span>
          </h1>
          <p className="text-orange-100 mb-8 max-w-xl mx-auto text-lg">
            Search our knowledge base or browse the topics below to find the answers you need.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <input 
              type="text" 
              placeholder="Search for answers (e.g., refund, booking)..." 
              className="w-full py-4 pl-12 pr-4 rounded-full text-gray-700 bg-white focus:outline-none focus:ring-4 focus:ring-[#F59E0B]/30 shadow-lg"
            />
            <FaSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </section>

      {/* --- Quick Help Cards --- */}
      <section className="container mx-auto px-6 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-b-4 border-[#F59E0B] hover:-translate-y-1 transition-transform duration-300 text-center">
            <div className="w-14 h-14 bg-[#F59E0B]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#F59E0B] text-2xl">
              <FaBookOpen />
            </div>
            <h3 className="text-xl font-bold text-[#7D2E4E] mb-2">Knowledge Base</h3>
            <p className="text-gray-500 mb-4">Read articles and guides about pet care.</p>
            <button className="text-[#F59E0B] font-bold hover:underline">Browse Articles</button>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-b-4 border-[#7D2E4E] hover:-translate-y-1 transition-transform duration-300 text-center">
            <div className="w-14 h-14 bg-[#7D2E4E]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#7D2E4E] text-2xl">
              <FaHeadset />
            </div>
            <h3 className="text-xl font-bold text-[#7D2E4E] mb-2">Live Chat</h3>
            <p className="text-gray-500 mb-4">Chat with our support team in real-time.</p>
            <button className="text-[#7D2E4E] font-bold hover:underline">Start Chat</button>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-b-4 border-[#FBBF24] hover:-translate-y-1 transition-transform duration-300 text-center">
            <div className="w-14 h-14 bg-[#FBBF24]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#F59E0B] text-2xl">
              <FaEnvelope />
            </div>
            <h3 className="text-xl font-bold text-[#7D2E4E] mb-2">Email Support</h3>
            <p className="text-gray-500 mb-4">Get response within 24 hours.</p>
            <button className="text-[#F59E0B] font-bold hover:underline">Send Email</button>
          </div>

        </div>
      </section>

      {/* --- FAQ Section & Ticket Form --- */}
      <section className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left: FAQ Accordion */}
          <div className="w-full lg:w-3/5">
            <h2 className="text-3xl font-extrabold text-[#7D2E4E] mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`bg-white rounded-xl shadow-md border overflow-hidden transition-all duration-300 ${activeAccordion === index ? 'border-[#F59E0B]' : 'border-transparent'}`}
                >
                  <button 
                    className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="font-bold text-[#7D2E4E] text-lg">{faq.question}</span>
                    {activeAccordion === index ? <FaChevronUp className="text-[#F59E0B]" /> : <FaChevronDown className="text-gray-400" />}
                  </button>
                  <div 
                    className={`px-6 overflow-hidden transition-all duration-300 ${activeAccordion === index ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
                  >
                    <p className="text-gray-600 border-t pt-4">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Submit Ticket Form */}
          <div className="w-full lg:w-2/5">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-[#F59E0B]/10">
              <h3 className="text-2xl font-bold text-[#7D2E4E] mb-6">Still need help?</h3>
              <p className="text-gray-500 mb-6">Can't find the answer you're looking for? Submit a ticket.</p>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-[#7D2E4E] mb-1">Issue Type</label>
                  <select className="select select-bordered w-full bg-[#FFF0F5] focus:bg-white focus:border-[#F59E0B] focus:outline-none text-gray-700">
                    <option>General Inquiry</option>
                    <option>Booking Issue</option>
                    <option>Payment Problem</option>
                    <option>Feedback</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#7D2E4E] mb-1">Description</label>
                  <textarea 
                    className="textarea textarea-bordered w-full h-32 bg-[#FFF0F5] focus:bg-white focus:border-[#F59E0B] focus:outline-none text-gray-700" 
                    placeholder="Describe your issue..."
                  ></textarea>
                </div>

                <button className="btn w-full bg-[#F59E0B] hover:bg-[#d97706] text-white border-none font-bold shadow-lg flex items-center gap-2">
                  Submit Ticket <FaPaperPlane />
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Support;