import React, { lazy, Suspense } from "react";
import { useInView } from "react-intersection-observer";

// Non-lazy imports
import NavBar from "../../Shared/NavBar";
import Values from "../../Shared/values";
import Newsletter from "../../Shared/Newsletter";
import Footer from "../../Shared/Footer";

// Lazy imports
const Slider = lazy(() => import("./Slider"));
const Banner = lazy(() => import("./Banner"));
const BannerGrid = lazy(() => import("./BannerGrid"));
const BlogSectaion = lazy(() => import("./BlogSectaion"));

const LazySection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref}>
      {inView ? (
        <Suspense
          fallback={
            <div className="text-white text-center py-10">Loading...</div>
          }
        >
          {children}
        </Suspense>
      ) : null}
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="w-full h-full bg-gradient-to-b from-[#00000F] via-[#0a1d3a] to-[#3a5f91]">
      <NavBar />

      <LazySection>
        <Slider />
      </LazySection>

      <LazySection>
        <Banner />
      </LazySection>

      <Values />

      <LazySection>
        <BannerGrid />
      </LazySection>

      <LazySection>
        <BlogSectaion />
      </LazySection>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default HomePage;
