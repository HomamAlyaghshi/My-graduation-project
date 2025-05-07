import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const videos = [
    {
      src: "/videos/cover1.MP4",
      alt: "Video 1",
      title: "Earth in Crisis: Unprecedented Climate Changes Unfold",
    },
    {
      src: "/videos/cover2.MP4",
      alt: "Video 2",
      title: "Space Mystery: Unknown Objects Orbiting Planets",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000); // 10 ثواني
    return () => clearInterval(interval);
  });

  return (
    <div className="Slider overflow-hidden w-full  h-full ">
      {/* Slider Wrapper */}
      <div className="relative max-w-[90%] md:max-w-[85%] mx-auto h-[536px] overflow-hidden shadow-neon shadow-xl rounded-md ">
        {/* Slides */}
        <div
          className="flex w-full h-full transition-transform duration-500"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {videos.map((video, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full h-full relative  flex items-center justify-center"
            >
              {/* Overlay Title */}
              <div className="absolute z-10 top-0 left-0 w-full h-full flex items-end pb-12 justify-center  px-4 text-center">
                <h2 className="text-white text-[20px] md:text-[36px] font-bold leading-tight shadow-md">
                  {video.title}
                </h2>
              </div>

              {/* Video */}
              <video
                src={video.src}
                muted
                autoPlay
                loop
                playsInline
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-neon p-2 rounded-full"
        >
          <ArrowLeftIcon className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-neon p-2 rounded-full"
        >
          <ArrowRightIcon className="w-6 h-6" />
        </button>

        {/* Indicators */}
        <div className="absolute flex gap-2 bottom-4 left-1/2 transform -translate-x-1/2">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`rounded-full bg-white hover:bg-neon ${
                index === activeIndex ? "w-8 h-2" : "w-2 h-2"
              }`}
            />
          ))}
        </div>
      </div>

      {/* النص أسفل الفيديو */}
      <div className="w-full flex flex-col md:flex-row justify-center items-center mt-[16px] sm:my-[72px] mb-[32px] px-4 text-white text-center md:text-left">
        <div className="flex-1 max-w-[643px] font-poppins text-[28px] md:text-[58px] font-medium leading-[38px] md:leading-[76px] tracking-[-2px]">
          Exploring the Cosmos/
          <br /> Unlocking the Universe.
        </div>
        <div className="flex-1 max-w-[453px] mt-4 md:mt-0 md:ml-6 font-inter text-[12px] md:text-[16px] font-normal leading-[20px] md:leading-[26px]">
          <strong className="text-star">Homam</strong> is a platform dedicated
          to space exploration, celestial phenomena, and inspiring curiosity
          about the universe.
        </div>
      </div>
    </div>
  );
};

export default Slider;
