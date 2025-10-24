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

  return (
    <div className="navbar bg-white w-full sticky top-0 z-50 shadow-md">
      <MyContainer>
        <div className="navbar bg-white w-full sticky top-0 z-50">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn text-black btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm items-start dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <MyLink to={"/"}>Home</MyLink>
                </li>
                <li>
                  <MyLink to={"/Services"}>Services</MyLink>
                </li>
                <li>
                  <MyLink to={"/Profile"}>Profile</MyLink>
                </li>
              </ul>
            </div>
            <div className="flex items-center cursor-pointer">
              <img src={Logo} className="w-[50px] h-[50px]" alt="" />
              <a className="text-3xl text-black font-bold px-[5px]">
                <span className="text-4xl font-extrabold bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                  Warm
                </span>
                Paws
              </a>
            </div>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="flex items-center gap-4">
              <li>
                <MyLink to={"/"}>Home</MyLink>
              </li>
              <li>
                <MyLink to={"/Services"}>Services</MyLink>
              </li>
              <li>
                <MyLink to={"/Profile"}>Profile</MyLink>
              </li>
            </ul>
          </div>

          <div className="navbar-end gap-2">
            {user ? (
              <>
                <div
                  className="tooltip tooltip-bottom"
                  data-tip={user.displayName || user.email}
                >
                  <img
                    src={user.photoURL || DefaultAvatar}
                    alt="avatar"
                    className="w-10 h-10 rounded-full cursor-pointer"
                  />
                </div>

                <button
                  onClick={logout}
                  className="btn p-0 w-10 h-10 border-none rounded-full hover:scale-105 transition-transform duration-200 shadow-md hover:shadow-lg flex items-center justify-center"
                >
                  <img src={Logoutimg} alt="Logout" className="w-10 h-10" />
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="btn w-20 font-semibold rounded-lg text-white border-none bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-400 hover:from-amber-700 hover:via-orange-600 hover:to-yellow-500 hover:scale-105 transition-transform duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  className="btn w-20 font-semibold rounded-lg text-white border-none bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-400 hover:from-amber-700 hover:via-orange-600 hover:to-yellow-500 hover:scale-105 transition-transform duration-200 shadow-md hover:shadow-lg"
                >
                  SignUp
                </Link>
              </>
            )}
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Navbar;
