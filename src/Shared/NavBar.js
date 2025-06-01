import React, { useState, useRef, useEffect } from "react";
import { UserCircleIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import { FcGraduationCap, FcGlobe } from "react-icons/fc";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "text-yellow-400 font-bold"
      : "text-white font-medium hover:text-neon transform transition-all hover:scale-90";
  };

  return (
    <div className="w-full md:py-[16px] flex justify-between px-4 items-center text-white shadow-sm font-Rajdhani">
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>
          <Bars3Icon className="w-6 h-6 text-neon" />
        </button>
      </div>

      <Link to={"/homepage"}>
        <button className="font-Orbitron text-[30px] leading-[24px] text-center hover:text-subText transition-all duration-200 hover:scale-95 transform font-bold">
          <FcGraduationCap className="inline-block w-9 h-9" /> SpaceX.
        </button>
      </Link>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute top-[60px] left-0 w-full bg-white shadow-md z-10"
        >
          <div className="flex flex-col items-center py-2">
            <Link to="/homepage">
              <button className={getLinkClass("/homepage")}>Home</button>
            </Link>
            <Link to="/ai">
              <button className={getLinkClass("/ai")}>
                <FcGlobe className="inline-block w-6 h-6" /> AI Service
              </button>
            </Link>
            <Link to="/blogpage">
              <button className={getLinkClass("/blogpage")}>Articles</button>
            </Link>
            <Link to="/aboutuspage">
              <button className={getLinkClass("/aboutuspage")}>About Us</button>
            </Link>
            <Link to="/contactuspage">
              <button className={getLinkClass("/contactuspage")}>
                Contact Us
              </button>
            </Link>
            <Link to="/profile">
              <button className={getLinkClass("/profile")}>My Profile</button>
            </Link>
          </div>
        </div>
      )}

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-[30px]">
        <Link to="/homepage">
          <button className={getLinkClass("/homepage")}>Home</button>
        </Link>
        <hr className="bg-white w-[1px] border-none h-5 opacity-10" />

        <Link to="/ai">
          <button className={getLinkClass("/ai")}>
            <FcGlobe className="inline-block w-6 h-6" /> AI Service
          </button>
        </Link>
        <hr className="bg-white w-[1px] border-none h-5 opacity-10" />

        <Link to="/blogpage">
          <button className={getLinkClass("/blogpage")}>Articles</button>
        </Link>
        <hr className="bg-white w-[1px] border-none h-5 opacity-10" />

        <Link to="/aboutuspage">
          <button className={getLinkClass("/aboutuspage")}>About Us</button>
        </Link>
        <hr className="bg-white w-[1px] border-none h-5 opacity-10" />

        <Link to="/contactuspage">
          <button className={getLinkClass("/contactuspage")}>Contact Us</button>
        </Link>
      </div>

      <div className="hidden md:flex">
        <Link to="/profile">
          <button>
            <UserCircleIcon className="w-8 h-8 text-white hover:text-blue" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
