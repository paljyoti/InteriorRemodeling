import React from "react";
import portfoliaImage from "../../src/assets/pexels-christa-grover-977018-2001944.jpg";
import Navbar from "../component/Navbar";
import View from "../component/View";
import ProCate from "../component/ProCate";
import Footer from "../component/Footer";

function PortfolioPage() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />
      
      <div className="relative">
        <img
          src={portfoliaImage}
          alt="Portfolio Background"
          className="w-full h-64 md:h-80 lg:h-[500px] object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-8 lg:px-20 bg-black bg-opacity-40 pl-16 text-left">
          <h6 className="text-base md:text-lg uppercase font-semibold mb-2 text-red-500">
            Projects
          </h6>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Portfolio
          </h1>
        </div>
      </div>
      
      <View />
      <ProCate />
      
      <div className="bg-black text-white p-6 md:p-8 lg:p-12 flex flex-col md:flex-row items-center">
        <div className="flex-1 mb-6 md:mb-0">
          <div className="max-w-screen-lg mx-auto">
            <h6 className="text-lg text-red-500 font-semibold mb-2 text-center md:text-left">
              See us in person
            </h6>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">
              Experience Custom Living
            </h1>
            <p className="text-base md:text-lg mb-6 text-center md:text-left">
              For many, seeing is believing, but there's nothing quite like
              feeling. Visit us at our showroom in upper Georgetown to get the
              full experience.
            </p>
            <div className="text-center md:text-left">
              <button className="relative text-white border border-white w-full sm:w-auto md:w-80 py-2 px-4 rounded-lg mt-4 hover:bg-red-500 transition duration-300 overflow-hidden transform hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-2xl">
                <span className="absolute inset-0 border-white border transform scale-x-0 origin-right hover:scale-x-100 transition duration-300"></span>
                <span className="relative">Book an Appointment</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default PortfolioPage;
