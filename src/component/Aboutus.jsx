import React from "react";
import "../css/aboutUs.css";

function Aboutus() {
  return (
    <div className="flex">
      <div className="img flex">
        <img src="../../src/assets/room.jpg" alt="" />
      </div>
      <div className="heading flex ">
        <h2>Vision & mission</h2>
        <h1>ELEVATING Your Space With Style and Function</h1>
        <p>
          LXRY is a design-driven company that is focused on creating beautiful
          spaces to match your lifestyle. Our company strives to provide
          high-end interior concepts and solutions by partnering with our
          curated collection of Italian cabinetry brands. All of our partners
          are carefully considered based on the quality of materials and their
          ability to customize their product lines to any space. From elegant
          modern kitchens, couture closets, and luxurious living areas –LXRY has
          everything you need to create a stylish and functional space.
        </p>
        <p>
          Our team of professional design consultants will collaborate with
          architects, interior designers, builders, and homeowners every step of
          the way to bring the vision of each custom creation to life. With
          LXRY, you can be sure that every detail will be taken into account
          from conception to installation.
        </p>
        <button>Learn about us</button>
      </div>

    </div>
  );
}

export default Aboutus;
