import React from "react";
import NextImg from "../../assets/icons/next.png";

const Next = (props) => {
  const { onClick } = props;

  return (
    <div className="absolute block w-14 h-2 " onClick={() => onClick()}>
      <img src={NextImg}></img>
    </div>
  );
};

export default Next;
