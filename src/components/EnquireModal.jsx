import { useState, useEffect, useRef } from "react";

const EnquiryModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null); // Reference for the modal

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Validation state
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  // Success state
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setFormErrors({
      ...formErrors,
      [name]: false,
    });
  };

  // Validate email format
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission

    const errors = {
      name: formData.name.trim() === "",
      email: !validateEmail(formData.email),
      message: formData.message.trim() === "",
    };

    setFormErrors(errors);

    const hasErrors = Object.values(errors).some((error) => error);
    if (!hasErrors) {
      console.log("Form submitted successfully!", formData);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setIsSubmitted(true); // Set submitted state to true

      // Reset the submission state after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false); // Clear success message
        onClose(); // Close modal after showing the success message
      }, 3000); // Adjust the delay as needed
    }
  };

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    // Attach event listener only when the modal is open
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Reset state when modal is closed
  useEffect(() => {
    if (!isOpen) {
      setIsSubmitted(false); // Reset submitted state when modal closes
      setFormData({ name: "", email: "", message: "" }); // Optionally reset form data
      setFormErrors({ name: false, email: false, message: false }); // Reset errors
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
      <div
        ref={modalRef} // Reference for modal content
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
        {!isSubmitted ? (
          <>
            <h2 className="text-xl font-semibold mb-4">Enquire Now</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-2 border ${
                    formErrors.name ? "border-red-500" : "border-green-500"
                  } focus:outline-none transition-all`}
                  placeholder="Enter your name"
                />
                {formErrors.name && (
                  <p className="text-red-500 text-sm mt-1">Name is required</p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-2 border ${
                    formErrors.email ? "border-red-500" : "border-green-500"
                  } focus:outline-none transition-all`}
                  placeholder="Enter your email"
                />
                {formErrors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    Please enter a valid email
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full p-2 border ${
                    formErrors.message ? "border-red-500" : "border-green-500"
                  } focus:outline-none transition-all`}
                  placeholder="Enter your message"
                />
                {formErrors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    Message is required
                  </p>
                )}
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
                  Submit
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-xl font-semibold">Enquiry Submitted!</h2>
            <p className="mt-2">
              Thank you for your enquiry. We will get back to you soon!
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false); // Reset success state on close
                onClose();
              }}
              className="mt-4 bg-red-500 text-white rounded py-2 px-4 hover:bg-red-600 transition-colors">
              Close
            </button>
          </div>
        )}

        <button
          onClick={() => {
            setIsSubmitted(false); // Reset success state on close
            onClose();
          }}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-700">
          &#x2715;
        </button>
      </div>
    </div>
  );
};

export default EnquiryModal;
