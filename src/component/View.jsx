import React from "react";
import imageOne from "../../src/assets/pexels-heyho-6538903.jpg";
import { useNavigate } from "react-router-dom";

function View() {
  const navigate = useNavigate();

  return (
    <div className="bg-black p-4 sm:p-8 lg:p-12">
      <div className="text-center sm:text-left text-white mb-8 px-4 sm:px-20">
        <h6 className="text-xl sm:text-2xl text-red-500 font-bold mb-2">
          How We Work
        </h6>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          Custom Design Solutions
        </h1>
      </div>
      <div className="text-center pl-20 sm:text-left text-white flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 sm:gap-8">
        <p className="text-base sm:text-lg leading-relaxed w-full sm:w-1/2 px-4 sm:px-0">
          We approach every design as tailor-made and unique to our customer's
          taste and lifestyle. Collaborating this understanding with our
          expertise in custom quality craftsmanship forms the foundation for
          success.
        </p>
        <button
          onClick={() => navigate('/viewProcess')}
          className="relative text-white border border-white  w-full sm:w-80 py-2 px-4 rounded-lg mt-4 sm:mt-0 hover:bg-red-500 transition duration-300 overflow-hidden transform hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-2xl"
        >
          <span className="absolute inset-0 border-white border transform scale-x-0 origin-right hover:scale-x-100 transition duration-300"></span>
          <span className="relative">View Process</span>
        </button>
      </div>
      <div className="relative w-full h-64 sm:h-80 lg:h-[500px] mt-8">
        <img
          src={imageOne}
          alt="Embassy Row Renovation"
          className="w-full h-full object-cover shadow-md"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black bg-opacity-50">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 text-white ml-2 sm:ml-4 lg:ml-6">
            Embassy Row Renovation
          </h1>
          <p className="text-sm sm:text-base lg:text-lg ml-2 sm:ml-4 lg:ml-6 mb-4 text-white">
            An exquisite total look solution in Northwest Washington, DC.
          </p>
        </div>
      </div>
    </div>
  );
}

export default View;
