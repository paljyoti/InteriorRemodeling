import React from "react";
import Navbar from "../component/Navbar";
import imageappointment from "../../src/assets/pexels-seven11nash-380768.jpg";
import backgroundVideo from "../../src/assets/7578546-uhd_3840_2160_30fps.mp4";
import Footer from "../component/Footer";

function BookaAppointment() {
  return (
    <div>
      <Navbar />
      <div className="relative bg-black">
        <div className="img">
          <img
            src={imageappointment}
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="head absolute inset-0 flex flex-col items-start justify-center pl-28 text-left">
          <h2 className="text-red-500 text-3xl">SCHEDULE</h2>
          <h1 className="text-white text-6xl mt-2">Book an APPOINTMENT</h1>
        </div>
      </div>

      <div className="min-h-screen flex items-center justify-center bg-black p-4">
        <div className="max-w-md w-full bg-black p-8 rounded-lg shadow-lg">
          <h2 className="text-red-500 text-3xl font-bold mb-6 text-center">
            Book an Appointment
          </h2>
          <form>
            <div className="mb-4">
              <label className="block text-red-500 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 text-black bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-red-500 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 text-black bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-red-500 mb-2" htmlFor="phone">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                className="w-full p-3 text-black bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Your Phone Number"
              />
            </div>
            <div className="mb-4">
              <label className="block text-red-500 mb-2" htmlFor="date">
                Preferred Date
              </label>
              <input
                type="date"
                id="date"
                className="w-full p-3 text-black bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

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
        <div className="absolute right-20 top-0 p-16  max-w-lg text-right text-justify">
          <h6 className="text-red-500 text-2xl">VISIT US AT OUR SHOWROOM</h6>
          <h1 className="text-white text-2xl md:text-4xl">
            OPEN,MONDAY-FRIDAY 10AM-6PM
          </h1>
          <h1 className="text-white text-2xl md:text-2xl">
            SATURDAYS ARE BY APPOINTMENT
          </h1>
          <p className="text-white mt-4">
            Parking is available on both sides of Wisconsin Avenue, and for zone
            3 permit holders there is street parking on 37th street. We also
            have a small parking lot with a couple customer spots in the back of
            LXRY on 37th street.
          </p>
          <br />
          <p className="text-white">
            Appointments can be booked below, but we do welcome walk-ins at this
            time. Please call 202-796-1717 for any questions or email us at
            info@lxrystudio.com.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BookaAppointment;
