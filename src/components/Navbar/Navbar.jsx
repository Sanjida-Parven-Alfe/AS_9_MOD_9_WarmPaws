import React, { useContext, useState, useEffect } from "react";
import MyContainer from "../MyContainer/MyContainer";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/Pet_Care_Logo_V3.png";
import AuthContext from "../../Context/AuthContext";
import Logoutimg from "../../assets/logout.png";
import DefaultAvatar from "../../assets/account.png";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [scrolled, setScrolled] = useState(false);

  // Scroll Effect Logic
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Custom NavItem Component
  const NavItem = ({ to, children }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `relative px-2 py-2 font-bold text-sm md:text-base transition-colors duration-300 cursor-pointer ${
          isActive
            ? "text-[#F59E0B]" // Active Color (Orange)
            : "text-[#7D2E4E]" // Default Color (Burgundy) - No Hover Change
        }`
      }
    >
      {({ isActive }) => (
        <>
          {children}
          {/* Bottom Border Line - Visible only when Active */}
          <span
            className={`absolute bottom-0 left-0 h-[3px] rounded-full bg-[#F59E0B] transition-all duration-300 ${
              isActive ? "w-full" : "w-0"
            }`}
          ></span>
        </>
      )}
    </NavLink>
  );

  return (
    <div
      className={`navbar w-full sticky top-0 z-50 transition-all duration-300 border-b border-[#FBBF24]/20
        ${
          scrolled
            ? "py-2 shadow-lg backdrop-blur-md bg-[#FFF0F5]/90" // Scrolled (Glassy)
            : "py-4 shadow-sm bg-[#FFF0F5]" // Default (Solid)
        }
      `}
    >
      <MyContainer>
        <div className="flex justify-between items-center w-full">
          
          {/* --- Left Side: Logo & Mobile Menu --- */}
          <div className="navbar-start w-auto flex items-center gap-2">
            
            {/* Mobile Dropdown */}
            <div className="dropdown lg:hidden">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle text-[#7D2E4E] hover:bg-[#F59E0B]/10"
              >
                <FaBars size={24} />
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-white rounded-xl z-50 mt-3 w-52 p-4 shadow-xl border border-[#F59E0B]/20 gap-2"
              >
                <li><Link to="/" className="text-[#7D2E4E] font-semibold hover:text-[#F59E0B]">Home</Link></li>
                <li><Link to="/services" className="text-[#7D2E4E] font-semibold hover:text-[#F59E0B]">Services</Link></li>
                <li><Link to="/about" className="text-[#7D2E4E] font-semibold hover:text-[#F59E0B]">About Us</Link></li>
                <li><Link to="/contact" className="text-[#7D2E4E] font-semibold hover:text-[#F59E0B]">Contact</Link></li>
                <li><Link to="/support" className="text-[#7D2E4E] font-semibold hover:text-[#F59E0B]">Support</Link></li>
                {user && <li><Link to="/profile" className="text-[#7D2E4E] font-semibold hover:text-[#F59E0B]">Profile</Link></li>}
              </ul>
            </div>

            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <img
                src={Logo}
                className="w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-110"
                alt="WarmPaws Logo"
              />
              <span className="text-2xl md:text-3xl font-extrabold tracking-tight">
                <span className="text-[#7D2E4E]">Warm</span>
                <span className="text-[#F59E0B]">Paws</span>
              </span>
            </Link>
          </div>

          {/* --- Center: Desktop Menu --- */}
          <div className="navbar-center hidden lg:flex">
            <ul className="flex items-center gap-8">
              <NavItem to="/">Home</NavItem>
              <NavItem to="/services">All Services</NavItem>
              <NavItem to="/about">About Us</NavItem>
              <NavItem to="/contact">Contact</NavItem>
              <NavItem to="/support">Support</NavItem>
              {user && <NavItem to="/profile">Profile</NavItem>}
            </ul>
          </div>

          {/* --- Right Side: Auth Buttons --- */}
          <div className="navbar-end w-auto gap-3 flex items-center">
            
            {user ? (
              // Logged In View
              <div className="flex items-center gap-4">
                
                {/* 1. Avatar with Name Tooltip */}
                <div 
                    className="tooltip tooltip-bottom z-50" 
                    data-tip={user.displayName || "User"} 
                >
                  <div className="w-10 h-10 rounded-full border-2 border-[#F59E0B] p-[2px] cursor-pointer hover:shadow-lg transition-all overflow-hidden">
                    <img
                        src={user.photoURL || DefaultAvatar}
                        alt="avatar"
                        className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>

                {/* 2. Logout Button with Tooltip (Size matched: w-10 h-10) */}
                <div 
                    className="tooltip tooltip-bottom z-50" 
                    data-tip="Logout"
                >
                    <button
                      onClick={logout}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-red-200 hover:bg-red-50 text-red-500 transition-all shadow-sm hover:shadow-md"
                    >
                      <img src={Logoutimg} alt="Logout" className="w-full h-full" />
                    </button>
                </div>

              </div>
            ) : (
              // Logged Out View
              <div className="flex items-center gap-3">
                <Link
                  to="/login"
                  className="hidden sm:block font-bold text-[#7D2E4E] hover:text-[#F59E0B] transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-6 py-2 rounded-full font-bold text-white bg-[#F59E0B] hover:bg-[#d97706] shadow-lg shadow-orange-500/30 transition-transform hover:scale-105 border-none"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Navbar;