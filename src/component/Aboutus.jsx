import React from "react";
import '../css/about.css';

function Aboutus() {
  return (
    <div className="relative w-full min-h-screen p-4 bg-black">
      <div className="flex flex-col lg:flex-row justify-evenly">
        <div className="w-full lg:w-96 mb-4 lg:mb-0 perspective-1000">
          <div className="relative group">
            <img
              src="../../src/assets/room.jpg"
              alt="Room"
              className="w-full h-auto mt-10 transition-transform duration-500 transform group-hover:scale-110 group-hover:rotate-3d"
            />
          </div>
        </div>
        <div className="text-white w-full lg:w-1/2 flex flex-col space-y-8">
          <h2 className="text-xl lg:text-2xl text-red-500 mt-7">
            Vision & Mission
          </h2>
          <h1 className="text-2xl lg:text-4xl">
            ELEVATING Your Space With Style and Function
          </h1>
          <p className="text-sm lg:text-base">
            LXRY is a design-driven company that is focused on creating
            beautiful spaces to match your lifestyle. Our company strives to
            provide high-end interior concepts and solutions by partnering with
            our curated collection of Italian cabinetry brands. All of our
            partners are carefully considered based on the quality of materials
            and their ability to customize their product lines to any space.
            From elegant modern kitchens, couture closets, and luxurious living
            areas – LXRY has everything you need to create a stylish and
            functional space.
          </p>
          <p className="text-sm lg:text-base">
            Our team of professional design consultants will collaborate with
            architects, interior designers, builders, and homeowners every step
            of the way to bring the vision of each custom creation to life. With
            LXRY, you can be sure that every detail will be taken into account
            from conception to installation.
          </p>
          <button className="relative h-full w-full text-white border border-white w-80 py-2 px-4 rounded-lg mt-4 hover:bg-red-500 transition duration-300 overflow-hidden transform hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-2xl">
            <span className="absolute border-white border transform scale-x-0 origin-right hover:scale-x-100 transition duration-300"></span>
            <span>Learn about us</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
