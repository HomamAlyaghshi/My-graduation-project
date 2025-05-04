import React from "react";
import NavBar from "../../Shared/NavBar";
import HeroSection from "./HeroSection";
import AboutUsCard from "./AboutUsCard";
const AboutUsPage = () => {
  return (
    <div className="w-full h-full bg-spaceDark">
      <NavBar />
      <HeroSection />
      <AboutUsCard />
    </div>
  );
};

export default AboutUsPage;
