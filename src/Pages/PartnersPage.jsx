import React from "react";
import Navbar from "../component/Navbar";
import imagepart from "../../src/assets/pexels-vika-glitter-392079-1648771.jpg";
import image1 from "../../src/assets/pexels-vika-glitter-392079-1648776.jpg";
import imageLiving from "../../src/assets/pexels-fotoaibe-1571460.jpg";
import imageLiving1 from "../../src/assets/pexels-fotoaibe-1643383.jpg";
import imageLiving2 from "../../src/assets/pexels-heyho-5998138.jpg";
import imagekitchen from "../../src/assets/pexels-heyho-6969870 (1).jpg";
import  imagekitchen1 from "../../src/assets/pexels-heyho-6969864.jpg";
import imagekitchen2  from "../../src/assets/pexels-heyho-6969870 (1).jpg";
import imagekitchen3 from "../../src/assets/pexels-orlovamaria-4947126.jpg";
import Footer from "../component/Footer";
import { useNavigate } from "react-router-dom";

function PartnersPage() {

  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="relative bg-black">
        <div className="img">
          <img
            src={imagepart}
            alt=""
            className="w-full h-full object-cover opacity-70"
          />
        </div>
        <div className="head absolute inset-0 flex flex-col items-start justify-center pl-28 text-left">
          <h2 className="text-red-500 text-3xl">affiliations</h2>
          <h1 className="text-white text-6xl mt-2">partners</h1>
        </div>
      </div>

      <div className="secd bg-black text-white p-28">
        <h2 className="text-red-500 text-3xl mb-4">Get Inspired</h2>
        <h1 className="text-white text-4xl leading-tight w-3/4">
          Find Inspiration for your next project in our Partner's Catalogues.
        </h1>
      </div>

      <div className="img">
        <img src={image1} alt="" />
      </div>
      <div className="bg-black text-white p-8 flex flex-col md:flex-row">
        <div className="head1 flex-1 md:mr-8 pl-28">
          <h1 className="text-red-500 text-8xl mb-4 mt-6">01</h1>
          <h2 className="text-white text-3xl mb-4 mt-6">Binova logo</h2>
          <p className="text-white mt-7 w-4/5">
            One of the leading brands in Italian kitchen design, creating
            important innovations in the industry. We strive to remain among the
            top choices for people looking for modern and high-quality kitchens.
            We have proudly established ourselves as ambassadors of Italian
            design worldwide by providing luxury kitchens with a combination of
            technological research, testing of new materials and authentic
            craftsmanship. Our luxurious kitchens stand out for their utmost
            sophistication and elegance.
          </p>
        </div>
        <div className="img flex-1 flex flex-col  gap-6 mt-8 md:mt-0">
          <img src={imageLiving} alt="" className="w-96 mt-6  object-cover" />
          <img src={imageLiving1} alt="" className="w-96  object-cover" />
          <img src={imageLiving2} alt="" className="w-96  object-cover" />
        </div>
      </div>
      <div className="img">
        <img src={imagekitchen} alt="" />
      </div>

      <div className="bg-black text-white p-8 flex flex-col md:flex-row">
        <div className="head1 flex-1 md:mr-8 pl-28">
          <h1 className="text-red-500 text-8xl mb-4 mt-6">02</h1>
          <h2 className="text-white text-3xl mb-4 mt-6">Binova logo</h2>
          <p className="text-white mt-7 w-4/5">
            Known to be one of the biggest exporters of modular kitchens, Miton
            kitchens supply a range of high-quality, contemporary kitchens as
            well as classic and luxury kitchen styles to choose from. Miton
            design kitchen concepts blend naturally with contemporary lifestyles
            and transform their kitchens into spaces suited to everyone's
            individual tastes and requirements. Their designs offer maximum
            freedom of configurations as well as customization of materials and
            colours.
          </p>
        </div>
        <div className="img flex-1 flex flex-col  gap-6 mt-8 md:mt-0">
          <img src={imagekitchen1} alt="" className="w-96 mt-6  object-cover" />
          <img src={imagekitchen2} alt="" className="w-96  object-cover" />
          <img src={imagekitchen3} alt="" className="w-96  object-cover" />
        </div>
      </div>


      <div className="bg-black text-white p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start">
        <div className="flex-1 max-w-screen-lg pl-20">
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
          <button onClick={()=>navigate('/bookaAppointment')} className="relative text-white border border-white w-full sm:w-auto md:w-80 py-2 px-4 rounded-lg mt-4 hover:bg-red-500 transition duration-300 overflow-hidden transform hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-2xl">
            <span className="absolute inset-0 border-white border transform scale-x-0 origin-right hover:scale-x-100 transition duration-300"></span>
            <span className="relative">Book an Appointment</span>
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default PartnersPage;
