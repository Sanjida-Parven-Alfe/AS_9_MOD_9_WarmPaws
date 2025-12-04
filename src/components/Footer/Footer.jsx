import React from "react";
import MyContainer from "../MyContainer/MyContainer";
import Footerimg from "../../assets/Pet_Care_Logo_Footer.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#412832] text-[#FFF0F5] pt-16 pb-8 border-t-4 border-[#F59E0B]">
      <MyContainer>
        
        {/* Top Footer Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8">
          
          {/* Logo & Description */}
          <aside className="lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={Footerimg}
                className="w-24 h-24 object-contain p-2 bg-white/10 rounded-full border border-[#F59E0B]/30"
                alt="Logo"
              />
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight">
                  Warm<span className="text-[#F59E0B]">Paws</span>
                </h2>
                <p className="text-sm text-[#FBBF24] font-medium tracking-wide">
                  Cozy Care for Winter Pets
                </p>
              </div>
            </div>
            <p className="text-[#FFF0F5]/80 text-sm leading-relaxed max-w-xs">
              We provide the best winter care services for your beloved pets. From warm coats to health checkups, we insure their happiness in the cold.
            </p>
          </aside>

          {/* Links Section */}
          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left">
            
            {/* Services */}
            <nav className="flex flex-col gap-3">
              <h6 className="text-[#FBBF24] font-bold uppercase tracking-wider mb-2">Services</h6>
              <a className="link link-hover text-[#FFF0F5]/90 hover:text-[#F59E0B] transition-colors">Grooming</a>
              <a className="link link-hover text-[#FFF0F5]/90 hover:text-[#F59E0B] transition-colors">Winter Coats</a>
              <a className="link link-hover text-[#FFF0F5]/90 hover:text-[#F59E0B] transition-colors">Vet Checkup</a>
              <a className="link link-hover text-[#FFF0F5]/90 hover:text-[#F59E0B] transition-colors">Pet Boarding</a>
            </nav>

            {/* Company */}
            <nav className="flex flex-col gap-3">
              <h6 className="text-[#FBBF24] font-bold uppercase tracking-wider mb-2">Company</h6>
              <a className="link link-hover text-[#FFF0F5]/90 hover:text-[#F59E0B] transition-colors">About Us</a>
              <a className="link link-hover text-[#FFF0F5]/90 hover:text-[#F59E0B] transition-colors">Contact</a>
              <a className="link link-hover text-[#FFF0F5]/90 hover:text-[#F59E0B] transition-colors">Careers</a>
              <a className="link link-hover text-[#FFF0F5]/90 hover:text-[#F59E0B] transition-colors">Blog</a>
            </nav>

            {/* Legal */}
            <nav className="flex flex-col gap-3">
              <h6 className="text-[#FBBF24] font-bold uppercase tracking-wider mb-2">Legal</h6>
              <a className="link link-hover text-[#FFF0F5]/90 hover:text-[#F59E0B] transition-colors">Terms of Use</a>
              <a className="link link-hover text-[#FFF0F5]/90 hover:text-[#F59E0B] transition-colors">Privacy Policy</a>
              <a className="link link-hover text-[#FFF0F5]/90 hover:text-[#F59E0B] transition-colors">Cookie Policy</a>
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[#FFF0F5]/10 my-10"></div>

        {/* Bottom Footer Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-[#FFF0F5]/60 text-center md:text-left">
            Copyright © {new Date().getFullYear()} <span className="font-bold text-[#F59E0B]">WarmPaws</span>. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-[#F59E0B] hover:text-white text-[#F59E0B] transition-all duration-300 transform hover:scale-110 shadow-lg"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-[#F59E0B] hover:text-white text-[#F59E0B] transition-all duration-300 transform hover:scale-110 shadow-lg"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-[#F59E0B] hover:text-white text-[#F59E0B] transition-all duration-300 transform hover:scale-110 shadow-lg"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-[#F59E0B] hover:text-white text-[#F59E0B] transition-all duration-300 transform hover:scale-110 shadow-lg"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

      </MyContainer>
    </div>
  );
};

export default Footer;