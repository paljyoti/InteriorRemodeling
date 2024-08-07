import React from "react";

function Custom() {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Text Content */}
      <div className="bg-black text-white p-6 md:p-8 flex-1">
        <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8 ml-10">
          <h6 className="text-lg text-red-500 font-semibold mb-2">
            See us in person
          </h6>
          <h1 className="text-2xl sm:text-3xl font-bold my-4">
            Experience custom living
          </h1>
          <p className="text-base mb-6 max-w-md">
            For many, seeing is believing, but there's nothing quite like feeling.
            Visit us at our showroom in upper Georgetown to get the full experience.
          </p>
          {/* <button className="bg-black text-white border-2 border-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300">
            Book an Appointment
          </button> */}
          <button className="w-full sm:w-1/2 md:w-3/4 lg:w-1/2 mt-6 px-6 py-2 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition duration-300">
          Book an Appointment
          </button>
        </div>
      </div>
      
      {/* Image Section */}
      <div className="relative flex-1">
        <img
          src="../../src/assets/pexels-fotios-photos-1444424.jpg" // Ensure this path is correct
          alt="Showroom"
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 ease-in-out hover:opacity-0" />
      </div>
    </div>
  );
}

export default Custom;
