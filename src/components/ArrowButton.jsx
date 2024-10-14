import React from "react";
import { ArrowRight } from "lucide-react";

const ArrowButton = () => {
  return (
    <section className="flex justify-center items-center sm:justify-end px-6 ">
      <button className="flex items-center px-3 py-2 space-x-3 rounded-lg text-gray-700  hover:bg-black hover:text-white transition-all duration-300">
        <div className="h-8 w-8 flex items-center justify-center rounded-full  border-2 border-gray-800 hover:border-white ">
          <ArrowRight size={20} />
        </div>
        <span className="font-medium text-base md:text-xl md:font-semibold lg:text-base ">
          Explore More
        </span>
      </button>
    </section>
  );
};

export default ArrowButton;
