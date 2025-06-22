import React, { useState, useEffect, useRef } from "react";
import { FcUpload, FcStackOfPhotos, FcApproval } from "react-icons/fc";

const Counter = ({ target, startCounting }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return; // Don't start counting if not in view

    const duration = 4000; // Counter duration (4 seconds)
    const step = target / (duration / 10); // Calculate increment per 10 milliseconds

    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= target) {
          clearInterval(interval); // Stop counting after reaching target
          return target;
        }
        return prevCount + step;
      });
    }, 10); // Every 10 milliseconds

    return () => clearInterval(interval); // Cleanup timer on unmount
  }, [target, startCounting]);

  return (
    <p className="font-poppins text-[28px] font-bold leading-[24px] mt-5">
      {Math.floor(count)} {/* Use Math.floor to round the number */}
    </p>
  );
};

const Values = () => {
  const [valueItems] = useState([
    {
      icon: <FcUpload className="text-5xl mb-[16px]" />,
      title: "Number of articles",
      number: 251,
    },
    {
      icon: <FcStackOfPhotos className="text-5xl mb-[16px]" />,
      title: "Number of image processing",
      number: 2548,
    },
    {
      icon: <FcApproval className="text-5xl mb-[16px]" />,
      title: "Number of subscribers",
      number: 192,
    },
  ]);

  const [startCounting, setStartCounting] = useState(false);
  const valuesRef = useRef(null);

  // Use Intersection Observer to monitor the element
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true); // Start counting when the element appears
          observer.disconnect(); // Stop observing after the element has appeared
        }
      },
      { threshold: 0.5 } // Start counting when 50% of the element is visible
    );

    if (valuesRef.current) {
      observer.observe(valuesRef.current);
    }

    return () => {
      if (valuesRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div
      ref={valuesRef}
      data-aos="fade-up"
      className="w-full max-w-[1440px] py-[108px] px-4 sm:px-8 md:px-12 lg:px-16 mx-auto
                 flex flex-wrap justify-center items-center gap-[24px]"
    >
      {valueItems.map((item, index) => (
        <div
          key={index}
          // Responsive width classes
          className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-16px)] lg:w-[calc(33.33%-16px)]
                     min-w-[200px] h-auto p-[24px] flex flex-col items-center text-white
                     rounded-3xl text-center shadow-md shadow-neon hover:shadow-white
                     transition-transform duration-500 hover:-translate-y-2 border border-neon"
        >
          <div className="w-full flex justify-center items-center">
            {item.icon} {/* Display icon */}
          </div>
          <div className="w-full">
            <p className="font-poppins text-[20px] font-medium leading-[28px]">
              {item.title}
            </p>
            <Counter target={item.number} startCounting={startCounting} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Values;