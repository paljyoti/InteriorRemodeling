import React from "react";
import imageContact from "../../src/assets/pexels-joenibraw-1416530.jpg";
import Navbar from "../component/Navbar";

function ContactPage() {
  return (
    <div>
      <Navbar />
      <div className="relative bg-black text-white p-6">
        <div className="relative w-full h-full">
          <img
            src={imageContact}
            alt=""
            className="w-full h-auto object-cover brightness-50"
          />
          <div className="absolute inset-0 flex flex-col justify-center pl-32 bg-black bg-opacity-40">
            <h2 className="text-red-500 text-lg font-semibold mb-2">
              Contact us
            </h2>
            <h1 className="text-white text-3xl sm:text-4xl font-bold">
              Start planning your next project.
            </h1>
          </div>
        </div>
      </div>

      <div className="contact">
        <div className="head">
          <h4>Start the conversation</h4>
          <p>
          Let us know what you would like to accomplish and our team will get
          back to you with any additional questions and help you start the
          process.
          </p>
        <p>We look forward to working with you!</p>
        </div>
        <div className="form">


            
        </div>
        <div className="link">
            <h1>Quick Contact Links</h1>
            <h6>2430 Wisconsin Ave NW Washington, D.C. 20007/h</h6>
            <h6>info@lxrystudio.com</h6>
            <h6>+91 1234567897</h6>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
