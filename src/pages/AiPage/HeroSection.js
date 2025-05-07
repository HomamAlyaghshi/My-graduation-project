import React from "react";
const HeroSection = () => {
  return (
    <div className="flex justify-center items-center font-bold text-4xl  text-center my-8 text-white font-Rajdhani">
      <div className="grid gap-12">
        <span className="">
          Welcome to the <br /> AI-powered spectral analysis service.
        </span>
        <span className="bg-space-text bg-clip-text text-transparent py-2 animate-pulse ">
          Upload your image here
        </span>
      </div>
    </div>
  );
};

export default HeroSection;
