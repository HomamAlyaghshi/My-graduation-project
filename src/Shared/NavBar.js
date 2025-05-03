import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserCircleIcon, Bars3Icon } from "@heroicons/react/24/outline";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // إنشاء مرجع للقائمة

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // إغلاق القائمة عند النقر خارجها
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

  return (
    <div className="h-[60px] w-full  md:py-[16px] flex justify-between px-4 items-center text-white shadow-sm ">
      <div className="md:hidden flex items-center ">
        <button onClick={toggleMenu}>
          <Bars3Icon className="w-6 h-6 text-neon" />
        </button>
      </div>
      <Link to={"/homepage"}>
        <button className="font-poppins text-[24px] leading-[24px] text-center w-[105px] h-[24px] text-white hover:text-subText transition-all duration-200 hover:scale-95 transform font-bold ">
          Furnishify.
        </button>
      </Link>
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute top-[60px] left-0 w-full bg-white shadow-md z-10"
        >
          <div className="flex flex-col items-center  py-2">
            <Link to="/homepage">
              <button className="py-2 text-neon_50 font-medium hover:text-neon">
                Home
              </button>
            </Link>
            <Link to="/ai">
              <button className="py-2 text-white font-medium hover:text-neon">
                AI Service
              </button>
            </Link>

            <Link to="/contactuspage">
              <button className="py-2 text-white font-medium hover:text-neon">
                Contact Us
              </button>
            </Link>
            <Link to="/accountpage">
              <button className="py-2 text-white font-medium hover:text-neon">
                My Profile
              </button>
            </Link>
          </div>
        </div>
      )}
      <div className="hidden md:flex  h-[24px] gap-[40px] ">
        <Link to="/homepage">
          <button className="grid gap-[2px] text-white font-medium hover:text-neon transform transition-all hover:scale-90 ">
            Home
          </button>
        </Link>
        <Link to="/ai">
          <button className=" text-white font-medium hover:text-neon">
            AI Service
          </button>
        </Link>

        <Link to={"/contactuspage"}>
          <button className="w-[76px] grid gap-[2px] text-white font-medium whitespace-nowrap hover:text-neon transform transition-all hover:scale-90">
            Contact Us
          </button>
        </Link>
      </div>

      <div className="hidden md:flex w-[130px] h-[28px]  gap-[16px]">
        <Link to={"/accountpage"}>
          <button>
            <UserCircleIcon className="w-6 h-6 text-white hover:text-blue" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
