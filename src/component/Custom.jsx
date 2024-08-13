import React from "react";
import imageOne from "../../src/assets/pexels-fotios-photos-1444424.jpg";
import { useNavigate } from "react-router-dom";

function Custom() {

  const navigate =useNavigate();

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
            For many, seeing is believing, but there's nothing quite like
            feeling. Visit us at our showroom in upper Georgetown to get the
            full experience.
          </p>
          <button onClick={()=>navigate('/bookaAppointment')} className="relative text-white border border-white ml-10 w-80 py-2 px-4 rounded-lg mt-4 hover:bg-red-500 transition duration-300 overflow-hidden transform hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-2xl">
            <span className="absolute inset-0 border-white border transform scale-x-0 origin-right hover:scale-x-100 transition duration-300"></span>
            <span className="relative">Book an Appointment</span>
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative flex-1">
        <img
          src={imageOne} // Ensure this path is correct
          alt="Showroom"
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-3 hover:shadow-2xl"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 ease-in-out hover:opacity-0" />
      </div>
    </div>
  );
}

export default Custom;
