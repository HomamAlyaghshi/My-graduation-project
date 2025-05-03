import React from "react";
import NavBar from "../../Shared/NavBar";
import Footer from "../../Shared/Footer";
import DropPhoto from "./DropPhoto";
import HeroSection from "./HeroSection";
const AiPage = () => {
  return (
    <div className="w-full h-full bg-spaceDark">
      <NavBar />
      <div className="grid grid-cols-2 mt-4">
        <HeroSection />
        <div className=" flex justify-center items-center">
          <DropPhoto />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AiPage;
