import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    
    <div className="relative w-screen h-screen overflow-hidden">
      {/* <Navbar/> */}
      <video
        className="absolute inset-0 object-cover w-full h-full"
        autoPlay
        muted
        loop
      >
        <source
          src="../../src/assets/3444433-hd_1920_1080_30fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Header;
