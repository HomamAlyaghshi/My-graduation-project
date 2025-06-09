import React from "react";
import NavBar from "../../Shared/NavBar";
import HeroSection from "./HeroSection";
import AboutUsCard from "./AboutUsCard";
import Footer from "../../Shared/Footer";
const AboutUsPage = () => {
  return (
    <div className="w-full h-full bg-gradient-to-b from-[#00000F] via-[#0a1d3a] to-[#3a5f91]  ">
      <NavBar />
      <HeroSection />
      <AboutUsCard />
      <Footer />
    </div>
  );
};

export default AboutUsPage;
