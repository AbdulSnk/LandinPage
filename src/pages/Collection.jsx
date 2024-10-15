import React from "react";
import { collections, collectionsText } from "../components/data";
import CollectionCard from "../components/CollectionCard";
import Hero from "../components/Hero";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Collection = () => {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    prevArrow: <button className="custom-prev-arrow">⬅</button>,
    nextArrow: <button className="custom-next-arrow">➡</button>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: true,
        },
      },
    ],
  };

  return (
    <div className="bg-[#F4F1E0] pt-20 pb-32">
      <div className="container mx-auto px-6">
        <Hero data={collectionsText} />
        {/* <div className="carousel carousel-center space-x-4 p-4 w-full sm:w-full"> */}
        <Slider {...settings}>
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
        </Slider>
        {/* </div> */}
      </div>
      <hr className="border-b-black w-1/3" />
    </div>
  );
};

export default Collection;
