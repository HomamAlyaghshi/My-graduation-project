import React, { useState, useRef, useEffect } from "react";
import { UserCircleIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // Added XMarkIcon for close
import { Link, useLocation } from "react-router-dom";
import { FcGraduationCap, FcGlobe } from "react-icons/fc";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside or on a link
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the menu and not on the toggle button itself
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest("[data-toggle-button]")
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const getLinkClass = (path, isMobile = false) => {
    const baseClasses =
      "relative font-medium transition-all duration-300 ease-in-out block px-4 py-2 rounded-md"; // Added block, px, py, rounded for consistency

    // Mobile specific styles
    const mobileSpecificClasses =
      "w-full text-left text-lg hover:bg-spaceLight"; // Full width and subtle hover

    // Desktop specific styles
    const desktopSpecificClasses =
      "md:hover:text-neon md:hover:scale-105"; // No block on desktop, just text/scale

    const activeClasses =
      "text-yellow-400 font-bold bg-gray-700/50"; // More distinct active state
    const inactiveClasses = "text-white"; // Default inactive

    let classes = `${baseClasses} ${
      location.pathname === path ? activeClasses : inactiveClasses
    }`;

    if (isMobile) {
      classes += ` ${mobileSpecificClasses}`;
    } else {
      classes += ` ${desktopSpecificClasses}`;
    }

    // Add an underline animation for desktop
    if (!isMobile) {
      classes +=
        " md:after:content-[''] md:after:absolute md:after:w-0 md:after:h-[2px] md:after:left-1/2 md:after:bottom-0 md:after:-translate-x-1/2 md:after:bg-yellow-400 md:after:transition-all md:after:duration-300 md:after:ease-in-out md:hover:after:w-full";
      if (location.pathname === path) {
        classes += " md:after:w-full"; // Active link has full underline
      }
    }

    return classes;
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-spaceDark z-50 shadow-lg md:py-[16px] py-4 px-4 flex justify-between items-center text-white font-Rajdhani">
      {/* Mobile Menu Toggle (Hamburger Icon) */}
      <div className="md:hidden flex items-center ">
        <button onClick={toggleMenu} data-toggle-button aria-expanded={isMenuOpen} aria-controls="mobile-menu">
          {isMenuOpen ? (
            <XMarkIcon className="w-8 h-8 text-neon" /> // Close icon when open
          ) : (
            <Bars3Icon className="w-8 h-8 text-neon" /> // Hamburger icon when closed
          )}
        </button>
      </div>

      {/* Logo */}
      <Link to={"/homepage"}>
        <button className="font-Orbitron text-2xl sm:text-3xl font-bold text-center hover:text-subText transition-all duration-200 hover:scale-105 transform flex items-center gap-2">
          <FcGraduationCap className="inline-block w-8 h-8 sm:w-9 sm:h-9" />
          NeuroStar
        </button>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6 lg:gap-10">
        <Link to="/homepage">
          <span className={getLinkClass("/homepage")}>Home</span>
        </Link>
        <Link to="/ai">
          <span className={getLinkClass("/ai")}>
            <FcGlobe className="inline-block w-6 h-6 mr-2" /> AI Service
          </span>
        </Link>
        <Link to="/blogpage">
          <span className={getLinkClass("/blogpage")}>Articles</span>
        </Link>
        <Link to="/aboutuspage">
          <span className={getLinkClass("/aboutuspage")}>About Us</span>
        </Link>
        <Link to="/contactuspage">
          <span className={getLinkClass("/contactuspage")}>Contact Us</span>
        </Link>
      </div>

      {/* User Profile Icon - Always visible on desktop, hidden on mobile in this version */}
      <div className="hidden md:flex">
        <Link to="/profile">
          <button
            aria-label="My Profile"
            className="p-2 rounded-full hover:bg-gray-700/50 transition-colors duration-200"
          >
            <UserCircleIcon className="w-8 h-8 text-white hover:text-blue-400" />
          </button>
        </Link>
      </div>

      {/* Mobile Menu Content (Animated) */}
      <div
        ref={menuRef}
        id="mobile-menu"
        // Conditional classes for animation
        className={`absolute top-full left-0 w-full bg-spaceMid shadow-lg z-40 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none" // Hide and disable pointer events when closed
        }`}
      >
        <div className="flex flex-col items-start py-4 px-4">
          <Link to="/homepage" onClick={() => setIsMenuOpen(false)}>
            <span className={getLinkClass("/homepage", true)}>Home</span>
          </Link>
          <Link to="/ai" onClick={() => setIsMenuOpen(false)}>
            <span className={getLinkClass("/ai", true)}>
              <FcGlobe className="inline-block w-6 h-6 mr-2" /> AI Service
            </span>
          </Link>
          <Link to="/blogpage" onClick={() => setIsMenuOpen(false)}>
            <span className={getLinkClass("/blogpage", true)}>Articles</span>
          </Link>
          <Link to="/aboutuspage" onClick={() => setIsMenuOpen(false)}>
            <span className={getLinkClass("/aboutuspage", true)}>About Us</span>
          </Link>
          <Link to="/contactuspage" onClick={() => setIsMenuOpen(false)}>
            <span className={getLinkClass("/contactuspage", true)}>Contact Us</span>
          </Link>
          <Link to="/profile" onClick={() => setIsMenuOpen(false)}>
            <span className={getLinkClass("/profile", true)}>My Profile</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;