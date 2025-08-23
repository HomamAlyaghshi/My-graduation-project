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
  }, []);

  return (
    <div className="Slider w-full h-screen overflow-hidden relative">
      {/* Slider Wrapper */}
      <div
        className="relative w-full h-full overflow-hidden"
      >
        {/* Slides */}
        {videos.map((video, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full flex items-center justify-center transition-all duration-700 ease-in-out ${
              index === activeIndex
                ? "opacity-100 scale-100 z-10"
                : "opacity-0 scale-95 z-0"
            }`}
          >
            {/* Overlay Title */}
            <div className="absolute z-10 top-0 left-0 w-full h-full flex items-end pb-12 justify-center px-4 text-center">
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
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-neon p-2 rounded-full z-20"
        >
          <ArrowLeftIcon className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-neon p-2 rounded-full z-20"
        >
          <ArrowRightIcon className="w-6 h-6" />
        </button>

        {/* Indicators */}
        <div className="absolute flex gap-2 bottom-4 left-1/2 transform -translate-x-1/2 z-20">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`rounded-full bg-white hover:bg-neon transition-all duration-300 ${
                index === activeIndex ? "w-8 h-2" : "w-2 h-2"
              }`}
            />
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default Slider;
