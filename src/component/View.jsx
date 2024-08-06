import React from "react";

function View() {
  return (
    <div className="bg-black p-8">
      <div className=" ml-28 text-white mb-8">
        <h6 className="text-2xl sm:text-2xl font-bold">How We Work</h6>
        <h1 className="text-2xl sm:text-4xl font-bold mt-2">Custom Design Solutions</h1>
      </div>
      <div className="text-center text-red-500 mb-8 flex  items-center">
  <p className="text-base sm:text-lg leading-relaxed w-1/2 ml-24 ">
    We approach every design as tailor-made and unique to our customer's taste and lifestyle. 
    Collaborating this understanding with our expertise in custom quality craftsmanship forms the foundation for success.
  </p>
  <button className="relative text-white border border-white ml-10 w-80 py-2 px-4 rounded-lg mt-4 hover:bg-red-500 transition duration-300 overflow-hidden">
    <span className="absolute inset-0 w-full h-full border-white border transform scale-x-0 origin-right hover:scale-x-100 transition duration-300"></span>
    <span className="relative">View Process</span>
  </button>
</div>

      <div className="flex w-full h-full ">
        <img
          src="../../src/assets/pexels-heyho-6538903.jpg"
          alt=""
          className=" shadow-md "
        />
      </div>
    </div>
  );
}

export default View;
