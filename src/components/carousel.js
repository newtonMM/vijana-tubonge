import React from "react";
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/illustrations/slide1.svg";
import image2 from "../assets/illustrations/slide2.svg";
import image3 from "../assets/illustrations/slide3.svg";
import image4 from "../assets/illustrations/slide4.svg";
import image5 from "../assets/illustrations/slide5.svg";

const data = [
  {
    caption: "Nothing For us without us ",
    btn_link: "#contacts",
    btn_caption: " join us",
    imageUrl: image2,
  },
  {
    caption: "'cause an act of charity creates and endless ripple",
    btn_link: "#contacts",
    btn_caption: " contact us",
    imageUrl: image1,
  },
  {
    caption: "Every prominent achiever is inspired by a brilliant mentor",
    btn_link: "#contacts",
    btn_caption: " contact us",
    imageUrl: image3,
  },
  {
    caption:
      "To maintain and promote health,physically mentally, emotionally, socially and spiritually.",
    btn_link: "#contacts",
    btn_caption: " contact us",
    imageUrl: image4,
  },
  {
    caption: "cause an act of charity creates and endless ripple",
    btn_link: "#contacts",
    btn_caption: " contact us",
    imageUrl: image5,
  },
];

const LandingPage = () => {
  const display =
    data &&
    data.map((itms, index) => (
      <div
        key={index}
        className="grid place-items-center grid-gap-2  md:grid-cols-2 m-auto bg-white px-4 lg:px-8"
      >
        <div className="md:pl-20 mt-5 md:text-left">
          <h1 className="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
            <span className="text-teal-700 xl:inline">
              {itms.caption.toUpperCase()}
            </span>
          </h1>

          <div className="rounded-md md:pt-10 md:self-start pt-2 ">
            <a
              href={itms.btn_link}
              className="justify-center  border border-transparent text-base font-medium rounded-md text-white bg-teal-700 hover:bg-teal-700 md:py-4 md:text-lg md:px-10 px-4 py-2"
            >
              {itms.btn_caption.toUpperCase()}
            </a>
          </div>
        </div>
        <div className="hidden md:inline items-start lg:h-1/2 w-9/12 md:pr-10">
          <img
            className="lg:w-auto lg:full rounded"
            src={itms.imageUrl}
            alt="imag2"
          />
        </div>
      </div>
    ));

  const lowerSettings = {
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          swipeToSlide: true,
        },
      },
    ],
  };

  return (
    <div
      id="home"
      className="grow h-4/5 w-full place-items-center m-auto py-6 shadow-inner mb-24 pt-16"
    >
      {data && data.length > 0 && <Slick {...lowerSettings}>{display}</Slick>}
    </div>
  );
};

export default LandingPage;
