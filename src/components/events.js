import React from "react";
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "./Buttons/Next";
import PrevArrow from "./Buttons/Previous";
import img from "../assets/imgs/posters/poster.jpeg";

const data = [
  {
    event_name: "Nilishe",
    event_description: "Some text hear",
    date: "01/01 2022",
    poster: img,
  },
  {
    event_name: "Pads Drive",
    event_description: "Some text hear",
    date: "01/01 2022",
    poster: img,
  },
  {
    event_name: "Rivers of joy",
    event_description: "Some text hear",
    date: "01/01 2022",
    poster: img,
  },
  {
    event_name: "General Meeting",
    event_description: "Some text hear",
    date: "01/01 2022",
    poster: img,
  },
  {
    event_name: "General Meeting",
    event_description: "Some text hear",
    date: "01/01 2022",
    poster: img,
  },
];

const Events = () => {
  const eventsCard =
    data &&
    data.map((itms, index) => (
      <div key={index} className="my-5 w-52 h-72">
        <p className="text-2xl text-gray-900 leading-8  tracking-tight">
          {itms.event_name}
        </p>
        <img className="h-full w-full object-center" src={itms.poster} />
        <p className="text-xl leading-8  tracking-tight text-gray-900">
          {itms.event_description}
        </p>
        <p className="text-base leading-8  tracking-tight text-gray-900">
          {itms.date}
        </p>
      </div>
    ));
  const Settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 3,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="">
      <h1 className="font-bold  uppercase text-center text-teal-600 text-4xl">
        Upcoming Events{" "}
      </h1>
      {data && data.length > 0 && <Slick {...Settings}>{eventsCard}</Slick>}
    </div>
  );
};

export default Events;
