import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import SignInForm from "./SignInForm";

const SignIn = () => {
  const typedRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Discover the secrets of the universe through spectral analysis.",
        "Try it now Free.",
      ],
      typeSpeed: 30,
      backSpeed: 10,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    };

    const typed = new Typed(typedRef.current, options);

    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.warn(
          "Video autoplay blocked, user interaction may be needed.",
          error
        );
      });
    }

    return () => typed.destroy();
  }, []);

  return (
    <div className="flex flex-col md:flex-row w-full h-screen overflow-hidden">
      {/* Left Half: Video Background with Animated Text - Hidden on mobile */}
      <div className="hidden md:block relative w-1/2 h-full overflow-hidden">
        <video
          ref={videoRef}
          src="/videos/background.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6 text-white text-center">
          <span
            className="text-3xl lg:text-4xl font-bold font-Orbitron leading-tight"
            ref={typedRef}
          ></span>
        </div>
      </div>

      {/* Right Half: Sign-In Form - Full screen on mobile */}
      <div
        className="w-full h-full flex items-center justify-center p-4 sm:p-6 bg-gradient-to-b from-black via-[#0a1d3a] to-[#3a5f91] 
                   md:w-1/2 md:p-8"
      >
        <div className="w-full max-w-md p-4 sm:p-6 rounded-xl bg-white bg-opacity-5 shadow-2xl backdrop-blur-sm">
          <SignInForm />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
