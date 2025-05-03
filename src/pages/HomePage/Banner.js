import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const Banner = () => {
  return (
    <div className="h-[532px] w-full justify-center  overflow-x-hidden items-center flex flex-col md:flex-row md:mr-5 shadow-xl shadow-neon">
      <img
        className=" w-full md:w-1/2 h-full rounded-2xl mx-4 shadow-xl shadow-neon hover:scale-95 transition-all duration-500   "
        alt="Banner"
        src="/images/Banner.png"
      />
      <div className=" w-full md:w-1/2  md:h-[532px] md:left-[720px] pr-[16px] md:pr-[160px] pl-[16px] md:pl-[72px] flex justify-center items-center bg-spaceDark text-white shadow-xl rounded-2xl shadow-neon">
        {/**العمود الثاني */}
        <div className=" md:w-[452px]  grid gap-[16px] ">
          <p className="text-star font-inter text-[12px] md:text-[16px] font-bold leading-[16px] text-left animate-bounce">
            What's new ?
          </p>
          <p className="font-poppins text-[24px] md:text-[40px] font-medium leading-[28px] md:leading-[44px] tracking-[-0.4px] text-left ">
            Introducing Our New Astronomical Spectroscopy AI Service!
          </p>
          <p className=" font-inter text-[16px] md:text-[20px] font-normal leading-[24px] md:leading-[32px] text-left">
            Using cutting-edge AI algorithms, we provide precise analysis <br />{" "}
            of celestial spectra to unlock the secrets of the universe
          </p>
          <div className="flex   transition-all duration-200 transform hover:scale-95 w-[100px] ">
            <button className=" h-auto mt-2 flex items-center whitespace-nowrap rounded-2xl hover:text-star bg-space-gradient px-4 py-2  transition-all duration-500 transform hover:scale-105 delay-100 hover:shadow-lg hover:shadow-black">
              Discover Now
              <ArrowRightIcon className="ml-2 w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
