import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { contactText } from "../components/data";
import Hero from "../components/Hero";
import EnquiryModal from "../components/EnquireModal";

const ContactPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  // Function to handle modal open/close
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="container mx-auto px-4 py-20 flex flex-col justify-center items-center gap-16 ">
      <h2 className="text-2xl font-semibold  md:text-4xl lg:text-xl  leading-tight tracking-wide  ">
        Get In Touch
      </h2>

      <p className="max-w-screen-md text-base w-full sm:w-3/6 lg:w-5/12 md:w-4/6 md:text-2xl md:font-meduim lg:font-thin lg:text-base text-center">
        We are just an enquiry away for you to get the experience you, family
        and friends are really in search of. Why not take that bold step into
        the next level of luxury.
      </p>

      <button
        className="inline-flex items-center rounded-lg md:px-4 md:py-3 md:text-2xl md:font-semibold lg:text-base lg:py-2 lg:px-3 py-2 px-3 border border-black space-x-4 hover:bg-black hover:text-white transition-all duration-300"
        onClick={toggleModal}>
        <ArrowRight className="w-5 h-5" />
        <h1>Enquire Now</h1>
      </button>

      <EnquiryModal isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  );
};

export default ContactPage;
