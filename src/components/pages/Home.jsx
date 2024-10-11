import React, { useState } from "react";
import bgImage from "../../assets/img/bg.png";
import { Menu, ArrowRight } from "lucide-react";

const Home = ({ setClicked, clicked }) => {
  return (
    <div
      className="relative h-screen w-full overflow-hidden"
      onClick={() => setClicked(!clicked)}>
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 transform hover:scale-105" // Zoom out effect
        style={{ backgroundImage: `url(${bgImage})` }}></div>

      {/* Background overlay */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-70"></div>

      {/* Navbar */}
      <nav className="container py-10 mx-auto relative z-10 font-normal px-4 text-white">
        <div className="flex justify-between items-center">
          <Menu />
          <span className="text-base sm:text-base lg:text-base">
            <a href="#">Homy & Comfort</a>
          </span>
          <button className="hidden sm:py-2 sm:px-3 border border-white lg:flex justify-center space-x-3 items-center">
            <ArrowRight className="sm:w-auto sm:h-auto" />
            <h1 className="text-sm sm:text-base">Enquire Now</h1>
          </button>
        </div>
        <hr className="w-full mt-6" />
      </nav>

      {/* Centered text with inset effect */}
      <section
        className="mt-20 absolute z-10 inset-0 flex items-center justify-center cursor-pointer"
        onClick={() => setClicked(!clicked)}>
        <h1 className="text-xl font-semibold sm:text-5xl text-white text-center">
          Nowhere Ever Feels Like Home
        </h1>
      </section>
    </div>
  );
};

export default Home;
