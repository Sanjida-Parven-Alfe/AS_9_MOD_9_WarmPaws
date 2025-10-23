import React from "react";
import MyContainer from "../MyContainer/MyContainer";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Pet_Care_Logo_V3.png";
import MyLink from "../MyLink/MyLink";

const Navbar = () => {
  return (
    <div >
      <MyContainer>
        <div className="navbar bg-white ">
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
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm items-start dropdown-content bg-white rounded-box z-1  mt-3 w-52 p-2 shadow"
              >
                <li>
                  <MyLink to={"/"} className="">
                    Home
                  </MyLink>
                </li>

                <li>
                  <MyLink to={"/Services"} className="">
                    Services
                  </MyLink>
                </li>

                <li>
                  <MyLink to={"/Profile"} className="">
                    Profile
                  </MyLink>
                </li>
              </ul>
            </div>
            <div className="flex items-center cursor-pointer">
              <img src={Logo} className="w-[50px] h-[50px]" alt="" />
              <a className="text-xl text-black font-bold px-[5px]">WarmPaws</a>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="flex items-center gap-4">
              <li>
                <MyLink to={"/"} className="">
                  Home
                </MyLink>
              </li>

              <li>
                <MyLink to={"/Services"} className="">
                  Services
                </MyLink>
              </li>

              <li>
                <MyLink to={"/Profile"} className="">
                  Profile
                </MyLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end gap-2">
            <a className="btn">Login</a>
            <a className="btn">SignUp</a>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Navbar;
