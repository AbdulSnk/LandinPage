import React from "react";
import { features, featuresText } from "../data";
import Card from "../Card";
import Hero from "../Hero";
import ArrowButton from "../ArrowButton";
import ImageCard from "../imageCard";

const Feature = () => {
  return (
    <div className="w-full container mx-auto px-4 py-20">
      <div className="flex flex-cols justify-between gap-20">
        <Hero data={featuresText} />
        {/* <ImageCard /> */}
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <Card
            key={index}
            imageSrc={feature.imageSrc}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
      <ArrowButton />
    </div>
  );
};

export default Feature;
