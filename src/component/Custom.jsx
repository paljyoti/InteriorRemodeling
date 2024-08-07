import React from "react";

function Custom() {
  return (
    <div className="bg-red-600 text-white p-8">
      <div className="cus mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
        <h6 className="text-lg font-semibold">See us in person</h6>
        <h1 className="text-3xl font-bold my-4">
          Experience custom living
        </h1>
        <p className="text-base mb-6 max-w-md">
          For many, seeing is believing, but there's nothing quite like feeling.
          Visit us at our showroom in upper Georgetown to get the full experience.
        </p>
        <button className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300">
          Book an Appointment
        </button>
      </div>
    </div>
  );
}

export default Custom;
