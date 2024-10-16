import React from "react";
import slider from "react-slick/lib/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Card = ({ imageSrc, title, description }) => {
  return (
    <div className="card w-full sm:w-2/3 md:w-[22rem] text-center md:text-left shadow-sm rounded-sm py-4  overflow-hidden group-hover:rotate-3 group-hover:scale-125 transition-transform ">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-auto mx-auto object-cover object-fi  rounded-md shadow-lg mb-4 "
      />
      <div className="group-hover:translate-y-0 transition-all ">
        <h2 className="text-lg font-bold md:text-xl lg:font-medium tracking-normal  mb-2 ">
          {title}
        </h2>
        <p className="text-base sm:text-md ">{description}</p>
      </div>
    </div>
  );
};
export default Card;
