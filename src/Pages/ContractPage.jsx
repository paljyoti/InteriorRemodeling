import React, { useState } from "react";
import Navbar from "../component/Navbar";
import imagecontract from "../../src/assets/pexels-kseniachernaya-3952034.jpg";
import design from "../../src/assets/pexels-curtis-adams-1694007-3288103.jpg";
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
      <div className="relative w-full h-full">
        <img
          src={imagecontract}
          alt="Contract"
          className="object-cover w-full h-full opacity-30"
        />
        <div className="absolute inset-0 flex flex-col items-start justify-center pl-36">
          <h6 className="text-lg font-medium text-red-500">
            Commercial Ventures
          </h6>
          <h1 className="text-4xl font-bold  text-white mt-2">Contract</h1>
        </div>
      </div>
      <div className="bg-black text-white p-10 flex flex-col lg:flex-row items-start">
        <div className="flex-1">
          <img
            src={design}
            alt="Large Scale Projects"
            className="mb-6 mt-3 transform transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="flex-1 lg:ml-10">
          <h2 className="text-red-500 text-2xl font-semibold mb-2">
            Large Scale Projects
          </h2>
          <h1 className="text-white text-4xl font-bold mb-4">
            design built to scale.
          </h1>
          <p className="text-white mb-4">
            LXRY supports quality design built to scale. Our solutions are
            designed to deliver successful outcomes for boutique multi-family
            projects that are looking to deliver quality materials as well as an
            upscale design aesthetic. Our team works with developers, builders,
            architects, and design teams to provide interior cabinetry solutions
            that will add value to the property and provide the desired ambiance
            to the finished project.
          </p>
          <p className="text-white mb-4">
            From architecture projects to re-stylings and residential complexes,
            LXRY is capable of accommodating our clients to meet both design and
            functional requirements. We engage with retail, boutique hotels,
            high-end condominiums, and luxury office space to deliver impressive
            interiors that do not go unnoticed.
          </p>
          <p className="text-white">
            Schedule time to speak with our consultants or stop in the LXRY
            showroom to discuss your upcoming project concepts.
          </p>
        </div>
      </div>

      <div className="bg-black text-white p-8 h-screen flex items-center justify-center">
        <div className="w-full h-full flex flex-col gap-8">
          <div className="grid grid-cols-2  w-full h-1/2">
            {images.slice(0, 2).map((image, index) => (
              <div
                key={index}
                className="relative w-full h-full"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={
                    hoveredImage === index ? image.hoverSrc : image.defaultSrc
                  }
                  alt=""
                  className="w-4/5 h-4/5 object-cover rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 mx-auto"
                />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 w-full h-1/2">
            {images.slice(2, 4).map((image, index) => (
              <div
                key={index}
                className="relative w-full h-full"
                onMouseEnter={() => handleMouseEnter(index + 2)}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={
                    hoveredImage === index + 2
                      ? image.hoverSrc
                      : image.defaultSrc
                  }
                  alt=""
                  className="w-4/5 h-4/5  object-cover rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 mx-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      

      <div className="flex flex-col md:flex-row">
  <div className="bg-black text-white p-6 md:p-8 flex-1">
    <div className="max-w-screen-lg px-4 sm:px-6 lg:px-8  ">
      <h6 className="text-lg text-red-500 font-semibold mb-2">
        See us in person
      </h6>
      <h1 className="text-2xl sm:text-3xl font-bold my-4">
        Experience custom living
      </h1>
      <p className="text-base mb-6 w-3/4">
        For many, seeing is believing, but there's nothing quite like
        feeling. Visit us at our showroom in upper Georgetown to get the
        full experience.
      </p>
      <button className="relative text-white border border-white w-80 py-2 px-4 rounded-lg mt-4 hover:bg-red-500 transition duration-300 overflow-hidden transform hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-2xl">
        <span className="absolute inset-0 border-white border transform scale-x-0 origin-right hover:scale-x-100 transition duration-300"></span>
        <span className="relative">Book an Appointment</span>
      </button>
    </div>
  </div>
</div>



      <Footer/>
    </div>
  );
}

export default ContractPage;
