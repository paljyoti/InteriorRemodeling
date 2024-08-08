import React, { useState } from "react";

function ProCate() {
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredImage(index);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  const images = [
    {
      defaultSrc: "../../src/assets/pexels-dropshado-2251247.jpg",
      hoverSrc: "../../src/assets/pexels-emrecan-2079246.jpg",
    },
    {
      defaultSrc: "../../src/assets/pexels-fotios-photos-1444424.jpg",
      hoverSrc: "../../src/assets/pexels-heyho-6394514.jpg",
    },
    {
      defaultSrc: "../../src/assets/pexels-hristo-sahatchiev-273072-821357.jpg",
      hoverSrc: "../../src/assets/pexels-pixabay-276528.jpg",
    },
    {
      defaultSrc: "../../src/assets/pexels-pixabay-276651.jpg",
      hoverSrc: "../../src/assets/pexels-solliefoto-312029.jpg",
    },
  ];

  return (
    <div className="bg-black text-white p-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full md:w-2/3">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={hoveredImage === index ? image.hoverSrc : image.defaultSrc}
                alt=""
                className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div class="h-96 mt-24 border-l-2 border-gray-500"></div>
        <div className="w-full md:w-1/3 text-center md:text-left md:flex md:flex-col md:justify-center">
          <h1 className="text-3xl font-bold text-red-600">Project Categories</h1>
          <ul className="mt-4 space-y-4 text-lg">
            <li>Total Look</li>
            <li>Kitchens</li>
            <li>Closets</li>
            <li>Bath</li>
            <li>Living</li>
          </ul>
          <button className="relative text-white border border-white ml-10 w-80 py-2 px-4 rounded-lg mt-4 hover:bg-red-500 transition duration-300 overflow-hidden transform hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-2xl">
  <span className="absolute  border-white border transform scale-x-0 origin-right hover:scale-x-100 transition duration-300"></span>
  <span className="relative">  View All</span>
</button>
          {/* <button className="w-full sm:w-1/2 md:w-3/4 lg:w-1/2 mt-6 px-6 py-2 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition duration-300">
            View All
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default ProCate;
