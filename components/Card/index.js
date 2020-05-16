import React from "react";

function Card(props) {
  return (
    <div className="flex items-center">
      <img
        className="w-10 h-10 rounded-full mr-4"
        src={props.image}
        alt={"Avatar of" + props.name}
      />
      <div className="text-sm">
        <p className="text-gray-900 leading-none">{props.name}</p>
      </div>
    </div>
  );
}

export default Card;
