import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  EffectCoverflow,
  EffectFade,
  Pagination,
  Navigation,
} from "swiper/modules";
import { imageList } from "./data";

const ImageCard = () => {
  return (
    <div className="w-1/2 h-auto mb-10">
      <Swiper
        effect={"coverflow"} // Main effect
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={2} // Number of slides visible at once
        coverflowEffect={{
          rotate: 10, // Rotation for 3D effect
          stretch: 0,
          depth: 100, // Depth of the effect for spacing
          modifier: 1.5, // Adjust the spacing modifier
        }}
        pagination={{ clickable: true }} // Enable clickable pagination
        navigation={{
          nextEl: ".swiper-button-next", // Custom navigation classes
          prevEl: ".swiper-button-prev",
        }} // Enable navigation buttons
        modules={[EffectCoverflow, EffectFade, Pagination, Navigation]} // Include necessary modules
        className="swiper_container" // Custom class for styling
      >
        {imageList.map((image, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <img
              src={image.imageSrc}
              alt={`Slide ${index}`}
              className="w-full h-96 object-cover transition-transform duration-500 ease-in-out" // Added transition effect
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="swiper-button-prev bg-gray-800 text-white p-2 rounded-md">
        Prev
      </div>
      <div className="swiper-button-next bg-gray-800 text-white p-2 rounded-md">
        Next
      </div>
    </div>
  );
};

export default ImageCard;
