import React, { lazy, Suspense } from "react";
import { useInView } from "react-intersection-observer";

// Lazy imports
const NavBar = lazy(() => import("../../Shared/NavBar"));
const Slider = lazy(() => import("./Slider"));
const Banner = lazy(() => import("./Banner"));
const Values = lazy(() => import("../../Shared/values"));
const BannerGrid = lazy(() => import("./BannerGrid"));
const BlogSectaion = lazy(() => import("./BlogSectaion"));
const Newsletter = lazy(() => import("../../Shared/Newsletter"));
const Footer = lazy(() => import("../../Shared/Footer"));

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
      <LazySection>
        <NavBar />
      </LazySection>

      <LazySection>
        <Slider />
      </LazySection>

      <LazySection>
        <Banner />
      </LazySection>

      <LazySection>
        <Values />
      </LazySection>

      <LazySection>
        <BannerGrid />
      </LazySection>

      <LazySection>
        <BlogSectaion />
      </LazySection>

      <LazySection>
        <Newsletter />
      </LazySection>

      <LazySection>
        <Footer />
      </LazySection>
    </div>
  );
};

export default HomePage;
