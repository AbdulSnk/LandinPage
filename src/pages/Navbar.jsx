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

    const handleMouseLeave = () => {
      setMobileDrawerOpen(false);
    };

    if (mobileDrawerOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      menuRef.current.addEventListener("mouseleave", handleMouseLeave);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      menuRef.current?.removeEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      menuRef.current?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mobileDrawerOpen]);

  const handleLinkClick = () => {
    setMobileDrawerOpen(false); // Close the drawer when a link is clicked
  };

  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="bg-cover bg-center h-screen bg-fixed text-black relative">
      <div className="absolute inset-0 bg-gray-900 bg-opacity-70"></div>

      <nav className="fixed top-0 left-0 w-full z-50 py-4 shadow-green-800 bg-white text-black">
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 md:px-8">
          <button
            onClick={toggleNavbar}
            className="hover:bg-[#25548a] hover:border-[#25548a] hover:text-white transition-all duration-300">
            {mobileDrawerOpen ? (
              <X className="w-8 h-8 sm:w-10 sm:h-10" />
            ) : (
              <Menu className="w-8 h-8 sm:w-10 sm:h-10" />
            )}
          </button>

          <span className="hidden sm:inline-block text-lg sm:text-xl md:text-2xl font-semibold md:font-thin lg:text-base">
            <a href="#">Homy & Comfort</a>
          </span>

          <button
            onClick={handleOpenModal}
            className="flex items-center rounded-lg space-x-2 px-3 py-1.5 border border-black text-sm sm:text-base md:text-lg hover:bg-[#25548a] hover:border-[#25548a] hover:text-white transition-all duration-300">
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Enquire Now</span>
          </button>
        </div>

        {mobileDrawerOpen && (
          <div
            ref={menuRef}
            className="absolute top-0 left-0 w-full bg-white z-40 p-6 sm:p-8 shadow-lg">
            <ul className="space-y-4 text-lg">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="text-center transition-colors duration-300 hover:text-[#4A90E2]">
                  <a
                    href={`#${item.id}`}
                    className="block"
                    onClick={handleLinkClick} // Close dropdown on link click
                  >
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

      {/* Main Section */}
      <section
        className="absolute inset-0 flex items-center justify-center z-10 mt-16 sm:mt-20"
        onClick={() => setClicked(!clicked)}>
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl text-white font-semibold text-center">
          Nowhere Ever Feels Like Home
        </h1>
      </section>
    </div>
  );
};

export default Navbar;
