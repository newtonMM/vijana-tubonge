import React from "react";
import Gallery from "./gallery";
import Videos from "./Videos";

const prefooter = () => {
  return (
    <div className="my-5">
      <h1 className=" py-2 font-bold  uppercase text-center text-teal-600 text-4xl place-self-center">
        Gallery
      </h1>
      <div className="flex flex-wrap">
        <Gallery />
        <Videos />
      </div>
    </div>
  );
};

export default prefooter;
