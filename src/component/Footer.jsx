import React from "react";

function Footer() {
  return (
    <div className="bg-black text-white p-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* 1st Section */}
        <div className="text-center md:text-left ml-20 mb-4 md:mb-0 flex-1">
          <div>HOME</div>
          <div className=" mt-2 pt-2">ABOUT</div>
          <div className=" mt-2 pt-2">PORTFOLIO</div>
          <div className=" mt-2 pt-2 flex">PARTNERS</div>
        </div>
        <div className="text-center md:text-left mb-4 mr-60 md:mb-0 flex-1">
          <div>HOME</div>
          <div className=" mt-2 pt-2">ABOUT</div>
        </div>{" "}
        <div className="text-center md:text-left  mb-4 md:mb-0 flex-1">
          <div className=" mr-60 ">HOME</div>
        </div>
        {/* 2nd Section */}
        <div className="flex-1 flex flex-col justify-between">
          <div className="text-center md:text-center">
            <h1 className="font-semibold">Contact</h1>
            <div className="border-t border-gray-600 mt-2 pt-2">
              Email: example@example.com
            </div>
            <div className=" mt-2 pt-2">Address: 430 Wisconsin Ave</div>
          </div>
          <div className="text-center md:text-center mt-4 md:mt-8">
            <h1 className="font-semibold ">Hours</h1>
            <div className="border-t border-gray-600 mt-2 pt-2">
              Monday-Friday: 9am - 5pm
            </div>
            <div className="mt-2 pt-2">Saturday: 10am - 4pm</div>
            <div className=" mt-2 pt-2">Sunday: Closed</div>
          </div>
        </div>
        {/* 3rd Section */}
      </div>
      <div className="text-center md:text-left mt-4 md:mt-0 flex-1">
        <div className="border-t border-gray-600 pt-2">© 2023 LXRY</div>
      </div>
    </div>
  );
}

export default Footer;
