import React from "react";
import NavBar from "../../Shared/NavBar";
import Footer from "../../Shared/Footer";
import DropPhoto from "./DropPhoto";
import HeroSection from "./HeroSection";

const AiPage = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#00000F] via-[#0a1d3a] to-[#3a5f91]">
      <NavBar />
      <div className="grid grid-cols-1 md:grid-cols-2 mt-4 md:mt-16 gap-8 px-4 py-8">
        <HeroSection />
        <div className="flex justify-center items-center">
          <DropPhoto />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AiPage;
