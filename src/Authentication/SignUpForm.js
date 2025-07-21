import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Button2 from "./../Components/Button2";
import { register } from "../api";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!name || !username || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    if (!agree) {
      setError("Please agree to the Privacy Policy and Terms of Use.");
      return;
    }

    try {
      await register({ email, password });
      alert("Registration successful! Please log in.");
      navigate("/login");
    } catch (err) {
      const errorMessage =
        err.response?.data?.message ||
        "Registration failed. Please check your details.";
      setError(errorMessage);
    }
  };

  return (
    <form
      className="p-6 sm:p-8 max-w-md w-full mx-auto rounded-xl text-white font-Rajdhani"
      onSubmit={handleSubmit}
    >
      {/* Welcome Introduction */}
      <p className="text-sm mb-1 opacity-60 text-center sm:text-left">
        Create a New Account
      </p>
      <h1 className="text-3xl sm:text-4xl font-Orbitron font-extrabold mb-1 text-center sm:text-left">
        Sign Up Now!
      </h1>
      <p className="text-sm mb-6 opacity-60 text-center sm:text-left">
        Enter your details to create an account
      </p>

      {error && (
        <p className="text-red-400 text-sm mb-4 bg-red-900 bg-opacity-30 p-2 rounded-md border border-red-700 text-center">
          {error}
        </p>
      )}

      {/* Name Field */}
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-semibold mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full bg-gray-800 bg-opacity-70 text-gray-200 border border-gray-600 rounded-lg px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-neon focus:border-neon transition-all duration-300
                     placeholder-gray-500 hover:shadow-lg hover:shadow-neon/30"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      {/* Username Field */}
      <div className="mb-4">
        <label htmlFor="username" className="block text-sm font-semibold mb-1">
          Username
        </label>
        <input
          type="text"
          id="username"
          className="w-full bg-gray-800 bg-opacity-70 text-gray-200 border border-gray-600 rounded-lg px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-neon focus:border-neon transition-all duration-300
                     placeholder-gray-500 hover:shadow-lg hover:shadow-neon/30"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>

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
          autoComplete="new-password"
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

      {/* Checkbox for Terms */}
      <div className="flex items-center mb-6">
        <input
          type="checkbox"
          id="checkbox"
          className="w-[24px] h-[24px] mr-2"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
        />
        <p className="font-inter text-[12px] md:text-base whitespace-nowrap">
          I agree to the <strong className="text-neon">Privacy Policy</strong>{" "}
          and
          <strong className="text-neon"> Terms of Use</strong>
        </p>
      </div>

      {/* Sign Up Button */}
      <Button2
        type="submit"
        className="w-full bg-neon text-gray-900 rounded-xl font-bold text-lg
                   hover:bg-opacity-80 hover:scale-[0.98] duration-300 transition-all
                   focus:outline-none focus:ring-2 focus:ring-neon focus:ring-offset-2 focus:ring-offset-black
                   shadow-lg hover:shadow-neon/60"
      >
        Create Account
      </Button2>

      {/* Sign In Link */}
      <p className="text-center text-sm text-gray-400 mt-6">
        Already have an account?{" "}
        <Link
          to="/"
          className="text-neon hover:underline font-semibold transition-colors duration-200"
        >
          Sign In
        </Link>
      </p>
    </form>
  );
};

export default SignUpForm;
