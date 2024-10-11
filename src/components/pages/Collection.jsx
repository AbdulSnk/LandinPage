import React from "react";
import { collections, collectionsText } from "../data";
import CollectionCard from "../CollectionCard";
import Hero from "../Hero";

const Collection = () => {
  return (
    <div className="bg-[#F4F1E0] pt-20 pb-32">
      <div className="container mx-auto px-4   ">
        <Hero data={collectionsText} />
        <div className="carousel carousel-center space-x-4 p-4">
          {collections.map((collection, index) => (
            <div className="carousel-item">
              <CollectionCard
                key={index}
                imageSrc={collection.imageSrc}
                label={collection.label}
                icons={collection.icons}
                title={collection.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
