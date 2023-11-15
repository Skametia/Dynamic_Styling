import React from "react";

const Card = (props) => {
  return <div className={`S{props.className}`}>{props.children}</div>;
};

export default Card;
