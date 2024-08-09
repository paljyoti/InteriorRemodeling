import React from "react";
import backgroundVideo from "../../src/assets/3444433-hd_1920_1080_30fps.mp4";


function Header() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <video
        className="absolute inset-0 object-cover w-full h-full"
        autoPlay
        muted
        loop
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Header;
