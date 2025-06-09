import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Button2 from "./../Components/Button2";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    console.log("Attempting to sign in with:", { email, password });

    setTimeout(() => {
      console.log("Login successful (simulated)!");
      navigate("/homepage");
    }, 1000);
  };

  return (
    <form
      className="p-6 sm:p-8 max-w-md w-full mx-auto rounded-xl text-white font-Rajdhani" // Responsive padding and width
      onSubmit={handleSubmit}
    >
      {/* Welcome Introduction */}
      <p className="text-sm mb-1 opacity-60 text-center sm:text-left">
        Login to your account
      </p>
      <h1 className="text-3xl sm:text-4xl font-Orbitron font-extrabold mb-1 text-center sm:text-left">
        Welcome Back!
      </h1>
      <p className="text-sm mb-6 opacity-60 text-center sm:text-left">
        Enter your email and password
      </p>

      {error && (
        <p className="text-red-400 text-sm mb-4 bg-red-900 bg-opacity-30 p-2 rounded-md border border-red-700 text-center">
          {error}
        </p>
      )}

      {/* Email Field */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-semibold mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full bg-gray-800 bg-opacity-70 text-gray-200 border border-gray-600 rounded-lg px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-neon focus:border-neon transition-all duration-300
                     placeholder-gray-500 hover:shadow-lg hover:shadow-neon/30"
          placeholder="example@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
        />
      </div>

      {/* Password Field */}
      <div className="mb-2 relative">
        <label htmlFor="password" className="block text-sm font-semibold mb-1">
          Password
        </label>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          className="w-full bg-gray-800 bg-opacity-70 text-gray-200 border border-gray-600 rounded-lg px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-neon focus:border-neon transition-all duration-300
                     placeholder-gray-500 hover:shadow-lg hover:shadow-neon/30 pr-10"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-0 top-6 pr-3 flex items-center text-gray-400 hover:text-neon transition-colors"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
        </button>
      </div>

      {/* Forgot Password Link */}
      <div className="text-right mb-6">
        <Link to="/forgot-password">
          <button
            type="button"
            className="text-sm text-blue-400 hover:underline font-medium hover:text-neon transition-colors duration-200"
          >
            Forgot password?
          </button>
        </Link>
      </div>

      {/* Sign In Button */}
      <Button2
        type="submit"
        className="w-full bg-neon text-gray-900 rounded-xl font-bold text-lg
                   hover:bg-opacity-80 hover:scale-[0.98] duration-300 transition-all
                   focus:outline-none focus:ring-2 focus:ring-neon focus:ring-offset-2 focus:ring-offset-black
                   shadow-lg hover:shadow-neon/60"
      >
        Sign In
      </Button2>

      {/* Sign Up Link */}
      <p className="text-center text-sm text-gray-400 mt-6">
        Don't have an account?{" "}
        <Link
          to="/signup"
          className="text-neon hover:underline font-semibold transition-colors duration-200"
        >
          Sign Up
        </Link>
      </p>
    </form>
  );
};

export default SignInForm;
