import React from "react";
import { services, servicesText } from "../components/data";
import ServicesCard from "../components/ServicesCard";
import Hero from "../components/Hero";
import ArrowButton from "../components/ArrowButton";

const Services = () => {
  return (
    <div className="bg-[#FCFBF5] ">
      <div className="container mx-auto px-6 py-20">
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
