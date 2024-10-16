import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import ModalGallery from "../components/GalleryModal"; // Import the modal gallery component

const ArrowButton = () => {
  const [isModalOpen, setModalOpen] = useState(false); // State to manage modal visibility

  // Function to open the modal
  const openModal = () => {
    setModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section className="flex justify-center items-center sm:justify-end mt-10 ">
      {/* Button to trigger modal */}
      <button
        onClick={openModal} // Button click opens modal
        className="flex items-center px-3 py-2 space-x-3 text-gray-700  hover:bg-black hover:text-white transition-all duration-300">
        <div className="h-8 w-8 flex items-center justify-center rounded-full  border-2 border-gray-800 hover:border-white ">
          <ArrowRight size={20} />
        </div>
        <span className="font-medium text-base">Explore More</span>
      </button>

      {/* Modal component */}
      <ModalGallery isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default ArrowButton;
