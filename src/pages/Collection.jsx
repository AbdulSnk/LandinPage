import React from "react";
import { collections, collectionsText } from "../components/data";
import CollectionCard from "../components/CollectionCard";
import Hero from "../components/Hero";

const Collection = () => {
  return (
    <div className="bg-[#F4F1E0] pt-20 pb-32">
      <div className="container mx-auto px-6">
        <Hero data={collectionsText} />
        <div className="carousel carousel-center space-x-4 p-4 w-full sm:w-full">
          {collections.map((collection, index) => (
            <div className="carousel-item  key={index}">
              <CollectionCard
                imageSrc={collection.imageSrc}
                label={collection.label}
                icons={collection.icons}
                title={collection.title}
              />
            </div>
          ))}
        </div>
      </div>
      <hr className="border-b-black w-1/3" />
    </div>
  );
};

export default Collection;
