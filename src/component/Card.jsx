import React from "react";

function Cards() {
  const cards = [
    {
      title: "01",
      heading: "Binova logo",
      description:
        "This is the first card consectetur adipisicing elit.Nisi ipsa alias voluptate?.consectetur adipisicing elit. Nisi ipsa alias voluptate?",
    },
    {
      title: "02",
      heading: "Binova logo",
      description:
        "This is the second card consectetur adipisicing elit.Nisi ipsa alias voluptate?.consectetur adipisicing elit. Nisi ipsa alias voluptate?",
    },
    {
      title: "03",
      heading: "Binova logo",
      description:
        "This is the third card consectetur adipisicing elit.Nisi ipsa alias voluptate?.consectetur adipisicing elit. Nisi ipsa alias voluptate?",
    },
    {
      title: "04",
      heading: "Binova logo",
      description:
        "This is the fourth card consectetur adipisicing elit.Nisi ipsa alias voluptate?.consectetur adipisicing elit. Nisi ipsa alias voluptate?",
    },
    {
      title: "05",
      heading: "Binova logo",
      description:
        "This is the fifth card consectetur adipisicing elit.Nisi ipsaalias voluptate?.consectetur adipisicing elit. Nisi ipsa alias voluptate?",
    },
    {
      title: "06",
      heading: "Binova logo",
      description:
        "This is the sixth card consectetur adipisicing elit.Nisi ipsaalias voluptate?.consectetur adipisicing elit. Nisi ipsa alias voluptate?",
    },
  ];

  return (
    <div>
      {/* Affiliations and Partners Section */}
      {/* <div className="bg-black text-white p-8">
        
        <h6 className="text-sm font-semibold ml-4 text-red-500 sm:ml-20">Affiliations</h6>
        <h1 className="text-3xl font-bold mb-4 text-center sm:text-left sm:ml-20">Partners</h1>
        <div className="flex flex-col sm:flex-row mt-4 ml-4 sm:ml-20">
          <p className="mb-6 sm:w-1/2">
            To provide our clients with the best Italian designs, we collaborate
            with renowned brands and proudly present their catalogues. Browse
            through the various collections and get inspired to create new fresh
            looks for your interiors.
          </p>
          <button className="relative text-white border border-white ml-10 w-80 py-2 px-4 rounded-lg mt-4 hover:bg-red-500 transition duration-300 overflow-hidden transform hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-2xl">
  <span className="absolute  border-white border transform scale-x-0 origin-right hover:scale-x-100 transition duration-300"></span>
  <span className="relative">  Learn More</span>
</button>
       
        </div>
      </div> */}

      {/* Cards Section */}
      <div className="p-8 bg-black text-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {cards.slice(0, 4).map((card, index) => (
            <div
              key={index}
              className="border border-red-600  rounded-lg p-4 hover:bg-red-600 hover:border-red-800 transition duration-300"
            >
              <h2 className=" text-lg font-semibold ">{card.title}</h2>
              <h1 className="text-xl font-bold text-center mb-2 mt-6 ">{card.heading}</h1>
              <p className="text-center mt-6 text-justify w-40 ml-14">{card.description}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 w-full lg:w-1/2 ml-1 mx-auto">
          {cards.slice(4, 6).map((card, index) => (
            <div
              key={index}
              className="border border-red-600 rounded-lg p-4 hover:bg-red-600 hover:border-red-800 transition duration-300"
            >
              <h2 className="text-lg font-semibold ">{card.title}</h2>
              <h1 className="text-xl font-bold text-center mb-2 mt-6">{card.heading}</h1>
              <p className="text-center mt-6 text-justify w-40 ml-14">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards;
