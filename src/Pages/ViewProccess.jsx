import React from "react";
import Navbar from "../component/Navbar";
import imageView from "../../src/assets/pexels-mtk402-2098912.jpg";
import imagepro from "../../src/assets/pexels-pixabay-271816.jpg";
import image1 from "../../src/assets/pexels-pixabay-276724.jpg";
import Footer from "../component/Footer";

function ViewProccess() {
  return (
    <div>
      <Navbar />
      <div className="relative flex items-center">
        <div className="w-full">
          <img
            src={imageView}
            alt=""
            className="w-full h-auto object-cover brightness-50"
          />
        </div>
        <div className="absolute left-28 p-6 sm:p-8 ">
          <h2 className="text-red-500 text-lg font-semibold mb-2">
            Design Approach
          </h2>
          <h1 className="text-white text-3xl sm:text-4xl font-bold">
            OUR Process
          </h1>
        </div>
      </div>
      <div className="bg-black text-left p-8">
        <div className="commit pl-28">
          <h1 className="text-red-500 text-3xl font-bold mb-4">
            Committed to Excellence
          </h1>
          <p className="text-white w-2/3 text-base leading-relaxed">
            A successful process is an invaluable asset for any project. A
            well-structured plan creates a clear roadmap that guides our team
            from concept to installation and beyond. LXRY carefully considers
            both form and function and lays out the roadmap for design and
            execution. From beginning to end, our team ensures that our
            materials are installed with accuracy and excellence, providing you
            peace of mind knowing that you have a reliable product that will
            provide years of service and add value to your property.
          </p>
        </div>
      </div>

      <div className=" flex consult bg-black text-white p-8">
        <div className="flex flex-col md:flex-row items-start">
          <h1 className="text-red-500 text-8xl pl-20">01</h1>
          <div className="consultation mt-4 md:ml-6 flex-1">
            <h2 className="text-red-500 text-4xl mt-44">
              Consultation & Discovery
            </h2>
            <p className="text-white mt-5 w-3/4 ">
              We understand that each client has their own unique style and
              preferences, so it is essential to provide an in-depth
              consultation and discovery process. This begins with a thorough
              discussion of the project goals, timeline, and budget. Our
              talented design team will work with you every step of the way to
              make sure we have a clear understanding of your specific
              requirements. We'll evaluate your space and tailor our services to
              satisfy all your individual needs.
            </p>
          </div>
        </div>
        <div className="client mt-8 grid  mr-10   gap-6">
          <div className="head1 p-4 border-2 border-red-500 rounded-lg ">
            <h6 className="text-red-500 text-lg">01</h6>
            <h1 className="text-white text-2xl mt-2">
              Client Discovery & Style Exploration
            </h1>
            <p className="text-white mt-2">
              First we take the time to connect with one another and explore the
              nuances and objectives of your project. As we discover your likes,
              dislikes, and vision for the space, we move on to reviewing
              references and photos as a source of inspiration.
            </p>
          </div>
          <div className="head2 p-4 border-2 border-red-500 rounded-lg">
            <h6 className="text-red-500 text-lg">02</h6>
            <h1 className="text-white text-2xl mt-2">Samples & Swatches</h1>
            <p className="text-white mt-2">
              Explore the creative possibilities and continue developing your
              mood-board. Our studio is stocked with a diverse collection of
              samples and swatches that can help you narrow down exactly what
              finish and material best suits your project.
            </p>
          </div>
          <div className="head3 p-4 border-2 border-red-500 rounded-lg">
            <h6 className="text-red-500 text-lg">03</h6>
            <h1 className="text-white text-2xl mt-2">Space planning</h1>
            <p className="text-white mt-2">
              Once we are provided measurements of the space, the LXRY team can
              start designing your project.
            </p>
          </div>
        </div>
      </div>
      <div className="img">
        <img src={imagepro} alt="" />
      </div>

      <div className=" flex consult bg-black text-white p-8">
        <div className="flex flex-col md:flex-row items-start">
          <h1 className="text-red-500 text-8xl pl-20">02</h1>
          <div className="consultation mt-4 md:ml-6 flex-1">
            <h2 className="text-red-500 text-4xl mt-44">Design Presentation</h2>
            <p className="text-white mt-5 w-3/4 ">
              The design phase of our process is the key to ensuring success, as
              we apply all the information gathered from the discovery process
              into the design vision. We ensure all aspects include the needs
              and expectations outlined to create our clients dream space.
              During this phase we create 3D renderings of the space that focus
              on both functionality and aesthetics. By providing both
              visualizations and comprehensive details during this stage of the
              project, we can confidently develop spaces that match our
              standards and satisfy our clients.
            </p>
          </div>
        </div>
        <div className="client mt-8 grid  mr-10   gap-6">
          <div className="head1 p-4 border-2 border-red-500 rounded-lg ">
            <h6 className="text-red-500 text-lg">01</h6>
            <h1 className="text-white text-2xl mt-2">
              Presentation & Proposal
            </h1>
            <p className="text-white mt-2">
              At this stage, our technical team will use the selected samples to
              develop 3D renderings of the newly designed space. The LXRY design
              consultant will present these concepts for the client to choose
              their final layout and material selections.
            </p>
          </div>
          <div className="head2 p-4 border-2 border-red-500 rounded-lg">
            <h6 className="text-red-500 text-lg">02</h6>
            <h1 className="text-white text-2xl mt-2">Final Design Approval</h1>
            <p className="text-white mt-2">
              After obtaining client approval on the design concept and
              finishes– we can confirm your order to begin the production
              process.
            </p>
          </div>
        </div>
      </div>

      <div className="img1">
        <img src={image1} alt="" />
      </div>

      <div className=" flex consult bg-black text-white p-8">
        <div className="flex flex-col md:flex-row items-start">
          <h1 className="text-red-500 text-8xl pl-20">03</h1>
          <div className="consultation mt-4 md:ml-6 flex-1">
            <h2 className="text-red-500 text-4xl mt-44">
              EXECUTION & INSTALLATION
            </h2>
            <p className="text-white mt-5 w-3/4 ">
              At LXRY, we understand the importance of precise execution and
              installation of your custom cabinetry. Every step in the
              installation process is closely monitored with attention to detail
              and quality assurance. Our team has been specially trained in all
              aspects of European cabinetry, ensuring the highest level of
              craftsmanship and precision during every phase of installation. We
              use state-of-the-art tools and technologies to ensure that your
              cabinets are installed as designed to secure longevity and
              function.
            </p>
          </div>
        </div>
        <div className="client mt-8 grid  mr-10   gap-6">
          <div className="head1 p-4 border-2 border-red-500 rounded-lg ">
            <h6 className="text-red-500 text-lg">01</h6>
            <h1 className="text-white text-2xl mt-2">
              Product Ordering & Tracking
            </h1>
            <p className="text-white mt-2">
              The designer will work diligently with our overseas partners to
              guarantee your order is brought into production in a timely manner
              and that you remain informed of its progress. From the order date
              to the scheduled installation, delivery can be expected within
              four months.
            </p>
          </div>
          <div className="head2 p-4 border-2 border-red-500 rounded-lg">
            <h6 className="text-red-500 text-lg">02</h6>
            <h1 className="text-white text-2xl mt-2">
              Item Procurement & Storage
            </h1>
            <p className="text-white mt-2">
              Upon delivery, if your project isn't ready for installation our
              designer will coordinate with you to house your order in our
              storage facility while your project site is being prepared for the
              cabinetry.
            </p>
          </div>
          <div className="head2 p-4 border-2 border-red-500 rounded-lg">
            <h6 className="text-red-500 text-lg">03</h6>
            <h1 className="text-white text-2xl mt-2">
              Project Management & Installation
            </h1>
            <p className="text-white mt-2">
              Our experienced team at LXRY will manage and execute the
              installation of the cabinetry as crafting European cabinetry is an
              art that requires highly specialized knowledge and training.
              Masterful craftsmanship must be applied with precision.
            </p>
          </div>
          <div className="head2 p-4 border-2 border-red-500 rounded-lg">
            <h6 className="text-red-500 text-lg">04</h6>
            <h1 className="text-white text-2xl mt-2">
              The Reveal & Project Wrap Up
            </h1>
            <p className="text-white mt-2">
              After months of patiently anticipating your dream space becoming a
              reality, it finally comes time for the reveal! The designer
              proudly presents the completed project to the client for a final
              review and celebration of the project completion.
            </p>
          </div>
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
          <button className="relative text-white border border-white w-full sm:w-auto md:w-80 py-2 px-4 rounded-lg mt-4 hover:bg-red-500 transition duration-300 overflow-hidden transform hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-2xl">
            <span className="absolute inset-0 border-white border transform scale-x-0 origin-right hover:scale-x-100 transition duration-300"></span>
            <span className="relative">Book an Appointment</span>
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default ViewProccess;
