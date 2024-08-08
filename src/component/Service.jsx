import React from "react";
import '../css/service.css' ;
import { PiBathtubThin } from "react-icons/pi";
import { MdOutlineBreakfastDining, MdOutlineLiving } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";

function Service() {
  return (
    <div className="p-4 sm:p-8 bg-black">
      <div className="text-center sm:text-left mb-8">
        <h6 className="text-xs sm:text-sm font-semibold text-red-800 uppercase">
          Our Offerings
        </h6>
        <h1 className="text-2xl sm:text-4xl font-bold text-red-800">
          Design Services
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 mb-4">
        {[
          {
            src: "../../src/assets/pexels-abdel-rahman-abu-baker-958112-2319426.jpg",
            heading: "LIVING ROOM",
            description:
              "The modern living room is the perfect place to entertain friends and family. With a contemporary, cohesive style that's both sophisticated yet relaxing; you can create memories in this space with ease.",
            icon: <MdOutlineLiving className="mr-2 text-5xl text-red-500" />,
            text: "ENTERTAINMENT",
          },
          {
            src: "../../src/assets/pexels-donaldtong94-189333.jpg",
            heading: "BATHROOM",
            description:
              "Imagine waking up each morning and taking a leisurely bath in your own private oasis. With LXRY, that can be a reality. Our products are not only beautiful but also highly functional - perfect for anyone who wants the best of both worlds.",
            icon: <MdOutlineLiving className="mr-2 text-5xl text-red-500" />,
            text: "RELAXATION",
          },
        ].map((item, index) => (
          <div key={index} className="relative group">
            <div className="perspective-1000 group-hover:rotate-3d">
              <img
                src={item.src}
                alt={item.heading}
                className="w-full sm:w-5/6 h-auto rounded-lg shadow-md mx-auto transition-transform duration-500 transform group-hover:scale-110 group-hover:rotate-3d"
              />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 rounded-lg p-4">
              <p className="w-80 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                {item.description}
              </p>
              <h1 className="text-white mt-10 flex items-center">
                {item.icon} <span className="text-red-500">{item.heading}</span>
              </h1>
              <p className="text-white">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          {
            src: "../../src/assets/pexels-heyho-6969870.jpg",
            heading: "KITCHEN",
            description:
              "For many, the kitchen is the heart of the home. This space has something for everyone. Regardless of your lifestyle, we can reflect your needs and unique style to provide you the best cooking, cleaning, and dining experience.",
            icon: <MdOutlineBreakfastDining className="mr-2 text-5xl text-red-500" />,
            text: "Preparation & DINING",
          },
          {
            src: "../../src/assets/pexels-sheep-556180-1846386.jpg",
            heading: "STORAGE",
            description:
              "A custom-designed wardrobe in your home, you can be ready for the world and all its opportunities. With extra space for your wardrobe and accessories — find yourself feeling less stressed, more organized , and have more time for the things you love.",
            icon: <FaBookReader className="mr-2 text-5xl text-red-500" />,
            text: "Storage & Wardrobe",
          },
        ].map((item, index) => (
          <div key={index} className="relative group">
            <div className="perspective-1000 group-hover:rotate-3d">
              <img
                src={item.src}
                alt={item.heading}
                className="w-full sm:w-5/6 h-auto rounded-lg shadow-md mx-auto transition-transform duration-500 transform group-hover:scale-110 group-hover:rotate-3d"
              />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 rounded-lg p-4">
              <p className="w-80 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                {item.description}
              </p>
              <h1 className="text-white mt-10 flex items-center">
                {item.icon} <span className="text-red-500">{item.heading}</span>
              </h1>
              <p className="text-white">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
