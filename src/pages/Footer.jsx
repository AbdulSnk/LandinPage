import React from "react";
import { ArrowRight } from "lucide-react";
// import img1 from "../../assets/img/socialicon1.png";
// import img1 from "../assets/img/socailicon1.png";
import img1 from "../assets/img/socialicon1.png";
import linkedInImg from "../assets/img/socialicon2.png";
import fbImg from "../assets/img/socialicon3.png";
import twitter from "../assets/img/socialicon4.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-[#292929] pt-10 pb-20 text-white">
      <div className="container mx-auto px-6 flex flex-col gap-5">
        <h3 className="text-lg leading-[25px] font-normal text-center sm:text-left">
          HOMY & COMFORT
        </h3>
        <hr className="border-[#525252]" />
        {/* Navigation links */}
        <ul className="list-none flex flex-col sm:flex-row justify-between items-center font-avenir text-base font-extralight leading-8 tracking-[0.04em] space-y-3 sm:space-y-0">
          <li>Collection</li>
          <li>Media & press</li>
          <li>Sustainability</li>
          <li>Careers</li>
          <li>Events & Partnerships</li>
        </ul>
        <hr className="border-[#525252]" />
        <div className="flex flex-col sm:flex-row justify-between items-center font-avenir text-base font-light leading-8 tracking-[0.04em]">
          <h3 className="mb-4 sm:mb-0">Newsletter Sign Up</h3>
          <h3>Contact Us</h3>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-5 lg:space-y-0">
          {/* Table for form */}
          <div className="overflow-x-auto w-full lg:w-auto">
            <table className="border-[#525252] border-2 border-collapse w-full lg:w-auto">
              <thead>
                <tr>
                  <td className="border border-[#525252] p-2">Name</td>
                  <td className="border border-[#525252] p-2">Surname</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 pr-14">Email Address</td>
                  <td className="flex justify-between items-center gap-2 p-2 text-[#AA8F00]">
                    <ArrowRight className="w-auto h-auto" />
                    <span>Subscribe</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Contact and Social Links */}
          <div className="flex flex-col justify-between items-center sm:items-end gap-5 w-full lg:w-auto">
            <span>+234 806 909 2110</span>
            <span className="text-[#AA8F00]">Info@homy&comfort.com</span>
            <div className="flex items-center gap-2">
              <img src={img1} alt="social icon 1" className="w-6 h-6" />
              <img src={linkedInImg} alt="LinkedIn" className="w-6 h-6" />
              <img src={fbImg} alt="Facebook" className="w-6 h-6" />
              <img src={twitter} alt="Twitter" className="w-6 h-6" />
            </div>
          </div>
        </div>
        <hr className="border-[#525252]" />
        {/* Footer bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
          <div className="flex items-center justify-center gap-2">
            <span className="text-xl">&copy;</span>
            <span className="text-lg">{currentYear},</span>
            <h3 className="text-sm">Homy & Comfort</h3>
          </div>
          <div className="flex justify-between items-center gap-4">
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
