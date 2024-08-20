import React from "react";
import Navbar from "../component/Navbar";
import imageView from "../../src/assets/pexels-mtk402-2098912.jpg";
import imagepro from "../../src/assets/pexels-pixabay-271816.jpg";
import image1 from "../../src/assets/pexels-pixabay-276724.jpg";
import Footer from "../component/Footer";
import { useNavigate } from "react-router-dom";

function ViewProccess() {
  const navigate = useNavigate();

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
        <div className="absolute left-4 sm:left-10 md:left-28 p-4 sm:p-8">
          <h2 className="text-red-500 text-2xl sm:text-3xl font-semibold mb-2">
            Design Approach
          </h2>
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
            OUR Process
          </h1>
        </div>
      </div>

      <div className="bg-black text-left p-4 sm:p-8">
        <div className="commit sm:pl-10 md:pl-28">
          <h1 className="text-red-500 text-2xl sm:text-3xl font-bold mb-4">
            Committed to Excellence
          </h1>
          <p className="text-white w-full sm:w-2/3 text-sm sm:text-base leading-relaxed">
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

      <div className="flex flex-col md:flex-row bg-black text-white p-4 sm:p-8">
        <div className="flex flex-col md:flex-row items-start">
          <h1 className="text-red-500 text-5xl sm:text-7xl md:text-8xl pl-4 sm:pl-10 md:pl-20">01</h1>
          <div className="consultation mt-4 md:ml-6 flex-1">
            <h2 className="text-red-500 text-3xl sm:text-4xl mt-10 sm:mt-32 md:mt-44">
              Consultation & Discovery
            </h2>
            <p className="text-white mt-5 w-full sm:w-3/4 text-sm sm:text-base">
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
        <div className="client mt-8 grid gap-6 mr-0 sm:mr-10">
          <div className="head1 p-4 border-2 border-red-500 rounded-lg">
            <h6 className="text-red-500 text-lg">01</h6>
            <h1 className="text-white text-xl sm:text-2xl mt-2">
              Client Discovery & Style Exploration
            </h1>
            <p className="text-white mt-2 text-sm sm:text-base">
              First we take the time to connect with one another and explore the
              nuances and objectives of your project. As we discover your likes,
              dislikes, and vision for the space, we move on to reviewing
              references and photos as a source of inspiration.
            </p>
          </div>
          <div className="head2 p-4 border-2 border-red-500 rounded-lg">
            <h6 className="text-red-500 text-lg">02</h6>
            <h1 className="text-white text-xl sm:text-2xl mt-2">Samples & Swatches</h1>
            <p className="text-white mt-2 text-sm sm:text-base">
              Explore the creative possibilities and continue developing your
              mood-board. Our studio is stocked with a diverse collection of
              samples and swatches that can help you narrow down exactly what
              finish and material best suits your project.
            </p>
          </div>
          <div className="head3 p-4 border-2 border-red-500 rounded-lg">
            <h6 className="text-red-500 text-lg">03</h6>
            <h1 className="text-white text-xl sm:text-2xl mt-2">Space planning</h1>
            <p className="text-white mt-2 text-sm sm:text-base">
              Once we are provided measurements of the space, the LXRY team can
              start designing your project.
            </p>
          </div>
        </div>
      </div>
      <div className="img">
        <img src={imagepro} alt="" className="w-full h-auto"/>
      </div>

      <div className="flex flex-col md:flex-row bg-black text-white p-4 sm:p-8">
        <div className="flex flex-col md:flex-row items-start">
          <h1 className="text-red-500 text-5xl sm:text-7xl md:text-8xl pl-4 sm:pl-10 md:pl-20">02</h1>
          <div className="consultation mt-4 md:ml-6 flex-1">
            <h2 className="text-red-500 text-3xl sm:text-4xl mt-10 sm:mt-32 md:mt-44">Design Presentation</h2>
            <p className="text-white mt-5 w-full sm:w-3/4 text-sm sm:text-base">
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
        <div className="client mt-8 grid gap-6 mr-0 sm:mr-10">
          <div className="head1 p-4 border-2 border-red-500 rounded-lg">
            <h6 className="text-red-500 text-lg">01</h6>
            <h1 className="text-white text-xl sm:text-2xl mt-2">Presentation & Proposal</h1>
            <p className="text-white mt-2 text-sm sm:text-base">
              At this stage, our technical team will use the selected samples to
              develop 3D renderings of the newly designed space. The LXRY design
              consultant will present these concepts for the client to choose
              their final layout and material selections.
            </p>
          </div>
          <div className="head2 p-4 border-2 border-red-500 rounded-lg">
            <h6 className="text-red-500 text-lg">02</h6>
            <h1 className="text-white text-xl sm:text-2xl mt-2">Final Design Approval</h1>
            <p className="text-white mt-2 text-sm sm:text-base">
              After obtaining client approval on the design concept and
              finishes– we can confirm your order to begin the production
              process.
            </p>
          </div>
        </div>
      </div>
      <div className="img1">
        <img src={image1} alt="" className="w-full h-auto"/>
      </div>

      <div className="flex flex-col md:flex-row bg-black text-white p-4 sm:p-8">
        <div className="flex flex-col md:flex-row items-start">
          <h1 className="text-red-500 text-5xl sm:text-7xl md:text-8xl pl-4 sm:pl-10 md:pl-20">03</h1>
          <div className="consultation mt-4 md:ml-6 flex-1">
            <h2 className="text-red-500 text-3xl sm:text-4xl mt-10 sm:mt-32 md:mt-44">Logistics & Installation</h2>
            <p className="text-white mt-5 w-full sm:w-3/4 text-sm sm:text-base">
              Once the manufacturing process is complete, our team will begin
              the process of scheduling delivery and installation of the
              products. We coordinate all logistics and communication with the
              client and suppliers, including our experienced team of
              installers, in order to make the project as seamless as possible.
              You can rest easy knowing that our team is dedicated to
              transparency and constant communication with our clients,
              ensuring a successful project.
            </p>
          </div>
        </div>
        <div className="client mt-8 grid gap-6 mr-0 sm:mr-10">
          <div className="head1 p-4 border-2 border-red-500 rounded-lg">
            <h6 className="text-red-500 text-lg">01</h6>
            <h1 className="text-white text-xl sm:text-2xl mt-2">Execution</h1>
            <p className="text-white mt-2 text-sm sm:text-base">
              We can take care of all aspects of the installation, and our team
              is committed to making sure that the job is done to the highest
              standards. Your satisfaction is our number one priority.
            </p>
          </div>
          <div className="head2 p-4 border-2 border-red-500 rounded-lg">
            <h6 className="text-red-500 text-lg">02</h6>
            <h1 className="text-white text-xl sm:text-2xl mt-2">Completion</h1>
            <p className="text-white mt-2 text-sm sm:text-base">
              With completion of the installation process, your design vision
              has now become reality. Whether it is a full remodel or a single
              piece, our clients can expect nothing less than complete
              satisfaction.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ViewProccess;
