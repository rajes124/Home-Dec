import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/logo.png"; // same logo as Navbar

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-2">
            <img src={logo} alt="Logo" className="w-10 h-10" />
            <span className="text-xl font-semibold tracking-wide">Home-Dec</span>
          </div>
          <p className="text-gray-400">Innovating Apps for Everyone 🚀</p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-white text-lg">
          <a
            href="#"
            className="bg-gray-700 p-3 rounded-full hover:bg-blue-600 transform hover:scale-110 transition duration-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="bg-gray-700 p-3 rounded-full hover:bg-sky-400 transform hover:scale-110 transition duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="bg-gray-700 p-3 rounded-full hover:bg-pink-500 transform hover:scale-110 transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="bg-gray-700 p-3 rounded-full hover:bg-blue-700 transform hover:scale-110 transition duration-300"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Divider Line */}
      <div className="mt-6 h-[1px] bg-gray-700 w-full"></div>

      {/* Copyright Section */}
      <div className="text-center mt-4 text-gray-400 text-sm">
        © {new Date().getFullYear()} <span className="font-semibold text-white">Home-Dec</span>. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
