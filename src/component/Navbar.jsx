import React, { useEffect, useState } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`bg-black bg-opacity-20  backdrop-filter backdrop-blur-lg fixed top-0 left-0 w-[99%] z-10 transition-all duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto flex justify-around items-center px-4 py-6">
        <div className="flex items-center space-x-4">
          <div className="logo">{/* <img src="" alt="Logo" /> */}</div>
          <div className="navbar flex  space-x-10 text-lg">
            <a
              href="#"
              className="text-white hover:text-gray-300 transition ml-20 duration-300"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Portfolio
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Contract
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              About
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Contact
            </a>
            <button
              onClick={toggleMenu}
              className={`relative flex flex-col items-center justify-center w-7 h-7  transition-transform duration-300 ${
                isMenuOpen ? "bg-transparent" : ""
              }`}
            >
              <span
                className={`block w-7 h-0.5 bg-white transition-transform duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
                style={{
                  transformOrigin: "center",
                  transition: "transform 0.3s ease-in-out",
                }}
              />
              <span
                className={`block w-7 h-0.5 bg-white my-1 transition-opacity duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
                style={{
                  transition: "opacity 0.3s ease-in-out",
                }}
              />
              <span
                className={`block w-7 h-0.5 bg-white transition-transform duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
                style={{
                  transformOrigin: "center",
                  transition: "transform 0.3s ease-in-out",
                  
                }}
              />
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="relative text-white border border-white py-2 px-4 text-lg rounded-lg w-96 hover:bg-red-500 transition duration-300 overflow-hidden transform hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-2xl">
            <span className="absolute inset-0 w-full  h-full border-white border transform scale-x-0 origin-right hover:scale-x-100 transition duration-300"></span>
            <span className="relative">BOOK AN APPOINTMENT</span>
          </button>
           {/* <button className="relative text-white border border-white py-2 px-4 rounded-lg mt-4 hover:bg-red-500 transition duration-300 overflow-hidden transform hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-2xl">
              <span className="absolute inset-0 border-white border transform scale-x-0 origin-right hover:scale-x-100 transition duration-300"></span>
              <span className="relative">Book an Appointment</span>
            </button> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
