import React from "react";
import SignUpForm from "./SignUpForm";

const SignIn = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold text-center">
            Discover the secrets of the universe through <br /> spectral
            analysis.
          </h1>
        </div>

        {/* النصف الأيمن: نموذج تسجيل الدخول */}
        <div className="w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-[456px] bg-spaceMid bg-opacity-90 p-8 rounded-xl shadow-xl">
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
