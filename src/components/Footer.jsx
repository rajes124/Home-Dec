import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo / Name */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold mb-2">Home-Dec</h1>
          <p className="text-gray-400">© 2025 Home-Dec. All rights reserved.</p>
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

      {/* Decorative animation line */}
      <div className="mt-6 h-1 w-24 bg-purple-600 rounded-full mx-auto animate-pulse"></div>
    </footer>
  );
}

export default Footer;
