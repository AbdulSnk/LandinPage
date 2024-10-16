import React from "react";

const Hero = ({ data }) => {
  return (
    <div className="w-full lg:w-1/2 text-center sm:text-left">
      <h2 className="text-2xl lg:text-4xl pb-10 leading-tight tracking-normal  ">
        {data.heading} <br />
        <span className="text-[#dfc43d] leading-snug">{data.highlight}</span>
      </h2>

      <section className=" max-w-screen-md text-base sm:text-md md:text-lg mb-10">
        {data.paragraphs.map((paragraph, index) => (
          <p className="pt-5" key={index}>
            {paragraph}
          </p>
        ))}
      </section>
    </div>
  );
};

export default Hero;
