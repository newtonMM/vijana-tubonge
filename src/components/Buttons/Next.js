import React from "react";
import { ArrowRightIcon } from "@heroicons/react/outline";

const Next = (props) => {
  const { onClick } = props;

  return (
    <div
      className="absolute block translate-y-[10rem] top-2 cursor-pointer right-[5%]"
      onClick={() => onClick()}
    >
      <ArrowRightIcon className="h-10 w-14 text-teal-400" />
    </div>
  );
};

export default Next;
