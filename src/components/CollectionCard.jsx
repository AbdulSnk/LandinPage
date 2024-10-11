import React from "react";

const CollectionCard = ({ imageSrc, label, icons, title }) => {
  return (
    <div className="card w-ful shadow-2xl py-5 px-3 rounded-xl">
      <img
        src={imageSrc}
        alt={label}
        className="w-full h-72 object-cover rounded-md overflow-hidden mb-4"
      />

      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold tracking-tight">{label}</h2>

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
      <p className="font-semibold">{title}</p>
    </div>
  );
};

export default CollectionCard;
