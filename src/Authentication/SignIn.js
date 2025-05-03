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
      typeSpeed: 30, // سرعة الكتابة
      backSpeed: 10, // سرعة الحذف
      backDelay: 1000,
      startDelay: 500,
      loop: true,
    };

    // Initiate Typed.js
    const typed = new Typed(typedRef.current, options);

    // Cleanup the Typed instance on component unmount
    return () => typed.destroy();
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* خلفية الفيديو */}
      <video
        src="/videos/background3.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        Your browser does not support the video tag.
      </video>

      {/* تراكب مظلل */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10" />

      {/* تقسيم المحتوى */}
      <div className="relative z-20 flex h-full">
        {/* النصف الأيسر: سكربت */}
        <div className="w-1/2 flex items-center justify-center p-8 text-white">
          <h1
            className="text-3xl md:text-4xl font-bold text-center"
            ref={typedRef}
          >
            .
          </h1>
        </div>

        {/* النصف الأيمن: نموذج تسجيل الدخول */}
        <div className="w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-[456px] bg-spaceMid bg-opacity-90 p-8 rounded-xl shadow-xl">
            <SignInForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
