import React from "react";
import Navbar from "../component/Navbar";
import imageView from "../../src/assets/pexels-mtk402-2098912.jpg";

function ViewProccess() {
  return (
    <div>
      <Navbar />
      <div className="relative flex items-center">
        <div className="w-full">
          <img
            src={imageView}
            alt=""
            className="w-full h-auto object-cover brightness-50"
          />
        </div>
        <div className="absolute left-28 p-6 sm:p-8 ">
          <h2 className="text-red-500 text-lg font-semibold mb-2">
            Design Approach
          </h2>
          <h1 className="text-white text-3xl sm:text-4xl font-bold">
            OUR Process
          </h1>
        </div>
      </div>
      <div className="bg-black text-left p-8">
  <div className="commit pl-28">
    <h1 className="text-red-500 text-3xl font-bold mb-4">
      Committed to Excellence
    </h1>
    <p className="text-white w-2/3 text-base leading-relaxed">
      A successful process is an invaluable asset for any project. A
      well-structured plan creates a clear roadmap that guides our team from
      concept to installation and beyond. LXRY carefully considers both form
      and function and lays out the roadmap for design and execution. From
      beginning to end, our team ensures that our materials are installed
      with accuracy and excellence, providing you peace of mind knowing that
      you have a reliable product that will provide years of service and add
      value to your property.
    </p>
  </div>
</div>

    </div>
  );
}

export default ViewProccess;
