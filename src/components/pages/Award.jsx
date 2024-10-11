import React from "react";
import Hero from "../Hero";
import { awards, awardText } from "../data";
import AwardCard from "../AwardCard";

const Award = () => {
  return (
    <div className="bg-[#FCFBF5] py-20">
      <div className="container mx-auto px-4">
        <Hero data={awardText} />

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 pb-6">
          {awards.map((award, index) => (
            <div key={index}>
              <AwardCard
                imageSrc={award.imageSrc}
                heading={award.heading}
                paragraph={award.paragraph}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Award;
