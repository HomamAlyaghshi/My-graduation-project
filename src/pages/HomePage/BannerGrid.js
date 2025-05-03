import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const BannerGrid = () => {
  return (
    <div className="w-full h-auto md:h-[700px] font-Rajdhani flex flex-col md:flex-row gap-[32px] md:gap-[64px] px-4 py-8  text-white">
      {/* العمود الأيسر */}
      <div className="relative flex-1 min-h-[300px] md:h-full">
        <img
          src="/images/banner1.png"
          alt="banner1"
          className="h-full w-full object-cover rounded-3xl shadow-xl shadow-neon hover:shadow-white transition-all duration-500"
        />
        <div className="absolute top-[48px] left-[16px] sm:left-[48px] w-[90%] sm:w-[360px] flex flex-col items-start gap-[12px]">
          <p
            className="font-poppins text-[28px] sm:text-[34px] font-Orbitron font-medium leading-[38px] tracking-[-0.6px]
  bg-space-grid bg-clip-text text-transparent"
          >
            Planets
          </p>
          <div className="flex border-b-2 border-neon hover:border-blue">
            <button className="w-[100px] mt-2 flex items-center whitespace-nowrap transition-all duration-200 transform hover:scale-95 hover:text-blue">
              Exploar Now
              <ArrowRightIcon className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* العمود الأيمن */}
      <div className="flex-1 flex flex-col gap-[24px]">
        {/* العنصر الأول */}
        <div className="relative flex-1 min-h-[150px]">
          <img
            src="/images/banner2.png"
            alt="banner2"
            className="w-full h-full object-cover rounded-3xl shadow-xl shadow-neon hover:shadow-white transition-all duration-500"
          />
          <div className="absolute top-1/2 left-[16px] sm:left-[32px] w-[90%] sm:w-[420px] flex flex-col-reverse items-start gap-[12px] transform -translate-y-1/2">
            <div className="flex border-b-2 border-neon hover:border-blue">
              <button className="w-[100px] mt-2 flex items-center whitespace-nowrap  transition-all duration-200 transform hover:scale-95 hover:text-blue">
                Exploar Now
                <ArrowRightIcon className="ml-2 w-5 h-5" />
              </button>
            </div>
            <p
              className="font-Orbitron text-[28px] sm:text-[34px] font-medium leading-[38px] tracking-[-0.6px]
              bg-space-text bg-clip-text text-transparent
            "
            >
              Celestial bodies
            </p>
          </div>
        </div>

        {/* العنصر الثاني */}
        <div className="relative flex-1 min-h-[150px]">
          <img
            src="/images/banner3.png"
            alt="banner3"
            className="w-full h-full object-cover rounded-3xl shadow-xl shadow-neon hover:shadow-white transition-all duration-500"
          />
          <div className="absolute top-1/2 left-[16px] sm:left-[32px] w-[90%] sm:w-[420px] flex flex-col-reverse items-start gap-[12px] transform -translate-y-1/2">
            <div className="flex border-b-2 border-neon hover:border-blue">
              <button className="w-[100px] mt-2 flex items-center whitespace-nowrap transition-all duration-200 transform hover:scale-95 hover:text-blue">
                Exploar Now
                <ArrowRightIcon className="ml-2 w-5 h-5" />
              </button>
            </div>
            <p
              className="font-Orbitron text-[28px] sm:text-[34px] font-medium leading-[38px] tracking-[-0.6px]
                            bg-space-text bg-clip-text text-transparent "
            >
              Stars
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerGrid;
