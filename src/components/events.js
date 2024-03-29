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
    event_description: "pads donation",
    date: "01/01 2022",
    poster: img,
  },
  {
    event_name: "Rivers of joy",
    event_description: "childrens home visit",
    date: "01/01 2022",
    poster: img,
  },
  {
    event_name: "General Meeting",
    event_description: "Members meeting",
    date: "01/01 2022",
    poster: img,
  },
  {
    event_name: "General Meeting",
    event_description: "Some other meeting",
    date: "01/01 2022",
    poster: img,
  },
];

const Events = () => {
  const eventsCard =
    data &&
    data.map((itms, index) => (
      <div key={index} className="my-5 w-52 h-72 place-self-center">
        <p className="text-2xl text-gray-900 leading-8 tracking-tight mb-2 font-bold">
          {itms.event_name}
        </p>
        <img className="h-full w-full object-center mb-2" src={itms.poster} alt='poster' />
        <p className="text-xl leading-8  tracking-tight text-gray-900">
          {itms.event_description}
        </p>
        <p className="text-base leading-8  tracking-tight text-gray-900">
          {itms.date}
        </p>
      </div>
    ));
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    mobileFirst: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <div id="events" className="container m-auto sm:px-20 px-8 mb-24 pt-16">
      <div>
        <h1 className="font-bold uppercase text-center text-teal-600 text-4xl place-self-center py-12">
          Upcoming Events{" "}
        </h1>
      </div>
      <div className="place-self-center">
        {data && data.length > 0 && <Slick {...settings}>{eventsCard}</Slick>}
      </div>

      <div className="flex justify-center mt-8">
        <a
          href="/"
          className="mt-7 mb-2 rounded-md shadow items-center justify-center border border-transparent text-base font-medium rounded-md text-white bg-teal-700 hover:bg-gray-300 md:py-4 md:text-lg md:px-10 px-4 py-2"
        >
          See all events
        </a>
      </div>
    </div>
  );
};

export default Events;
