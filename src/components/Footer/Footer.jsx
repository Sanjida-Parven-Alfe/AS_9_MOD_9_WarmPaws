import React from "react";
import MyContainer from "../MyContainer/MyContainer";
import Footerimg from "../../assets/Pet_Care_Logo_Footer.png";

const Footer = () => {
  return (
    <div className="bg-[#443935]">
      <MyContainer>
        {/* Main footer */}
        <footer className="footer bg-[#443935] sm:footer-horizontal flex flex-col sm:flex-row flex-wrap justify-between text-base-content p-6 sm:p-10 gap-8">
          {/* Logo and title */}
          <aside className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-10 w-full sm:w-auto">
            <img
              src={Footerimg}
              className="w-40 h-32 sm:w-50 sm:h-40 border-r-2 border-yellow-200"
              alt="Logo"
            />
            <p className="text-center sm:text-left text-3xl text-amber-100 font-bold">
              <span className="text-4xl font-extrabold bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Warm
              </span>{" "}
              Paws
              <br />
              <span className="text-[15px] pt-[20px] font-normal block text-right">Pet Care in Winter</span>
            </p>
          </aside>

          {/* Services */}
          <nav className="flex flex-col gap-2 w-full sm:w-auto text-center sm:text-left">
            <h6 className="footer-title mb-2">Services</h6>
            <a className="link link-hover hover:text-orange-500">Branding</a>
            <a className="link link-hover hover:text-orange-500">Design</a>
            <a className="link link-hover hover:text-orange-500">Marketing</a>
            <a className="link link-hover hover:text-orange-500">Advertisement</a>
          </nav>

          {/* Company */}
          <nav className="flex flex-col gap-2 w-full sm:w-auto text-center sm:text-left">
            <h6 className="footer-title mb-2">Company</h6>
            <a className="link link-hover hover:text-orange-500">About us</a>
            <a className="link link-hover hover:text-orange-500">Contact</a>
            <a className="link link-hover hover:text-orange-500">Jobs</a>
            <a className="link link-hover hover:text-orange-500">Press kit</a>
          </nav>

          {/* Legal */}
          <nav className="flex flex-col gap-2 w-full sm:w-auto text-center sm:text-left">
            <h6 className="footer-title mb-2">Legal</h6>
            <a className="link link-hover hover:text-orange-500">Terms of use</a>
            <a className="link link-hover hover:text-orange-500">Privacy policy</a>
            <a className="link link-hover hover:text-orange-500">Cookie policy</a>
          </nav>
        </footer>

        {/* Bottom footer */}
        <footer className="footer bg-[#443935] text-base-content p-4  border-t-1 border-gray-500">
          <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-amber-100 text-sm text-center sm:text-left">
              Copyright © {new Date().getFullYear()} - All rights reserved
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-4 justify-center sm:justify-end">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={26}
                  height={26}
                  viewBox="0 0 24 24"
                  className="cursor-pointer fill-white hover:fill-orange-500 hover:scale-110 transition-transform duration-200"
                >
                  <g fill="currentColor">
                    <g clipPath="url(#SVGXv8lpc2Y)">
                      <path
                        fillRule="evenodd"
                        d="M0 12.067C0 18.034 4.333 22.994 10 24v-8.667H7V12h3V9.333c0-3 1.933-4.666 4.667-4.666c.866 0 1.8.133 2.666.266V8H15.8c-1.467 0-1.8.733-1.8 1.667V12h3.2l-.533 3.333H14V24c5.667-1.006 10-5.966 10-11.933C24 5.43 18.6 0 12 0S0 5.43 0 12.067"
                        clipRule="evenodd"
                      />
                    </g>
                    <defs>
                      <clipPath id="SVGXv8lpc2Y">
                        <path d="M0 0h24v24H0z" />
                      </clipPath>
                    </defs>
                  </g>
                </svg>
              </a>

              {/* Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={26}
                  height={26}
                  viewBox="0 0 24 24"
                  className="cursor-pointer fill-white hover:fill-orange-500 hover:scale-110 transition-transform duration-200"
                >
                  <circle
                    cx={17}
                    cy={7}
                    r={1.5}
                    fill="currentColor"
                    fillOpacity={0}
                  >
                    <animate
                      fill="freeze"
                      attributeName="fill-opacity"
                      begin="1.3s"
                      dur="0.15s"
                      values="0;1"
                    />
                  </circle>
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  >
                    <path
                      strokeDasharray={72}
                      strokeDashoffset={72}
                      d="M16 3c2.76 0 5 2.24 5 5v8c0 2.76 -2.24 5 -5 5h-8c-2.76 0 -5 -2.24 -5 -5v-8c0 -2.76 2.24 -5 5 -5h4Z"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        dur="0.6s"
                        values="72;0"
                      />
                    </path>
                    <path
                      strokeDasharray={28}
                      strokeDashoffset={28}
                      d="M12 8c2.21 0 4 1.79 4 4c0 2.21 -1.79 4 -4 4c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.7s"
                        dur="0.6s"
                        values="28;0"
                      />
                    </path>
                  </g>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={26}
                  height={26}
                  viewBox="0 0 24 24"
                  className="cursor-pointer fill-white hover:fill-orange-500 hover:scale-110 transition-transform duration-200"
                >
                  <g fill="currentColor">
                    <path d="M1 2h2.5L3.5 2h-2.5zM5.5 2h2.5L7.2 2h-2.5z">
                      <animate
                        fill="freeze"
                        attributeName="d"
                        dur="0.4s"
                        values="M1 2h2.5L3.5 2h-2.5zM5.5 2h2.5L7.2 2h-2.5z;M1 2h2.5L18.5 22h-2.5zM5.5 2h2.5L23 22h-2.5z"
                      />
                    </path>
                    <path d="M3 2h5v0h-5zM16 22h5v0h-5z">
                      <animate
                        fill="freeze"
                        attributeName="d"
                        begin="0.4s"
                        dur="0.4s"
                        values="M3 2h5v0h-5zM16 22h5v0h-5z;M3 2h5v2h-5zM16 22h5v-2h-5z"
                      />
                    </path>
                    <path d="M18.5 2h3.5L22 2h-3.5z">
                      <animate
                        fill="freeze"
                        attributeName="d"
                        begin="0.5s"
                        dur="0.4s"
                        values="M18.5 2h3.5L22 2h-3.5z;M18.5 2h3.5L5 22h-3.5z"
                      />
                    </path>
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </MyContainer>
    </div>
  );
};

export default Footer;
