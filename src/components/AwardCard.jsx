import React from "react";

const AwardCard = ({ imageSrc, heading, paragraph }) => {
  return (
    <div className="bg-white flex flex-col gap-5 shadow-2xl rounded-xl p-4 hover:bg-[#AA8f00] group">
      <img
        src={imageSrc}
        alt="title"
        className="w-1/6 h-auto gap-2 group-hover:filter group-hover:brightness-0 group-hover:invert"
      />

      <h2 className="text-gray-400 text-md group-hover:text-white">
        {heading}
      </h2>

      <p className="text-lg pb-2 group-hover:text-white">{paragraph}</p>
    </div>
  );
};

export default AwardCard;
