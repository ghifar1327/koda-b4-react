import React from "react";
import { ButtonFaceGoo, ButtonRegister } from "../components/Buttons";

export const FormRegister = () => {
  return (
    <div className="flex  justify-center items-center min-h-screen bg-gray-50 p-6">
      <div className="flex w-full max-w-5xl bg-white shadow-lg overflow-hidden">
        <div className="w-1/3 hidden md:block">
          <img
            src="/Rectangle 289.png"
            alt="Register illustration"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Form */}
        <div className=" w-full md:w-3/4 p-10">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <img src="/Frame.png" alt="Logo frame" className="h-8" />
            <img src="/Coffee Shop.png" alt="Logo text" className="h-6" />
          </div>

          {/* Heading */}
          <h2 className="text-2xl font-bold text-[#8E6447] mb-4">Register</h2>
          <p className="text-[#4F5665] mb-4">Fill out the form correctly</p>

          {/* Form */}
          <form className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <div className="flex items-center border border-[#DEDEDE] rounded-lg px-3 py-2  ">
                <img src="/Profile.png" alt="Profile" className="h-5 mr-2" />
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="flex-1 outline-none text-gray-700"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <div className="flex items-center border border-[#DEDEDE] rounded-lg px-3 py-2  ">
                <img src="/mail.png" alt="Mail" className="h-5 mr-2" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 outline-none text-gray-700"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="flex items-center border border-[#DEDEDE] rounded-lg px-3 py-2  ">
                <img src="/Password.png" alt="Password" className="h-5 mr-2" />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="flex-1 outline-none text-gray-700"
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <div className="flex items-center border border-[#DEDEDE] rounded-lg px-3 py-2  ">
                <img src="/Password.png" alt="Password" className="h-5 mr-2" />
                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="flex-1 outline-none text-gray-700"
                />
              </div>
            </div>
            <ButtonRegister></ButtonRegister>
          </form>

          {/* Already have account */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Have an account?{" "}
            <span className="text-[#FF8906] font-semibold cursor-pointer hover:underline">
              Login
            </span>
          </p>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="mx-10 text-gray-500">Or</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>
          <ButtonFaceGoo />
        </div>
      </div>
    </div>
  );
};
