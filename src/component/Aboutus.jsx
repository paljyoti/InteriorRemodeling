import React from "react";

function Aboutus() {
  return (
    <div className="relative w-full min-h-screen p-4 bg-black">
      <div className="flex flex-col lg:flex-row justify-evenly">
        <div className="w-full lg:w-96 mb-4 lg:mb-0">
          <img src="../../src/assets/room.jpg" alt="Room" className="w-full h-auto"/>
        </div>
        <div className="text-white w-full lg:w-1/2 flex flex-col space-y-8">
          <h2 className="text-xl lg:text-2xl">Vision & mission</h2>
          <h1 className="text-2xl lg:text-4xl">ELEVATING Your Space With Style and Function</h1>
          <p className="text-sm lg:text-base">
            LXRY is a design-driven company that is focused on creating
            beautiful spaces to match your lifestyle. Our company strives to
            provide high-end interior concepts and solutions by partnering with
            our curated collection of Italian cabinetry brands. All of our
            partners are carefully considered based on the quality of materials
            and their ability to customize their product lines to any space.
            From elegant modern kitchens, couture closets, and luxurious living
            areas –LXRY has everything you need to create a stylish and
            functional space.
          </p>
          <p className="text-sm lg:text-base">
            Our team of professional design consultants will collaborate with
            architects, interior designers, builders, and homeowners every step
            of the way to bring the vision of each custom creation to life. With
            LXRY, you can be sure that every detail will be taken into account
            from conception to installation.
          </p>
          <button className="p-4 hover:bg-red-500 bg-transparent border border-white rounded-md">
            Learn about us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
