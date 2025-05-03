import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

const Newsletter = () => {
  return (
    <div className="relative w-full h-[360px] text-white">
      <img
        alt="Newsletter"
        src="/images/footer.png"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 grid items-center justify-center gap-[32px] h-[166px] top-[101px]">
        <div className="grid gap-[8px] text-center">
          <h1 className="font-poppins text-[32px] sm:text-[40px] font-medium leading-[44px] tracking-[-0.4px]">
            Join Our Newsletter
          </h1>
          <h2 className="font-inter text-[16px] sm:text-[18px] font-normal leading-[30px]">
            Sign up for deals, new products and promotions
          </h2>
        </div>
        <div className="flex w-full sm:w-[488px] border-b-[1px] border-b-blackButton_50">
          <EnvelopeIcon className="w-6 h-6  mr-[8px]" />
          <input
            className="font-inter w-full text-[16px] font-medium leading-[28px] tracking-[-0.4px]  bg-transparent placeholder:text-blackButton_50 border-none outline-none focus:outline-none focus:ring-0 "
            placeholder="Email address"
            type="email"
          />
          <button className=" hover:text-subText ml-[8px] hover:scale-105 transition-all duration-150">
            SignUp
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
