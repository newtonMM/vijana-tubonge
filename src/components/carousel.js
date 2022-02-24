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
    btn_link:
      "https://cdn.pixabay.com/photo/2020/05/31/11/19/firemen-5242315_960_720.jpg",
    btn_caption: " join us",
    imageUrl: image2,
  },
  {
    caption: "'cause an act of charity creates and endless ripple",
    btn_link:
      "https://cdn.pixabay.com/photo/2020/05/31/11/19/firemen-5242315_960_720.jpg",
    btn_caption: " contact us",
    imageUrl: image1,
  },
  {
    caption: "Every prominent achiever is inspired by a brilliant mentor",
    btn_link:
      "https://cdn.pixabay.com/photo/2020/05/31/11/19/firemen-5242315_960_720.jpg",
    btn_caption: " contact us",
    imageUrl: image3,
  },
  {
    caption:
      " To maintain and promote health, not only physically but also mentally, emotionally, socially and spiritually.",
    btn_link:
      "https://cdn.pixabay.com/photo/2020/05/31/11/19/firemen-5242315_960_720.jpg",
    btn_caption: " contact us",
    imageUrl: image4,
  },
  {
    caption: " cause an act of charity creates and endless ripple",
    btn_link:
      "https://cdn.pixabay.com/photo/2020/05/31/11/19/firemen-5242315_960_720.jpg",
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
        className="flex  bg-white mx-auto max-w-7xl px-4  lg:h-full sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 sm:items-center"
      >
        <div className="flex-grow sm:text-center lg:text-left my-5">
          <h1 className="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
            <span className="flex-grow text-teal-700 xl:inline">
              {itms.caption.toUpperCase()}
            </span>
          </h1>
          <div className=" flex-grow sm:mt-8 sm:justify-center lg:justify-start my-5">
            <div className="rounded-md shadow lg:w-48">
              <a
                href={itms.btn_link}
                className="flex items-center justify-center border border-transparent text-base font-medium rounded-md text-white bg-teal-700 hover:bg-teal-700 md:py-4 md:text-lg md:px-10"
              >
                {itms.btn_caption.toUpperCase()}
              </a>
            </div>
          </div>
        </div>
        <div className="invisible md:visible flex-grow items-start lg:relative h-1/2 w-2/4">
          <img
            className=" sm:h-72 md:h-96 lg:w-auto lg:h-1/2 rounded"
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
    <main className="lg:h-4/5 lg:py-10 shadow-inner md:py-5  sm:items-center sm:my-3">
      {data && data.length > 0 && <Slick {...lowerSettings}>{display}</Slick>}
    </main>
  );
};

export default LandingPage;
