import React from "react";
import { features, featuresText } from "../components/data";
import Card from "../components/Card";
import Hero from "../components/Hero";
import ArrowButton from "../components/ArrowButton";
// import ImageCard from "../components/";

const Feature = () => {
  return (
    <div className="w-full container mx-auto px-6 py-20">
      <div className="">
        <Hero data={featuresText} />
        {/* <ImageCard /> */}
      </div>
      <div className="grid md:grid-cols-3 gap-8 sm:flex justify-between sm:gap-15">
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
