import React from "react";
import Image from 'next/image'; // Correct import

export default function Signin() {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-md bg-white p-6">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Image
            src="/logo.png" /* Replace with your logo URL */
            alt="Nike Logo"
            loading="lazy"
            className="w-12 h-8"
          />
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-bold text-center mb-6">
          YOUR ACCOUNT <br /> FOR EVERYTHING <br />NIKE
        </h1>

        {/* Sign In Form */}
        <form>
          {/* Email Input */}
          <div className="mb-4 text-[#E5E5E5]">
            <input
              type="email"
              placeholder="Email address"
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full mt-1 px-4 py-2 border border-[#8D8D8D] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Keep Me Signed In and Forgotten Password */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
              />
              <label className="ml-2 text-sm text-[#8D8D8D]">
                Keep me signed in
              </label>
            </div>
            <a href="#" className="text-[#8D8D8D] text-sm">
              Forgotten Password?
            </a>
          </div>

          {/* Privacy Policy */}
          <p className="text-[15px] text-center leading-4 text-[#8D8D8D] mb-6">
            By logging in, you agree to Nike&#39;s{" "}
            <span className="underline">Privacy Policy</span> and <br />
            <span className="underline">Terms of Use</span>
          </p>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-black text-white text-[12px] leading-[17px] py-2 px-4  transition"
          >
            SIGN IN
          </button>
        </form>

        {/* Join Us */}
        <p className="text-center text-sm text-[#8D8D8D] mt-6">
          Not a member?{" "}
          <a href="/Sign-up" className="text-black font-normal leading-[14px] underline">
            Join Us
          </a>
        </p>
      </div>
    </div>
  );
}
