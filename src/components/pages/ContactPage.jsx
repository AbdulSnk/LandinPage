import React from "react";
import { ArrowRight } from "lucide-react";
import { contactText } from "../data";
import Hero from "../Hero";

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-20 flex flex-col justify-center items-center gap-16 ">
      <h2 className="text-2xl sm:text-4xl leading-tight tracking-tight  ">
        Get In Touch
      </h2>

      <p className="max-w-screen-md text-base w-full sm:w-3/6  leading-extra-loose text-center">
        We are just an enquiry away for you to get the experience you, family
        and friends are really in search of. Why not take that bold step into
        the next level of luxury.
      </p>

      <button className="inline-flex items-center py-2 px-3 border border-black space-x-4 hover:bg-black hover:text-white transition-all duration-300">
        <ArrowRight className="w-5 h-5" />
        <h1>Enquire Now</h1>
      </button>
    </div>
  );
};

export default ContactPage;
