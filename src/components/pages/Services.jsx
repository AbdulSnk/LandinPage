import React from "react";
import { services, servicesText } from "../data";
import ServicesCard from "../ServicesCard";
import Hero from "../Hero";
import ArrowButton from "../ArrowButton";

const Services = () => {
  return (
    <div className="bg-[#FCFBF5] ">
      <div className="container mx-auto px-4 py-20">
        <Hero data={servicesText} />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <ServicesCard
              key={index}
              imageSrc={service.imageSrc}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        <ArrowButton />
      </div>
    </div>
  );
};

export default Services;
