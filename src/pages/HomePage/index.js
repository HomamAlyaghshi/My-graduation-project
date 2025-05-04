import React from "react";
import NavBar from "../../Shared/NavBar";
import BannerGrid from "./BannerGrid";
import Values from "../../Shared/values";
import Banner from "./Banner";
import BlogSectaion from "./BlogSectaion";
import Newsletter from "../../Shared/Newsletter";
import Slider from "./Slider";
import Footer from "../../Shared/Footer";
const HomePage = () => {
  return (
    <div className="w-full h-full bg-gradient-to-b from-[#00000F] via-[#0a1d3a] to-[#3a5f91]  ">
      <NavBar />
      <Slider />
      <BannerGrid />
      <Values />
      <Banner />
      <BlogSectaion />
      <Newsletter />
      <Footer />
    </div>
  );
};
export default HomePage;
