import React from "react";
import { Link } from "react-router-dom";

const SignInForm = () => {
  return (
    <form className="p-6  rounded-xl  text-white font-Rajdhani font-bold">
      {/* مقدمة الترحيب */}
      <p className="text-sm  mb-1 opacity-60">Login to your account</p>
      <h1 className="text-4xl   mb-1">Welcome Back !</h1>
      <p className="text-sm  mb-6 opacity-60">Enter your email and password</p>

      {/* حقل الإيميل */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm   mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full border text-black border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neon hover:shadow-xl shadow-lg shadow-neon hover:shadow-neon"
          placeholder="example@email.com"
        />
      </div>

      {/* حقل كلمة المرور */}
      <div className="mb-2">
        <label htmlFor="password" className="block text-sm mb-1">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neon hover:shadow-xl shadow-lg shadow-neon hover:shadow-neon"
          placeholder="••••••••"
        />
      </div>

      {/* رابط نسيان كلمة المرور */}
      <div className="text-right mb-6">
        <button className="text-sm text-blue-600 hover:underline font-medium hover:text-star">
          Forgot password?
        </button>
      </div>

      {/* زر تسجيل الدخول */}
      <Link to="/homepage">
        <button
          type="submit"
          className="w-full bg-neon py-2 px-4 rounded-2xl hover:text-star hover:scale-95 duration-500 delay-100 hover:shadow hover:shadow-black  transition-all"
        >
          Sign In
        </button>
      </Link>
    </form>
  );
};

export default SignInForm;
