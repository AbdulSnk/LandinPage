import { Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { navItems } from "../components/data";
import bgImage from "../assets/img/bg.png";
import EnquiryModal from "../components/EnquireModal";

const Navbar = ({ setClicked, clicked }) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileDrawerOpen(false);
      }
    };

    if (mobileDrawerOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileDrawerOpen]);

  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="bg-cover bg-center h-screen bg-fixed text-black relative">
      <div className="absolute inset-0 bg-gray-900 bg-opacity-70"></div>

      <nav className="fixed top-0 left-0 w-full z-50 py-4 shadow-green-800 bg-white text-black">
        <div className="container mx-auto flex justify-between items-center px-6">
          <button
            onClick={toggleNavbar}
            className=" hover:bg-[#25548a] hover:border-[#25548a] hover:text-white transition-all duration-300">
            {mobileDrawerOpen ? (
              <X className="w-10 h-10 sm:w-15 sm:h-15" />
            ) : (
              <Menu className="sm:w-10 sm:h-10 md:w-6 md:h-6" />
            )}
          </button>

          <span className="text-xl md:text-3xl font-semibold lg:font-thin lg:text-base">
            <a href="#">Homy & Comfort</a>
          </span>

          <button
            onClick={handleOpenModal} // Open modal on click
            className="flex items-center rounded-lg space-x-2 px-4 py-1.5 border border-black hover:bg-[#25548a] hover:border-[#25548a] hover:text-white transition-all duration-300">
            <ArrowRight className="w-5 h-5" />
            <span className="lg:text-base">Enquire Now</span>
          </button>
        </div>

        {mobileDrawerOpen && (
          <div
            ref={menuRef}
            className="absolute top-0 left-0 w-full bg-white z-40 p-8 shadow-lg">
            <ul className="space-y-6 text-lg sm:text-2xl font-semibold">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="text-center transition-colors duration-300 hover:text-[#4A90E2]">
                  <a href={item.href} className="block">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Enquiry Modal */}
      <EnquiryModal isOpen={isModalOpen} onClose={handleCloseModal} />

      <section
        className="absolute inset-0 flex items-center justify-center z-10 mt-20"
        onClick={() => setClicked(!clicked)}>
        <h1 className="text-2xl sm:text-5xl text-white font-semibold text-center">
          Nowhere Ever Feels Like Home
        </h1>
      </section>
    </div>
  );
};

export default Navbar;
