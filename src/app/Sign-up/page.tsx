import React from "react";

export default function Signup() {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-md bg-white rounded-lg p-6">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img
            src="/logo.png" /* Replace with your logo URL */
            alt="Nike Logo"
            className="w-12 h-8"
          />
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-bold text-center mb-2">Become a Member</h1>
        <p className="text-[15px] text-center text-[#8D8D8D] mb-6">
          Create your Nike Member profile and get first <br /> access to the very best
          of Nike products, <br /> inspiration, and community.
        </p>

        {/* Sign Up Form */}
        <form>
          {/* Email Input */}
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>

          {/* First Name */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="First Name"
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>

          {/* Last Name */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Last Name"
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>

          {/* Date of Birth */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Date of Birth"
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>

          {/* Birthday Reward Message */}
          <p className="text-xs text-[#8D8D8D] mb-4">
            Get a Nike Member Reward every year on your Birthday.
          </p>

          {/* Country Selection */}
          <div className="mb-4">
            <select
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-600"
            >
              <option value="">Select a Country</option>
              <option value="us">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="in">India</option>
            </select>
          </div>

          {/* Gender Selection */}
          <div className="flex items-center justify-between mb-4">
            <button
              type="button"
              className="w-1/2 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-[#8D8D8D] "
            >
              Male
            </button>
            <button
              type="button"
              className="w-1/2 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-[#8D8D8D]  ml-2"
            >
              Female
            </button>
          </div>

          {/* Email Updates Checkbox */}
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              className="h-4 w-4 text-gray-600 focus:ring-gray-600 mb-4 border-gray-300 rounded"
            />
            <label className="ml-2 text-sm text-center text-[#8D8D8D]">
              Sign up for emails to get updates from Nike on products, offers,
              and your Member benefits.
            </label> 
          </div>

          {/* Privacy Policy */}
          <p className="text-[14px] text-[#8D8D8D] mb-6 text-center">
            By creating an account, you agree to Nike&#39;s{" "}
            <a href="#" className=" text-[#8D8D8D] underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className=" text-[#8D8D8D] underline">
              Terms of Use
            </a>
            .
          </p>

          {/* Join Us Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 "
          >
            Join Us
          </button>
        </form>

        {/* Already a Member */}
        <p className="text-center text-sm text-[#8D8D8D] mt-6">
          Already a member?{" "}
          <a href="#" className="text-[#8D8D8D] font-semibold underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}


