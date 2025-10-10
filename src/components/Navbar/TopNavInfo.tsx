import React from "react";
import { Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function TopNavbar() {
  return (
    <div className="bg-[#F6F8F5] text-[#1B4332] px-4 sm:px-6 py-2 text-xs sm:text-sm border-b border-[#D8E3DD] font-sans">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
        
        {/* Left Section - Social Icons */}
        <div className="flex items-center space-x-3">
          <a
            href="https://www.facebook.com/NITJofficial/"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            <FaFacebookF size={16} />
          </a>
          <a
            href="https://www.instagram.com/nitjofficial/"
            className="hover:text-pink-600 transition-colors duration-200"
          >
            <FaInstagram size={16} />
          </a>
        </div>

        {/* Right Section - Contact Info */}
        <div className="flex flex-col sm:flex-row items-center sm:space-x-6 gap-1 sm:gap-0 text-center sm:text-left">
          <span className="hover:text-green-600 cursor-pointer transition-colors duration-200">
            Contact Us
          </span>

          <div className="flex items-center justify-center space-x-1 hover:text-green-600 cursor-pointer transition-colors duration-200">
            <Phone size={14} />
            <span>0181 269 0301</span>
          </div>

          <div className="flex items-center justify-center space-x-1 hover:text-red-600 transition-colors duration-200">
            <MapPin size={14} />
            <a
              href="https://www.google.com/maps/place/Nit+Jalandhar/@31.3943068,75.5306391,17z/data=!3m1!4b1!4m6!3m5!1s0x391a51006513f7a3:0xf8092c31677ac38e!8m2!3d31.3943068!4d75.533214!16s%2Fg%2F11lv491937?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="max-w-[200px] sm:max-w-none truncate sm:whitespace-normal"
            >
              Dr B R Ambedkar National Institute of Technology, Jalandhar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
