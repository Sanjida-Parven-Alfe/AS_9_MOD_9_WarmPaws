import React, { useContext } from "react";
import MyContainer from "../MyContainer/MyContainer";
import { Link } from "react-router-dom";
import Logo from "../../assets/Pet_Care_Logo_V3.png";
import MyLink from "../MyLink/MyLink";
import AuthContext from "../../Context/AuthContext";
import Logoutimg from "../../assets/logout.png";
import DefaultAvatar from "../../assets/account.png";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  // Nav links array
  const links = (
    <>
      <li><MyLink to={"/"}>Home</MyLink></li>
      <li><MyLink to={"/services"}>All Services</MyLink></li>
      <li><MyLink to={"/about"}>About Us</MyLink></li>
      <li><MyLink to={"/contact"}>Contact</MyLink></li>
      <li><MyLink to={"/support"}>Support</MyLink></li>
      {/* Profile is conditionally rendered separately or can be here if user exists */}
      {user && <li><MyLink to={"/profile"}>Profile</MyLink></li>}
    </>
  );

  return (
    // Background changed to amber-50 (Theme relevant) and sticky added
    <div className="navbar bg-amber-50 w-full sticky top-0 z-50 shadow-md border-b border-amber-200">
      <MyContainer>
        <div className="flex justify-between items-center w-full">
          <div className="navbar-start w-auto">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn text-amber-900 btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow text-amber-900">
                {links}
              </ul>
            </div>

            <Link to="/" className="flex items-center cursor-pointer gap-2">
              <img src={Logo} className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]" alt="WarmPaws Logo" />
              <span className="text-xl md:text-2xl lg:text-3xl text-amber-950 font-extrabold tracking-tight">
                Warm<span className="text-amber-600">Paws</span>
              </span>
            </Link>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="flex items-center gap-6 text-amber-900 font-medium">
              {links}
            </ul>
          </div>

          <div className="navbar-end w-auto gap-3">
            {user ? (
              <div className="flex items-center gap-3">
                <div className="tooltip tooltip-bottom" data-tip={user.displayName || "User"}>
                  <img
                    src={user.photoURL || DefaultAvatar}
                    alt="avatar"
                    className="w-10 h-10 rounded-full border-2 border-amber-600 object-cover cursor-pointer"
                  />
                </div>
                <button onClick={logout} className="btn btn-circle btn-ghost hover:bg-red-100" title="Logout">
                  <img src={Logoutimg} alt="Logout" className="w-6 h-6" />
                </button>
              </div>
            ) : (
              <div className="flex gap-2">
                <Link to="/login" className="px-4 py-2 rounded-lg font-semibold text-amber-700 hover:bg-amber-100 transition">
                  Login
                </Link>
                <Link to="/signup" className="px-4 py-2 rounded-lg font-semibold text-white bg-amber-600 hover:bg-amber-700 transition shadow-md">
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