import React from "react";
import Navbar from "../component/Navbar";
import AboutImage from "../../src/assets/pexels-jvdm-1457842.jpg";
import Footer from "../component/Footer";
import Update from "../component/Update";

function AboutUsPage() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <div className="relative">
        <img
          src={AboutImage}
          alt="About Us"
          className="w-full h-auto object-cover opacity-70"
        />
        <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-8 lg:px-20 xl:px-32">
          <h6 className="text-base md:text-lg uppercase font-semibold mb-2 text-red-500">
            Who we are
          </h6>
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
            About us  
          </h1>
        </div>
      </div>
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 py-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-red-500">
          A Truly Bespoke Experience.
        </h1>
        <p className="mb-6 text-base md:text-lg lg:text-xl xl:text-2xl">
          Born from a passion for design, LXRY creates sophisticated spaces that
          are both innovative and timeless in its form. Modern meets elegant
          tradition at LXRY; where we strive to bring the highest quality of
          Italian design into a new era.
        </p>
      </div>
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-red-500 px-4 md:px-8 lg:px-16 xl:px-32">
        Our Vision
      </h2>
      <div className="flex flex-col md:flex-row text-justify gap-6 md:gap-12 xl:gap-16 px-4 md:px-8 lg:px-16 xl:px-32">
        <p className="mb-4 md:mb-0 md:w-1/2 xl:w-1/3">
          Our expertise, and adept customer service allow us to guide our
          clients through a smooth design and execution process. We collaborate
          with our partners on each detail of the design including cabinetry,
          stone, appliances, plumbing, lighting, and more, to help streamline
          the process and create a cohesive total look for your interiors.
        </p>
        <p className="md:w-1/2 xl:w-1/3">
          Your vision and lifestyle are the inspiration our team needs to create
          beautiful spaces that feel luxurious and highly functional for your
          everyday use. Whether you are looking to upgrade your kitchen or
          create a stunning walk-in closet, our designers will use their worldly
          taste and talent for high-end design to deliver the space of your
          dreams.
        </p>
      </div>
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 py-8 flex flex-col items-start">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-red-500">
          Explore how We Work
        </h1>
        <p className="mb-6 text-base md:text-lg lg:text-xl xl:text-2xl">
          We have the experience and the know-how to make sure that the custom
          cabinetry goals you have in mind become a reality. Through
          professional guidance, inspiration, and superior craftsmanship, we'll
          turn your visions into a reality.
        </p>
        <button className="bg-red-500 w-full md:w-auto text-white py-2 px-4 rounded hover:bg-white hover:text-red-500 border border-red-500 transition duration-300">
          View Process
        </button>
      </div>
      <Update />
      <Footer />
    </div>
  );
}

export default AboutUsPage;
