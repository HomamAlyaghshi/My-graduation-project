import React from "react";

const HeroSection = () => {
  return (
    <div
      data-aos="fade-down"
      className="relative py-16 px-4 text-center bg-spaceMid bg-opacity-80 rounded-2xl shadow-xl backdrop-blur-sm"
    >
      <div className="absolute inset-0 bg-neon/10 rounded-2xl animate-pulse-slow"></div>
      <h1 className="relative text-4xl sm:text-5xl font-Orbitron font-extrabold text-neon tracking-tight z-10">
        Meet Our Team
      </h1>
      <p className="relative mt-4 text-lg sm:text-xl text-subText max-w-2xl mx-auto z-10">
        Discover the passionate individuals driving our mission forward.
      </p>
    </div>
  );
};

export default HeroSection;