import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import SignInForm from "./SignInForm";

const SignIn = () => {
  const typedRef = useRef(null);

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
    };

    const typed = new Typed(typedRef.current, options);

    return () => typed.destroy();
  }, []);

  return (
    <div className="flex h-screen w-full">
      {/* النصف الأيسر: فيديو مع نص متحرك */}
      <div className="relative w-1/2 h-full">
        <video
          src="/videos/background.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center p-8 text-white">
          <h1
            className="text-3xl md:text-4xl font-bold font-Orbitron text-center"
            ref={typedRef}
          >
            .
          </h1>
        </div>
      </div>

      {/* النصف الأيمن: فورم تسجيل الدخول */}
      <div className="w-1/2 flex items-center justify-center p-8 bg-gradient-to-b from-black via-[#0a1d3a] to-[#3a5f91]  ">
        <div className="w-full max-w-[456px] p-8 rounded-xl   ">
          <SignInForm />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
