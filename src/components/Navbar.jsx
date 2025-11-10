import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-100 shadow-md px-4 sm:px-8 py-3">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-gray-700">
          <img src={logo} alt="Logo" className="w-9 h-9" />
          <span>HERO.IO</span>
        </Link>

        {/* Button (Mobile) */}
        <button
          className="sm:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Menu (Desktop) */}
        <ul className="hidden sm:flex sm:items-center sm:gap-6 text-[16px] font-medium">
          <li>
            <Link to="/" className="flex items-center gap-1 hover:text-purple-700 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-5H9v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9z" />
              </svg>
              Home
            </Link>
          </li>
          <li>
            <Link to="/apps" className="flex items-center gap-1 hover:text-purple-700 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              Apps
            </Link>
          </li>
          <li>
            <Link to="/installation" className="flex items-center gap-1 hover:text-purple-700 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v8m4-4H8" />
              </svg>
              Installation
            </Link>
          </li>
        </ul>

        
        <div className="hidden sm:flex">
          <a
            href="#"
            className="btn btn-primary px-5 font-semibold gap-2 normal-case flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577 0-.285-.011-1.04-.017-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.086 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.304 3.49.997.108-.775.418-1.305.76-1.605-2.665-.304-5.466-1.332-5.466-5.932 0-1.31.468-2.38 1.235-3.22-.124-.304-.535-1.524.117-3.176 0 0 1.008-.323 3.3 1.23a11.44 11.44 0 0 1 3.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.553 3.296-1.23 3.296-1.23.654 1.652.243 2.872.12 3.176.77.84 1.232 1.91 1.232 3.22 0 4.61-2.804 5.625-5.475 5.922.43.37.814 1.096.814 2.21 0 1.595-.015 2.882-.015 3.275 0 .32.217.694.825.576C20.565 21.795 24 17.305 24 12c0-6.63-5.37-12-12-12Z" />
            </svg>
            Contribute
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="sm:hidden mt-3 space-y-2 bg-blue-50 rounded-lg p-3 shadow-md">
          <li>
            <Link to="/" className="flex items-center gap-2 hover:text-purple-700 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/apps" className="flex items-center gap-2 hover:text-purple-700 transition">
              Apps
            </Link>
          </li>
          <li>
            <Link to="/installation" className="flex items-center gap-2 hover:text-purple-700 transition">
              Installation
            </Link>
          </li>
          <li>
            <a href="#" className="flex items-center gap-2 hover:text-purple-700 transition">
              Contribute
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
