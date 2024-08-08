import React from "react";

export default function Partens() {
  return (
    <div>
      <div className="relative w-screen h-screen overflow-hidden">
        <video
          className="absolute inset-0 object-cover w-full h-full"
          autoPlay
          muted
          loop
        >
          <source
            src="../../src/assets/2934978-uhd_3840_2160_24fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 flex items-center justify-center p-4  bg-black bg-opacity-50">
          <div className="text-white ml-20">
          <h2 className="text-xl font-semibold  text-red-500 sm:ml-2">Affiliations</h2>
            <h1 className="text-4xl sm:text-4xl font-bold mb-4">
              Our Partners
            </h1>
            <p className="text-lg sm:text-2xl mb-6 w-1/2">
              To provide our clients with the best Italian designs, we
              collaborate with renowned brands and proudly present their
              catalogues. Browse through the various collections and get
              inspired to create new fresh looks for your interiors.
            </p>
            <button className="relative text-white border border-white ml-10 w-80 py-2 px-4 rounded-lg mt-4 hover:bg-red-500 transition duration-300 overflow-hidden transform hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-2xl">
            <span className="absolute inset-0 border-white border transform scale-x-0 origin-right hover:scale-x-100 transition duration-300"></span>
            <span className="relative">Book an Appointment</span>
          </button>
            {/* <button className="relative text-white border border-white py-2 px-4 rounded-lg mt-4 hover:bg-red-500 transition duration-300 overflow-hidden transform hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-2xl">
              <span className="absolute inset-0 border-white border transform scale-x-0 origin-right hover:scale-x-100 transition duration-300"></span>
              <span className="relative">Learn More</span>
            </button> */}
          </div>
        </div>
      </div>
      {/* <div className="bg-black text-white p-8">
        <h6 className="text-sm font-semibold ml-4 text-red-500 sm:ml-20">Affiliations</h6>
        <h1 className="text-3xl font-bold mb-4 text-center sm:text-left sm:ml-20">Partners</h1>
        <div className="flex flex-col sm:flex-row mt-4 ml-4 sm:ml-20">
          <p className="mb-6 sm:w-1/2">
            To provide our clients with the best Italian designs, we collaborate
            with renowned brands and proudly present their catalogues. Browse
            through the various collections and get inspired to create new fresh
            looks for your interiors.
          </p>
          <button className="relative text-white border border-white ml-10 w-80 py-2 px-4 rounded-lg mt-4 hover:bg-red-500 transition duration-300 overflow-hidden transform hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-2xl">
            <span className="absolute inset-0 border-white border transform scale-x-0 origin-right hover:scale-x-100 transition duration-300"></span>
            <span className="relative">Learn More</span>
          </button>
        </div>
      </div> */}
    </div>
  );
}
