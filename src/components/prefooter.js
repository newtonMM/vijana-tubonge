import React from "react";
import Gallery from "./gallery";
import Videos from "./Videos";

const prefooter = () => {
  return (
    <div id="gallery" className="my-5 mb-24 pt-16	">
      <h1 className=" py-2 font-bold  uppercase text-center text-teal-600 text-4xl place-self-center py-12">
        Gallery
      </h1>
      <div className="flex md:flex-row flex-col">
        <Gallery />
        <Videos />
      </div>
    </div>
  );
};

export default prefooter;
