import React from "react";

const ServicesCard = ({ imageSrc, title, description }) => {
  return (
    <div className="card shadow-xl rounded-lg py-6 px-3 overflow-hidden">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-auto object-cover rounded-lg shadow-lg mb-4"
      />
      <h3 className="text-lg tracking-tight mb-2 ">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default ServicesCard;
