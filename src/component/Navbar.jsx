import React from 'react';

function Navbar() {
  return (
    <div className="bg-black">
      <div className="flex justify-between items-center p-4">
        <div className="logo">
          {/* <img src="" alt="Logo" /> */}
        </div>
        <div className="navbar flex space-x-10 ml-60">
          <a href="#" className="text-white">Home</a>
          <a href="#" className="text-white">Portfolio</a>
          <a href="#" className="text-white">Contract</a>
          <a href="#" className="text-white">About</a>
          <a href="#" className="text-white">Contact</a>
        </div>
        <div className="menu text-white ">toggle

        </div>
        <button className="relative text-white border border-white ml-10 w-80 py-2 px-4 rounded-lg mt-4 hover:bg-red-500 transition duration-300 overflow-hidden transform hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-2xl">
  <span className="absolute inset-0 w-full h-full border-white border transform scale-x-0 origin-right hover:scale-x-100 transition duration-300"></span>
  <span className="relative">BOOK AN APPOINTMENT</span>
</button>
        {/* <button className="relative text-white mr-16 border border-white py-2 px-4 rounded-lg hover:bg-red-500 hover:text-black transition duration-300 overflow-hidden">
          <span className="absolute inset-0 w-full h-full border-white border transform scale-x-0 origin-right hover:scale-x-100 transition duration-300"></span>
          <span className="relative ">BOOK AN APPOINTMENT</span>
        </button> */}
      </div>
    </div>
  );
}

export default Navbar;
