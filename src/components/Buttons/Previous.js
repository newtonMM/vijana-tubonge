import React from "react";
import Prev from "../../assets/icons/previous.png";

const Previous = (props) => {
  const { onClick } = props;
  return (
    <div className="absolute block w-14 h-2" onClick={() => onClick()}>
      <img src={Prev}></img>
    </div>
  );
};

export default Previous;
