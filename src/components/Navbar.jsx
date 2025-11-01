import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // 🔹 তোমার লোগো assets ফোল্ডারে

function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-md px-8">
      {/* Left side - Logo */}
      <div className="flex-none">
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold text-gray-700"
        >
          <img src={logo} alt="Logo" className="w-9 h-9" />
          <span>HERO.IO</span>
        </Link>
      </div>

      {/* Center side - Menu */}
      <div className="flex-1 flex justify-center">
        <ul className="menu menu-horizontal px-1 text-[16px] font-medium">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/apps">Apps</Link>
          </li>
          <li>
            <Link to="/installation">Installation</Link>
          </li>
        </ul>
      </div>

      {/* Right side - Button */}
      <div className="flex-none">
        <a
          href="#"
          className="btn btn-primary px-5 font-semibold gap-2 normal-case"
        >
          {/* GitHub icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577 0-.285-.011-1.04-.017-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.086 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.304 3.49.997.108-.775.418-1.305.76-1.605-2.665-.304-5.466-1.332-5.466-5.932 0-1.31.468-2.38 1.235-3.22-.124-.304-.535-1.524.117-3.176 0 0 1.008-.323 3.3 1.23a11.44 11.44 0 0 1 3.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.553 3.296-1.23 3.296-1.23.654 1.652.243 2.872.12 3.176.77.84 1.232 1.91 1.232 3.22 0 4.61-2.804 5.625-5.475 5.922.43.37.814 1.096.814 2.21 0 1.595-.015 2.882-.015 3.275 0 .32.217.694.825.576C20.565 21.795 24 17.305 24 12c0-6.63-5.37-12-12-12Z" />
          </svg>
          Contribute
        </a>
      </div>
    </div>
  );
}

export default Navbar;
