import React from "react";
import { EyeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  return (
    <form className="text-black p-4">
      <div className="mb-8">
        {/* Title */}
        <h1 className="font-poppins text-[32px] font-medium leading-[36px] mb-4 text-left">
          Sign up
        </h1>
        <div className="flex items-center mb-4">
          <p className="font-inter text-base text-subText">
            Already have an account?
          </p>
          <Link to="/">
            <button className="font-inter text-star text-base font-semibold ml-1">
              Sign in
            </button>
          </Link>
        </div>
      </div>

      <div className="mb-8 text-subText">
        <label className="block mb-1">Your name</label>
        <input className="w-full mb-4 border-b border-hr p-2" />

        <label className="block mb-1">Username</label>
        <input className="w-full mb-4 border-b border-hr p-2" />

        <label className="block mb-1">Email address</label>
        <input className="w-full mb-4 border-b border-hr p-2" />

        <div className="mb-4">
          <div className="flex items-center justify-between mb-1">
            <label className="mr-2">Password</label>
            <EyeIcon className="w-5 h-5 text-subText cursor-pointer" />
          </div>
          <input className="w-full border-b border-hr p-2" type="password" />
        </div>

        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="checkbox"
            className="w-[24px] h-[24px] mr-2"
          />
          <p className="font-inter text-[12px] md:text-base whitespace-nowrap">
            I agree with <strong className="text-star">Privacy Policy</strong>{" "}
            and <strong className="text-star">Terms</strong> of Use
          </p>
        </div>
      </div>

      <Link to="/homepage">
        <button className="w-full h-[48px] my-2 text-white bg-neon rounded-lg hover:scale-95 transition-all duration-200 delay-200 hover:text-star flex items-center justify-center">
          Sign Up
        </button>
      </Link>
    </form>
  );
};

export default SignUpForm;
