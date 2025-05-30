import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-[#3a5f91] via-[#0a1d3a] to-[#000000]   h-[665px] md:h-full sm:h-[360px] py-[32px] md:px-[16px] sm:px-[160px] grid gap-[18px] font-bold font-Rajdhani">
      <div className="flex flex-col items-center sm:flex-row sm:justify-between">
        <div className="flex flex-col items-center sm:flex-row sm:w-[544px] justify-between">
          <Link to={"/homepage"}>
            <button className="w-[105px] font-Orbitron  text-[24px]  leading-[24px] text-center text-white hover:text-blue transition-all duration-200 hover:scale-95 transform">
              SpaceX.
            </button>
          </Link>
          <div className="w-[1px] h-[24px] bg-gray-500 hidden sm:block"></div>
          <p className="w-full sm:w-[350px]  text-[14px]  leading-[22px] text-center sm:text-left text-white">
            Text and text test test
          </p>
        </div>
        <div className="flex flex-col sm:flex-row text-white w-full sm:w-[392px] justify-between mt-10  sm:mt-0  text-[14px]  leading-[22px] text-center sm:text-left  sm:gap-0 ">
          <Link to={"/homepage"}>
            <button className="mb-2 sm:mb-0 transform transition-all hover:scale-90">
              Home
            </button>
          </Link>
          <Link to={"/ai"}>
            <button className="mb-2 sm:mb-0 transform transition-all hover:scale-90">
              AI Service
            </button>
          </Link>
          <Link to={"/aboutuspage"}>
            <button className="mb-2 sm:mb-0 transform transition-all hover:scale-90">
              About Us
            </button>
          </Link>

          <Link to={"/contactuspage"}>
            <button className="mb-2 sm:mb-0 transform transition-all hover:scale-90">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full border-t-[1px] border-b-blackButton_50 text-white">
        <div className="flex flex-col items-center w-full mt-[28px] sm:flex-row sm:justify-between">
          <div className=" md:flex gap-10 text-[12px]  leading-[20px] text-center sm:text-left">
            Copyright © 2024 Homam Alyaghshi. All rights reserved
            <div className=" text-[12px]  leading-[20px] text-center sm:text-left">
              Privacy Policy
            </div>
            <div className=" text-[12px]  leading-[20px] text-center sm:text-left">
              Terms of Use
            </div>
          </div>
          <div className="text-[12px] leading-[20px] text-center sm:text-left mt-2 sm:mt-0 flex justify-around gap-[24px]">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1877F2] text-white transition-transform hover:scale-110 shadow-md"
            >
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 text-white transition-transform hover:scale-110 shadow-md"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0077B5] text-white transition-transform hover:scale-110 shadow-md"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
