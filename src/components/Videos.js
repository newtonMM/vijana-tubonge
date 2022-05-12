import React from "react";
import Slick from "react-slick";
import ReactPlayer from "react-player";

const data = [
  {
    video_title: "KBC",
    video_url: "https://youtu.be/a7OrQD6XodA",
  },
  {
    video_title: "Leaders talk",
    video_url: "https://youtu.be/Axe9GuTY2T8",
  },
  {
    video_title: "Introduction",
    video_url: "https://youtu.be/sf-p16e3z3E",
  },
  {
    video_title: "Inoora",
    video_url: "https://youtu.be/AJaQzjOyD6M",
  },
];
const videoSettings = {
  dots: true,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Videos = () => {
  const displayVideos = data.map((video) => (
    <div>
      <ReactPlayer
        url={video.video_url}
        width="inherit"
        height="40vh"
        style={{ minHeight: "318px" }}
      />
    </div>
  ));
  return (
    <div className="lg:shrink rounded-lg shadow-lg md:w-1/2 sm:flex-col w-full">
      <h1 className=" py-2 font-bold  uppercase text-center text-teal-600 text-xl place-self-center">
        Videos
      </h1>
      {data.length && <Slick {...videoSettings}>{displayVideos}</Slick>}
    </div>
  );
};

export default Videos;
