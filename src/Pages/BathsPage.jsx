import React from 'react'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import imagebath from "../../src/assets/pexels-heyho-6444240.jpg";
import backgroundVideo2 from "../../src/assets/855250-hd_1920_1080_30fps.mp4";
import { useNavigate } from 'react-router-dom';

function BathsPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="relative bg-black">
        <div className="img">
          <img
            src={imagebath}
            alt="Bath"
            className="w-full h-full object-cover opacity-70"
          />
        </div>
        <div className="head absolute inset-0 flex flex-col items-start justify-center pl-8 sm:pl-12 md:pl-28 text-left">
          <h2 className="text-red-500 text-2xl sm:text-3xl">Categories</h2>
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl mt-2">Our work with Bath</h1>
        </div>
      </div>

      <div className="heading2 bg-black text-white p-6 sm:p-8 md:p-8 lg:p-12 flex flex-col md:flex-row overflow-hidden">
        <div className="relative flex-1 bg-black text-white overflow-hidden">
          <div className="video w-full md:w-7/8">
            <video
              className="w-full h-auto opacity-70"
              autoPlay
              muted
              loop
            >
              <source src={backgroundVideo2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center">
              Nothing Here Yet. Comeback soon.
            </h1>
          </div>
        </div>

        <div className="w-full md:w-1/3 text-center md:text-left md:flex md:flex-col md:justify-center mt-8 md:mt-0 md:pl-8">
          <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-red-600 pl-6 mb-4">
            Project Categories
          </h1>
          <ul className="space-y-4 text-lg pl-4 sm:pl-6 md:pl-7">
            <li>
              <a href="/#/totallook">Total Look</a>
            </li>
            <li>
              <a href="/#/kitchen">Kitchens</a>
            </li>
            <li>
              <a href="/#/Closets">Closets</a>
            </li>
            <li>
              <a href="/#/living" >Living</a>
            </li> 
          </ul>
          <button
            onClick={() => navigate("/contact")}
            className="relative text-white border border-white py-2 px-4 rounded-lg mt-8 hover:bg-red-500 transition duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-2xl"
          >
            <span className="absolute inset-0 border-white border transform scale-x-0 origin-right hover:scale-x-100 transition duration-300"></span>
            <span className="relative">Start Your Project</span>
          </button>
        </div>
      </div>

      <div className="bg-black text-white p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start">
        <div className="flex-1 max-w-screen-lg px-4 sm:px-8 md:pl-20">
          <h6 className="text-lg text-red-500 font-semibold mb-2">
            See Us in Person
          </h6>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Experience Custom Living
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6">
            For many, seeing is believing, but there's nothing quite like
            feeling. Visit us at our showroom in upper Georgetown to get the
            full experience.
          </p>
          <button onClick={() => navigate('/bookaAppointment')} className="relative text-white border border-white w-full sm:w-auto md:w-80 py-2 px-4 rounded-lg mt-4 hover:bg-red-500 transition duration-300 overflow-hidden transform hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-2xl">
            <span className="absolute inset-0 border-white border transform scale-x-0 origin-right hover:scale-x-100 transition duration-300"></span>
            <span className="relative">Book an Appointment</span>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default BathsPage;
