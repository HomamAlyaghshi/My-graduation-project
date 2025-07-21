import React from "react";
import NavBar from "../../Shared/NavBar";
import HeroSection from "./HeroSection";
import OurTeam from "./OurTeam";
import Footer from "../../Shared/Footer";

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#00000F] via-[#0a1d3a] to-[#2a4b7c] text-lightText font-Rajdhani flex flex-col">
      <NavBar />
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 flex-grow">
        <HeroSection />
        <OurTeam />
      </div>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
