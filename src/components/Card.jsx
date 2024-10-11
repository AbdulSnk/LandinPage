import React from "react";
import slider from "react-slick/lib/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Card = ({ imageSrc, title, description }) => {
  return (
    <div className="card w-96 shadow-sm rounded-sm py-4  overflow-hidden group-hover:rotate-3 group-hover:scale-125 transition-transform ">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-3/4 mx-auto object-cover rounded-sm shadow-lg mb-4 "
      />
      <div className="group-hover:translate-y-0 transition-all">
        <h3 className="text-lg tracking-tight mb-2 ">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};
export default Card;
