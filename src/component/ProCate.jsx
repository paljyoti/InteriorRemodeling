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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-2/3">
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

        <div className="w-full md:w-1/3 text-center  md:text-left md:flex md:flex-col md:justify-center">
          <h1 className="text-3xl font-bold text-red-600 ">Project Categories</h1>
          <ul className="mt-4 space-y-2 text-lg">
            <li>Total Look</li>
            <li>Kitchens</li>
            <li>Closets</li>
            <li>Bath</li>
            <li>Living</li>
          </ul>
          <button className="mt-6 px-6 py-2 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition duration-300">
            View All
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProCate;
