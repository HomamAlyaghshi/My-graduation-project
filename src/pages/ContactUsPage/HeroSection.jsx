import React from 'react';

const HeroSection = () => {
  return (
    <div
      data-aos="fade-right"
      className="flex justify-center items-center text-lightText text-center font-Rajdhani py-12 md:py-20 " // Added bg-spaceDark for thematic consistency and responsive padding
    >
      <div className="grid gap-6 sm:gap-8 md:gap-10 max-w-2xl px-4 sm:px-6"> {/* Adjusted gap and added horizontal padding */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-Orbitron text-lightText leading-tight"> {/* Changed to Orbitron, responsive size, and lightText */}
          Get in Touch
        </h2>
        <p className="text-base sm:text-lg text-lightText leading-relaxed"> {/* Responsive text size and lightText */}
          Do you have any questions, suggestions, or need assistance? <br />
          We're here to help you.
        </p>
        <p className="text-base sm:text-lg text-subText leading-relaxed"> {/* subText for this paragraph */}
          You can reach us at any time &mdash; just fill out the form or send us an email.
        </p>
        <span className="bg-space-text bg-clip-text text-transparent py-2 text-xl sm:text-2xl md:text-3xl font-bold"> {/* Responsive text size, font-bold for impact */}
          We look forward to hearing from you!
        </span>
      </div>
    </div>
  );
};

export default HeroSection;