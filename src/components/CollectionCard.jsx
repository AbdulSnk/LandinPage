import React from "react";

const CollectionCard = ({ imageSrc, label, icons, title }) => {
  return (
    <div className="card w-full sm:w-2/3 md:w-10/12 sm:text-left shadow-white py-5 px-3 rounded-xl">
      <img
        src={imageSrc}
        alt={label}
        className="w-[20rem] h-56 mx-auto object-cover rounded-md overflow-hidden mb-4"
      />

      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-bold md:text-2xl lg:text-lg lg:font-medium  tracking-wide">
          {label}
        </h2>

        <div className="flex space-x-2">
          {icons.map((icon, index) => (
            <img
              key={index}
              src={icon.img}
              alt={`icon-${index}`}
              className="w-10 h-8"
            />
          ))}
          <hr className="border-[#525252]" />
        </div>
      </div>
      <p className="font-semibold text-lg md:text-2xl lg:text-lg tracking-wide ">
        {title}
      </p>
    </div>
  );
};

export default CollectionCard;
