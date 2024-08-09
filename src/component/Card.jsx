import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Carousel = () => {
  const cards = [
    {
      id: 1,
      title: "01",
      content:
        "Binova has made its mark in the world of premium-quality kitchens, thanks to their focus on utilizing top-notch materials.",
    },
    {
      id: 2,
      title: "02",
      content:
        "Discover Italian craftsmanship; the flexibility you deserve. A selection of modular design that come in both modern and classic styles.",
    },
    {
      id: 3,
      title: "03",
      content:
        "Explore Unique design solutions to accommodate living and sleeping needs in an inexhaustible range of potential arrangements.",
    },
    {
      id: 4,
      title: "04",
      content:
        "Award winning stone fabricator with full service expertise in selections, design, & project execution of stone materials.",
    },
    {
      id: 5,
      title: "05",
      content:
        "Italian craftsmanship redefined. Impeccable designs that harmonize beauty and practicality, offering bespoke kitchens",
    },
    {
      id: 6,
      title: "06",
      content:
        "High craftsmanship Made in Italy meets innovation and technological research: this is how TM Italia kitchens",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative w-full  mx-auto py-4 px-10 bg-black">
      <Slider {...settings}>
        {cards.map((card) => (
          <div key={card.id} className="px-1 mt-10 ">
            <div className="bg-black p-2 shadow-md rounded-lg border-2 border-red-500 text-white transition-transform transform hover:scale-105 w-60 h-36">
              <h3 className="text-base font-bold ">{card.title}</h3>
              <p className="text-sm mt-2">{card.content}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "gray",
        borderRadius: "50%",
        right: "-20px",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <FaArrowRight className="text-white" />
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "gray",
        borderRadius: "50%",
        left: "-20px",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <FaArrowLeft className="text-white" />
    </div>
  );
};

export default Carousel;
