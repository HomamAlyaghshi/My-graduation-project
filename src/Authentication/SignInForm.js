import React from "react";
import { EyeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaGoogle } from "react-icons/fa";

const SignInForm = () => {
  return (
    <form className="p-4 bg-spaceMid rounded-lg">
      <h1 className="font-poppins text-[32px] font-medium mb-4 text-left text-lightText ">
        Sign In
      </h1>
      <div className="flex items-center mb-4">
        <p className="font-inter text-base text-lightText text-[12px]">
          Don’t have an account yet?
        </p>
        <Link to="/signup">
          <button className="font-inter transition-all delay-100 hover:scale-110 text-star text-base font-semibold text-[12px] ml-1">
            Sign Up
          </button>
        </Link>
      </div>

      <div className="mb-4 text-lightText rounded-lg">
        <label className="block text-[13px] mb-1 ">
          Your username or email address
        </label>
        <input className="mb-4 w-full border-b border-hr text-black p-1 text-[12px]" />
        <div className="mb-4 rounded-lg">
          <div className="flex items-center justify-between">
            <label className="mr-2 text-[13px] mb-1">Password</label>
            <EyeIcon className="w-5 h-5 text-lightText cursor-pointer" />
          </div>
          <input
            className="w-full border-b border-hr p-1 text-black text-[13px]"
            type="password"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="checkbox"
              className="w-[24px] h-[24px] mr-[12px] text-black"
            />
            <p className="font-inter text-base text-[12px]">Remember me</p>
          </div>
          <button className="text-subText font-bold text-[12px]">
            Forget password?
          </button>
        </div>
      </div>
      <Link to="/homepage">
        <button className="w-full h-[48px] my-2 text-white bg-neon rounded-lg hover:scale-95 transition-all duration-200 delay-200 hover:text-star flex items-center justify-center">
          Sign In
        </button>
      </Link>
      <hr className="my-2 mt-6"></hr>
      <span className="text-white">Or sign in with :</span>
      <div className="my-1 text-black  flex justify-center gap-6 text-2xl">
        <FaFacebookF className="cursor-pointer hover:text-sky-900 transition" />
        <FaInstagram className="cursor-pointer hover:text-pink-500 transition" />
        <FaTwitter className="cursor-pointer hover:text-sky-500 transition" />
        <FaGoogle className="cursor-pointer hover:text-red-500 transition" />
      </div>
    </form>
  );
};

export default SignInForm;
