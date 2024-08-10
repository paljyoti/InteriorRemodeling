import React, { useState } from "react";
import Navbar from "../component/Navbar";
import imagecontract from "../../src/assets/pexels-kseniachernaya-3952034.jpg";
import design from "../../src/assets/pexels-pixabay-290275.jpg";
import image1 from "../../src/assets/pexels-olenkabohovyk-3686797.jpg";
import image2 from "../../src/assets/pexels-introspectivedsgn-7475561.jpg";
import image3 from "../../src/assets/pexels-brett-sayles-5092813.jpg";
import image4 from "../../src/assets/pexels-masoodaslami-4448826.jpg";
import image5 from "../../src/assets/pexels-elina-sazonova-1838554.jpg";
import image6 from "../../src/assets/pexels-thomas-balabaud-735585-1579739.jpg";
import image7 from "../../src/assets/pexels-rachel-claire-5531541.jpg";
import image8 from "../../src/assets/pexels-rdne-5698918.jpg";
import Custom from "../component/Custom";
import Footer from "../component/Footer";

function ContractPage() {
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredImage(index);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  const images = [
    {
      defaultSrc: image1,
      hoverSrc: image2,
    },
    {
      defaultSrc: image3,
      hoverSrc: image4,
    },
    {
      defaultSrc: image5,
      hoverSrc: image6,
    },
    {
      defaultSrc: image7,
      hoverSrc: image8,
    },
  ];

  return (
    <div className="bg-black min-h-screen flex flex-col items-center">
      <Navbar />
      <div className="relative w-full h-64 md:h-96 lg:h-[500px]">
        <img
          src={imagecontract}
          alt="Contract"
          className="object-cover w-full h-full opacity-30"
        />
        <div className="absolute inset-0 flex flex-col items-start justify-center pl-4 sm:pl-6 md:pl-8 lg:pl-12 xl:pl-36">
          <h6 className="text-base sm:text-lg font-medium text-red-500">
            Commercial Ventures
          </h6>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2">
            Contract
          </h1>
        </div>
      </div>
      <div className="bg-black text-white p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col lg:flex-row items-start">
        <div className="flex-1 mb-6 lg:mb-0">
          <img
            src={design}
            alt="Large Scale Projects"
            className="w-full h-auto transform transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="flex-1 lg:ml-10">
          <h2 className="text-red-500 text-xl sm:text-2xl md:text-3xl font-semibold mb-2">
            Large Scale Projects
          </h2>
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Design Built to Scale.
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-4">
            LXRY supports quality design built to scale. Our solutions are
            designed to deliver successful outcomes for boutique multi-family
            projects that are looking to deliver quality materials as well as an
            upscale design aesthetic. Our team works with developers, builders,
            architects, and design teams to provide interior cabinetry solutions
            that will add value to the property and provide the desired ambiance
            to the finished project.
          </p>
          <p className="text-base sm:text-lg md:text-xl mb-4">
            From architecture projects to re-stylings and residential complexes,
            LXRY is capable of accommodating our clients to meet both design and
            functional requirements. We engage with retail, boutique hotels,
            high-end condominiums, and luxury office space to deliver impressive
            interiors that do not go unnoticed.
          </p>
          <p className="text-base sm:text-lg md:text-xl">
            Schedule time to speak with our consultants or stop in the LXRY
            showroom to discuss your upcoming project concepts.
          </p>
        </div>
      </div>
      <div className="bg-black text-white p-6 sm:p-8 md:p-10 lg:p-12 flex items-center justify-center">
        <div className="w-full max-w-screen-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative w-full h-64 sm:h-80 md:h-96"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={
                    hoveredImage === index ? image.hoverSrc : image.defaultSrc
                  }
                  alt=""
                  className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-black text-white p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start">
        <div className="flex-1 max-w-screen-lg">
          <h6 className="text-lg text-red-500 font-semibold mb-2">
            See Us in Person
          </h6>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Experience Custom Living
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6">
            For many, seeing is believing, but there's nothing quite like
            feeling. Visit us at our showroom in upper Georgetown to get the
            full experience.
          </p>
          <button className="relative text-white border border-white w-full sm:w-auto md:w-80 py-2 px-4 rounded-lg mt-4 hover:bg-red-500 transition duration-300 overflow-hidden transform hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-2xl">
            <span className="absolute inset-0 border-white border transform scale-x-0 origin-right hover:scale-x-100 transition duration-300"></span>
            <span className="relative">Book an Appointment</span>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContractPage;
