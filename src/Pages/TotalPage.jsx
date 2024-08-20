import React, { useState } from "react";
import Navbar from "../component/Navbar";
import imageTotal from "../../src/assets/pexels-wdnet-94865.jpg";
import Footer from "../component/Footer";
import imageOne from "../../src/assets/pexels-dropshado-2251247.jpg";
import imageOneHover from "../../src/assets/pexels-emrecan-2079246.jpg";
import imageTwo from "../../src/assets/pexels-fotios-photos-1444424.jpg";
import imageTwoHover from "../../src/assets/pexels-heyho-6394514.jpg";
import imageThree from "../../src/assets/pexels-hristo-sahatchiev-273072-821357.jpg";
import imageThreeHover from "../../src/assets/pexels-pixabay-276528.jpg";
import { useNavigate } from "react-router-dom";

function TotalPage() {
  const navigate = useNavigate();
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredImage(index);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  const images = [
    {
      defaultSrc: imageOne,
      hoverSrc: imageOneHover,
    },
    {
      defaultSrc: imageTwo,
      hoverSrc: imageTwoHover,
    },
    {
      defaultSrc: imageThree,
      hoverSrc: imageThreeHover,
    },
  ];

  return (
    <div>
      <Navbar />

      <div className="relative bg-black">
        <div className="img">
          <img
            src={imageTotal}
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="head absolute inset-0 flex flex-col items-start justify-center pl-6 md:pl-28 text-left">
          <h2 className="text-red-500 text-xl md:text-3xl">Categories</h2>
          <h1 className="text-white text-4xl md:text-6xl mt-2">Our work with Total Look</h1>
        </div>
      </div>

      <div className="bg-black text-white p-4 sm:p-8 md:p-10">
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
          <div className="w-full md:w-1/3 text-center md:text-left md:flex md:flex-col md:justify-center">
            <h1 className="text-2xl md:text-3xl font-bold text-red-600 text-center md:text-left">
              Project Categories
            </h1>
            <ul className="mt-4 space-y-4 text-lg ml-0 md:ml-16">
              <li>
                <a href="/#/kitchen">Kitchens</a>
              </li>
              <li>
                <a href="/#/living">Living</a>
              </li>
              <li>
                <a href="/#/Closets">Closets</a>
              </li>
              <li>
                <a href="/#/bath">Bath</a>
              </li>
            </ul>
            <button
              onClick={() => navigate("/contact")}
              className="relative text-white border border-white w-full sm:w-auto py-2 px-4 rounded-lg mt-4 hover:bg-red-500 transition duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-2xl"
            >
              <span className="absolute inset-0 border-white border transform scale-x-0 origin-right hover:scale-x-100 transition duration-300"></span>
              <span className="relative">Start Your Project</span>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-black text-white p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start">
        <div className="flex-1 max-w-screen-lg pl-4 md:pl-20">
          <h6 className="text-lg text-red-500 font-semibold mb-2">See Us in Person</h6>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Experience Custom Living</h1>
          <p className="text-base sm:text-lg md:text-xl mb-6">
            For many, seeing is believing, but there's nothing quite like feeling. Visit us at our showroom in upper Georgetown to get the full experience.
          </p>
          <button
            onClick={() => navigate("/bookaAppointment")}
            className="relative text-white border border-white w-full sm:w-auto py-2 px-4 rounded-lg mt-4 hover:bg-red-500 transition duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-2xl"
          >
            <span className="absolute inset-0 border-white border transform scale-x-0 origin-right hover:scale-x-100 transition duration-300"></span>
            <span className="relative">Book an Appointment</span>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default TotalPage;
