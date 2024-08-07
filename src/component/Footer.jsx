import React from "react";

function Footer() {
  return (
    <div className="bg-black text-white py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start border-b border-gray-700 pb-8 mb-8">
        {/* Logo and Navigation */}
        <div className="flex flex-col mb-8 md:mb-0 md:w-1/3 border-b md:border-b-0 border-gray-700 pb-8">
          <img src="" alt="Logo" className="mb-4" />
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <a href="" className="hover:text-gray-400">HOME</a>
            <a href="" className="hover:text-gray-400">ABOUT</a>
            <a href="" className="hover:text-gray-400">PROCESS</a>
            <a href="" className="hover:text-gray-400">CONTRACT</a>
            <a href="" className="hover:text-gray-400">PARTNERS</a>
            <a href="" className="hover:text-gray-400">PORTFOLIO</a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col md:flex-row md:justify-between md:w-1/3 border-b md:border-b-0 border-gray-700 pb-8">
            <h1 className="text-xl font-bold mb-4">Contact</h1>
          <div className="flex  items-center mb-4 md:mb-0 text-center md:text-left">
            <hr className="border-gray-700 mb-4 w-full max-w-xs mx-auto" />
            <div className="mb-4 ">
              <h2 className="text-lg font-semibold">Email</h2>
              <p className="text-base">example@example.com</p>
            </div>
            <div className="mb-4 ">
              <h2 className="text-lg font-semibold">Phone</h2>
              <p className="text-base">(123) 456-7890</p>
            </div>
            <div className="mb-4">
              <h2 className="text-lg font-semibold">Address</h2>
              <p className="text-base">430 Wisconsin Ave</p>
            </div>
          </div>
           <div className="flex  items-center text-center md:text-left">
            <h2 className="text-lg font-semibold mb-2">Hours</h2>
            <p className="text-base">Monday-Friday: 9am - 5pm</p>
            <p className="text-base">Saturday: 10am - 4pm</p>
          </div> 
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center border-t border-gray-700 pt-8">
        <p className="text-sm">© 2023 LXRY</p>
      </div>
    </div>
  );
}

export default Footer;
