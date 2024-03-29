import React from "react";
import { ArrowLeftIcon } from "@heroicons/react/outline";

const Previous = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute block translate-y-[10rem] top-2 cursor-pointer left-[-6%]"
      onClick={() => onClick()}
    >
      <ArrowLeftIcon className="h-10 w-14 text-teal-400" />
    </div>
  );
};

export default Previous;
