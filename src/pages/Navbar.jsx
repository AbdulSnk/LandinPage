import { Menu, X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { navItems } from "../components/data";
import bgImage from "../assets/img/bg.png";

const Navbar = ({ setClicked, clicked }) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const menuRef = useRef(null); // Create a reference for the mobile menu

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  // Close menu when clicking outside
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
      className="bg-cover bg-center h-screen text-black relative">
      <div className="absolute inset-0 bg-gray-900 bg-opacity-70"></div>

      {/* ----------Nav------------------ */}
      <nav className="fixed top-0 left-0 w-full z-50 py-4 shadow-2xl bg-white text-black">
        <div className="container mx-auto flex justify-between items-center px-6">
          <span className="text-xl md:text-3xl font-semibold lg:font-thin lg:text-base">
            <a href="#">Homy & Comfort</a>
          </span>

          <ul className="hidden lg:flex space-x-8 text-base font-semibold sm:font-normal">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="transition-colors duration-300 hover:text-[#4A90E2]">
                {/* <Link to={item.href}>{item.label}</Link> */}
              </li>
            ))}
          </ul>

          <button className="hidden lg:flex items-center rounded-lg space-x-2 px-4 py-1.5 border border-black hover:bg-[#25548a] hover:border-[#25548a] hover:text-white transition-all duration-300">
            <ArrowRight className="w-5 h-5" />
            <span className="lg:text-base">Enquire Now</span>
          </button>

          <button className="lg:hidden sm:" onClick={toggleNavbar}>
            {mobileDrawerOpen ? (
              <X className="w-10 h-10 sm`w-15 sm:h-15" />
            ) : (
              <Menu className="w-10 h-10 sm`w-15 sm:h-15" />
            )}
          </button>
        </div>

        {mobileDrawerOpen && (
          <div
            ref={menuRef} // Reference the mobile menu container
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
