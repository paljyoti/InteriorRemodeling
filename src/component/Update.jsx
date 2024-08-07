import React from "react";

function Update() {
  return (
    <div className="bg-black text-white p-6 sm:p-8">
      <div className="max-w-4xl mx-auto sm:ml-10 md:ml-16 lg:ml-20">
        <div className="text-left mb-6 sm:mb-8">
          <h6 className="text-lg font-semibold text-red-500 mb-2">Updates</h6>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            STAY INFORMED ON EVENTS & ANNOUNCEMENTS
          </h1>
          <p className="text-base sm:text-lg mb-6">
            The latest designs and trends in luxury custom cabinets are just a
            click away. Sign up for email updates from LXRY to get the latest news
            on our events, trends, and exclusive promotions.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Enter your name"
            className="p-3 border border-white rounded-lg bg-red-600 text-white placeholder-gray-400 w-full sm:w-1/2"
          />
          <input
            type="text"
            placeholder="Your email"
            className="p-3 border border-white rounded-lg bg-red-600 text-white placeholder-gray-400 w-full sm:w-1/2"
          />
        </div>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Additional information"
            className="p-3 w-full border border-white border-red-500 rounded-lg bg-red-600 text-white placeholder-gray-400"
          />
        </div>
        <p className="text-sm text-gray-400">
          By clicking Sign Up you're confirming that you agree with our Terms and Conditions.
        </p>
      </div>
    </div>
  );
}

export default Update;
