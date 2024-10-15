import React, { useState, useEffect, useRef } from "react";

// Unsplash API Access Key (replace 'YOUR_ACCESS_KEY' with your actual access key)
const UNSPLASH_ACCESS_KEY = "YOUR_ACCESS_KEY";

const GalleryModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const [galleryData, setGalleryData] = useState([]);

  // Fetch images from the Unsplash API
  const fetchGalleryData = async () => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/photos?client_id=${UNSPLASH_ACCESS_KEY}&per_page=9`
      );
      const data = await response.json();
      setGalleryData(data);
    } catch (error) {
      console.error("Error fetching gallery data:", error);
    }
  };

  // Fetch gallery data when modal is opened
  useEffect(() => {
    if (isOpen) {
      fetchGalleryData();
    }
  }, [isOpen]);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
      <div
        ref={modalRef}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl overflow-y-auto"
        style={{ maxHeight: "90vh" }}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500">
          &#x2715;
        </button>
        <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryData.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              <img
                src={item.urls.small}
                alt={item.description}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-lg font-medium mt-2">
                {item.description || "Untitled"}
              </h3>
              <p className="text-sm text-gray-600">By {item.user.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
