import React from "react";

function Cards() {
  const cards = [
    {
      title: "Card 1",
      description:
        "This is the first card consectetur adipisicing elit. Nisi ipsa alias voluptate?.consectetur adipisicing elit. Nisi ipsa alias voluptate?",
    },
    {
      title: "Card 2",
      description:
        "This is the second card consectetur adipisicing elit. Nisi ipsa alias voluptate?.consectetur adipisicing elit. Nisi ipsa alias voluptate?",
    },
    {
      title: "Card 3",
      description:
        "This is the third card consectetur adipisicing elit. Nisi ipsa alias voluptate?.consectetur adipisicing elit. Nisi ipsa alias voluptate?",
    },
    {
      title: "Card 4",
      description:
        "This is the fourth card consectetur adipisicing elit. Nisi ipsa alias voluptate?.consectetur adipisicing elit. Nisi ipsa alias voluptate?",
    },
    {
      title: "Card 5",
      description:
        "This is the fifth card consectetur adipisicing elit. Nisi ipsa alias voluptate?.consectetur adipisicing elit. Nisi ipsa alias voluptate?",
    },
    {
      title: "Card 6",
      description:
        "This is the sixth card consectetur adipisicing elit. Nisi ipsa alias voluptate?.consectetur adipisicing elit. Nisi ipsa alias voluptate?",
    },
  ];

  return (
    <div>
      {/* Affiliations and Partners Section */}
      <div className="bg-black text-white p-8">
        <h6 className="text-sm font-semibold ml-4 text-red-500 sm:ml-20">Affiliations</h6>
        <h1 className="text-3xl font-bold mb-4 ml-4 sm:ml-20">Partners</h1>
        <div className="flex flex-col sm:flex-row mt-4 ml-4 sm:ml-20">
          <p className="mb-6 sm:w-1/2">
            To provide our clients with the best Italian designs, we collaborate
            with renowned brands and proudly present their catalogues. Browse
            through the various collections and get inspired to create new fresh
            looks for your interiors.
          </p>
          <button className="sm:ml-16 mt-3 w-76 h-10 flex px-6 py-2 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition duration-300">
            Learn More
          </button>
          {/* <button className="w-full sm:w-1/2 md:w-3/4 lg:w-1/2 mt-6 px-6 py-2 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition duration-300">
          Learn More
          </button> */}
        </div>
      </div>

      {/* Cards Section */}
      <div className="p-8 bg-black text-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {cards.slice(0, 4).map((card, index) => (
            <div
              key={index}
              className="border border-red-600 rounded-lg p-4 hover:bg-red-600 hover:border-red-800 transition duration-300"
            >
              <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 w-full lg:w-1/2 ml-1 mx-auto">
          {cards.slice(4, 6).map((card, index) => (
            <div
              key={index}
              className="border border-red-600 rounded-lg p-4 hover:bg-red-600 hover:border-red-800 transition duration-300"
            >
              <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards;
