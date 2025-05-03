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
    <div className="w-full h-full bg-spaceDark  ">
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
