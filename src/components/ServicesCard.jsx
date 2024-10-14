import React from "react";

const ServicesCard = ({ imageSrc, title, description }) => {
  return (
    <div className="card w-full lg:w-[24rem] shadow-sm rounded-lg pt-6 px-3 overflow-hidden">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-4/6 object-cover rounded-lg shadow-inner mb-4"
      />
      <h3 className="text-lg tracking-wide font-bold lg:text-lg lg:font-medium mb-2 ">
        {title}
      </h3>
      <p className="text-sm font-semibold lg:font-light lg:text-sm ">
        {description}
      </p>
    </div>
  );
};

export default ServicesCard;
