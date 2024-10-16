import React, { useState, useEffect } from "react";

const ModalGallery = ({ isOpen, onClose }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch gallery data from the Pixabay API
  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      fetch(
        `https://pixabay.com/api/?key=46539940-8a04b461bd9ca5d981166096a&q=homes&image_type=photo&per_page=6`
      )
        .then((response) => response.json())
        .then((data) => {
          setImages(data.hits); // Pixabay stores image results in 'hits'
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching gallery:", error);
          setLoading(false);
        });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-5 rounded-lg w-3/4 max-w-5xl mx-auto">
        <button
          onClick={onClose}
          className="mb-4 bg-red-500 text-white px-3 py-1 rounded">
          Close
        </button>

        {/* Loader */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="loader">Loading...</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="border p-4 rounded-lg"
                style={{ width: "100%", height: "250px" }}>
                <img
                  src={image.webformatURL} // Pixabay provides image URLs under 'webformatURL'
                  alt={image.tags || "Home image"}
                  className="w-full h-full object-cover rounded-lg"
                />
                <p className="text-center mt-2">{image.user}</p>{" "}
                {/* Display uploader */}
                <p className="text-center text-sm text-gray-600">
                  {image.tags || "Home image"}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalGallery;
