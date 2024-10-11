import React from "react";

const Hero = ({ data }) => {
  return (
    <div className="w-full sm:w-1/2">
      <h2 className="text-2xl sm:text-4xl  pb-10 leading-tight tracking-tight  ">
        {data.heading} <br />
        <span className="text-[#dfc43d] leading-snug">{data.highlight}</span>
      </h2>

      <section className="max-w-screen-md text-base mb-10">
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
