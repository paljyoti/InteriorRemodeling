import React from "react";
import imageContact from "../../src/assets/pexels-joenibraw-1416530.jpg";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { useNavigate } from "react-router-dom";

function ContactPage() {

  const navigate = useNavigate();

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />
      <div className="relative bg-black text-white">
        <img
          src={imageContact}
          alt="Contact Background"
          className="w-full h-64 md:h-80 lg:h-[500px] object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-8 lg:px-20 bg-black bg-opacity-40 text-center md:text-left">
          <h2 className="text-red-500 text-3xl md:text-4xl font-semibold  mb-2">
            Contact Us
          </h2>
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold">
            Start planning your next project.
          </h1>
        </div>
      </div>
      <div className="bg-black text-white p-6 md:p-8 lg:p-12">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <div className="mb-8 md:pl-8 lg:pl-16">
              <h4 className="text-red-500 text-xl font-semibold mb-2">
                Start the Conversation
              </h4>
              <p className="text-base mb-4">
                Let us know what you would like to accomplish and our team will
                get back to you with any additional questions and help you start
                the process.
              </p>
              <p className="text-base">We look forward to working with you!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-white p-6 md:p-8 lg:p-12">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 mb-6 md:mb-0">
            <div className="bg-black text-white p-6 rounded-lg shadow-lg max-w-md mx-auto md:max-w-xs lg:max-w-md">
              <h1 className="text-2xl font-bold mb-4 text-red-500">
                Quick Contact Links
              </h1>
              <p className="text-base mb-2">
                2430 Wisconsin Ave NW, Washington, D.C. 20007
              </p>
              <p className="text-base mb-2">info@lxrystudio.com</p>
              <p className="text-base">+91 1234567897</p>
            </div>
          </div>
          <div className="flex-1">
            <div className="bg-black text-white p-6 rounded-lg shadow-lg max-w-md mx-auto md:max-w-xs lg:max-w-md">
              <h2 className="text-2xl font-bold mb-4 text-red-500">
                Contact Us
              </h2>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1 text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full p-2 rounded-md border border-red-500 bg-white text-black focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1 text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full p-2 rounded-md border border-red-500 bg-white text-black focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1 text-white"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    className="w-full p-2 rounded-md border border-red-500 bg-white text-black focus:outline-none focus:ring-2 focus:ring-red-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 rounded-md bg-red-800 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-transform transition-shadow duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-white p-6 md:p-8 lg:p-12 flex flex-col md:flex-row items-center">
        <div className="flex-1 max-w-screen-lg mx-auto">
          <h6 className="text-lg text-red-500 font-semibold mb-2 text-center md:text-left">
            See Us in Person
          </h6>
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center md:text-left">
            Experience Custom Living
          </h1>
          <p className="text-base mb-6 text-center md:text-left">
            For many, seeing is believing, but there's nothing quite like
            feeling. Visit us at our showroom in upper Georgetown to get the
            full experience.
          </p>
          <button onClick={()=>navigate('/bookaAppointment')} className="relative text-white border border-white w-full sm:w-auto md:w-80 py-2 px-4 rounded-lg mt-4 hover:bg-red-500 transition duration-300 overflow-hidden transform hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-2xl mx-auto md:mx-0">
            <span className="absolute inset-0 border-white border transform scale-x-0 origin-right hover:scale-x-100 transition duration-300"></span>
            <span className="relative">Book an Appointment</span>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;
