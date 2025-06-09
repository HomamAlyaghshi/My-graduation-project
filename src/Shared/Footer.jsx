import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    // Main container with deep gradient and responsive padding
    <div
      className="relative bg-gradient-to-b from-[#3a5f91] via-[#0a1d3a] to-[#000000] text-white py-12 px-4 overflow-hidden
                    md:py-16 md:px-8 lg:px-16"
    >
      <div
        className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 gap-y-10
                      md:grid-cols-3 md:gap-x-8 md:gap-y-12
                      lg:gap-x-16"
      >
        {/* Section 1: Logo and Company Description */}
        <div
          className="flex flex-col items-center text-center
                        md:items-start md:text-left"
        >
          <Link to={"/homepage"}>
            <button
              className="font-Orbitron text-3xl lg:text-4xl font-extrabold text-white mb-3 tracking-wider
                               hover:text-blue-400 transition-colors duration-300 transform hover:scale-105"
            >
              SpaceX.
            </button>
          </Link>
          <p
            className="text-sm leading-relaxed text-gray-300 w-full px-6
                        md:max-w-none md:px-0 md:mx-0"
          >
            Exploring the frontiers of technology and innovation. Dedicated to
            delivering cutting-edge solutions and a seamless experience for a
            brighter future.
          </p>
        </div>

        {/* Section 2: Quick Navigation Links */}
        <div
          className="flex flex-col items-center text-center
                        md:items-start md:text-left"
        >
          <h4
            className="text-lg font-bold font-Orbitron mb-4 text-star
                         md:text-xl md:mb-6"
          >
            Quick Links
          </h4>
          <nav className="flex flex-col gap-3">
            <Link
              to={"/homepage"}
              className="text-gray-300 hover:text-white  duration-200 transition-all hover:scale-105  transform origin-center md:origin-left"
            >
              Home
            </Link>
            <Link
              to={"/ai"}
              className="text-gray-300 hover:text-white transition-all duration-200 hover:scale-105 transform origin-center md:origin-left"
            >
              AI Service
            </Link>
            <Link
              to={"/aboutuspage"}
              className="text-gray-300 hover:text-white transition-all duration-200 hover:scale-105 transform origin-center md:origin-left"
            >
              About Us
            </Link>
            <Link
              to={"/contactuspage"}
              className="text-gray-300 hover:text-white transition-all duration-200 hover:scale-105 transform origin-center md:origin-left"
            >
              Contact Us
            </Link>
          </nav>
        </div>

        {/* Section 3: Social Media & Legal Information */}
        <div
          className="flex flex-col items-center text-center
                        md:items-start md:text-left"
        >
          <h4
            className="text-lg font-bold font-Orbitron mb-4 text-star
                         md:text-xl md:mb-6"
          >
            Connect With Us
          </h4>

          {/* Social Media Icons - Corrected Sizing and Alignment */}
          <div className="flex justify-center gap-4 mb-6 md:gap-6 md:mb-8">
            {["facebook", "instagram", "linkedin", "x-twitter"].map(
              (platform) => (
                <a
                  key={platform}
                  href={`https://${platform}.com`} // Dynamic href
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative flex items-center justify-center rounded-full border-2 border-gray-600 text-gray-400
                           transition-all duration-300 overflow-hidden
                           hover:text-white hover:shadow-lg
                           w-10 h-10 text-lg 
                           md:w-12 md:h-12 md:text-xl 
                           ${
                             platform === "facebook"
                               ? "hover:border-blue-500 hover:shadow-blue-500/50"
                               : platform === "instagram"
                               ? "hover:border-purple-500 hover:shadow-purple-500/50"
                               : platform === "linkedin"
                               ? "hover:border-blue-700 hover:shadow-blue-700/50"
                               : "hover:border-gray-300 hover:shadow-gray-300/50" // For X/Twitter
                           }`}
                  aria-label={
                    platform === "x-twitter"
                      ? "X (formerly Twitter)"
                      : platform.charAt(0).toUpperCase() + platform.slice(1)
                  }
                >
                  <FontAwesomeIcon
                    icon={
                      platform === "facebook"
                        ? faFacebookF
                        : platform === "instagram"
                        ? faInstagram
                        : platform === "linkedin"
                        ? faLinkedinIn
                        : faXTwitter
                    }
                    className="transition-transform duration-300 group-hover:scale-110"
                    // Removed size prop here, as text-lg/xl on parent now controls it
                  />
                  {/* Overlay for the glow effect */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-screen
                                 ${
                                   platform === "facebook"
                                     ? "bg-blue-500"
                                     : platform === "instagram"
                                     ? "bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500"
                                     : platform === "linkedin"
                                     ? "bg-blue-700"
                                     : "bg-black"
                                 }`}
                  ></div>
                </a>
              )
            )}
          </div>

          {/* Legal Links (Copyright, Privacy, Terms) */}
          <div
            className="flex flex-col gap-2 text-sm text-gray-400 w-full px-6 mt-auto
                          md:px-0"
          >
            <span>Copyright © 2024 Homam Alyaghshi. All rights reserved.</span>
            <Link
              to={"/privacy-policy"}
              className="hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              to={"/terms-of-use"}
              className="hover:text-white transition-colors duration-200"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>

      {/* Subtle bottom divider */}
      <div className="mt-10 border-t border-gray-700 opacity-50 relative z-10 md:mt-12"></div>
    </div>
  );
};

export default Footer;
