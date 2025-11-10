import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import React, { useState } from "react";
import { Search, Download } from "lucide-react";
import { useNavigate } from "react-router-dom"; // ✅ Add this line

// 🔹 Image Imports
import demoapp1 from "../assets/demo-app-1.png";
import demoapp2 from "../assets/demo-app-2.png";
import demoapp3 from "../assets/demo-app-3.png";
import demoapp4 from "../assets/demo-app-4.png";
import demoapp5 from "../assets/demo-app-5.png";
import demoapp6 from "../assets/demo-app-6.png";
import demoapp7 from "../assets/demo-app-7.png";
import demoapp8 from "../assets/demo-app-8.png";
import demoapp9 from "../assets/demo-app-9.png";
import demoapp10 from "../assets/demo-app-10.png";
import demoapp11 from "../assets/demo-app-11.png";
import demoapp12 from "../assets/demo-app-12.png";
import demoapp13 from "../assets/demo-app-13.png";
import demoapp14 from "../assets/demo-app-14.png";
import demoapp15 from "../assets/demo-app-15.png";
import demoapp16 from "../assets/demo-app-16.png";

// 🔹 All Apps Data
const allApps = [
  { id: 1, image: demoapp1, title: "Forest: Focus For Productivity", companyName: "Forest Studio", size: 42, ratingAvg: 5, downloads: 9000000 },
  { id: 2, image: demoapp2, title: "Canva: Design Anything", companyName: "Canva Ltd.", size: 50, ratingAvg: 4.9, downloads: 20000000 },
  { id: 3, image: demoapp3, title: "Spotify Music", companyName: "Spotify AB", size: 60, ratingAvg: 4.8, downloads: 50000000 },
  { id: 4, image: demoapp4, title: "Adobe Photoshop Express", companyName: "Adobe Inc.", size: 80, ratingAvg: 4.7, downloads: 40000000 },
  { id: 5, image: demoapp5, title: "Zoom Meeting", companyName: "Zoom Video Communications", size: 65, ratingAvg: 4.6, downloads: 35000000 },
  { id: 6, image: demoapp6, title: "Pinterest Ideas", companyName: "Pinterest Ltd.", size: 55, ratingAvg: 4.8, downloads: 25000000 },
  { id: 7, image: demoapp7, title: "Duolingo: Learn Languages", companyName: "Duolingo Inc.", size: 45, ratingAvg: 4.9, downloads: 40000000 },
  { id: 8, image: demoapp8, title: "Google Drive", companyName: "Google LLC", size: 70, ratingAvg: 4.8, downloads: 60000000 },
  { id: 9, image: demoapp9, title: "Netflix", companyName: "Netflix Inc.", size: 85, ratingAvg: 4.7, downloads: 70000000 },
  { id: 10, image: demoapp10, title: "TikTok", companyName: "ByteDance Ltd.", size: 90, ratingAvg: 4.8, downloads: 80000000 },
  { id: 11, image: demoapp11, title: "Instagram", companyName: "Meta Platforms Inc.", size: 80, ratingAvg: 4.9, downloads: 90000000 },
  { id: 12, image: demoapp12, title: "Twitter X", companyName: "X Corp.", size: 78, ratingAvg: 4.5, downloads: 50000000 },
  { id: 13, image: demoapp13, title: "YouTube", companyName: "Google LLC", size: 95, ratingAvg: 4.9, downloads: 100000000 },
  { id: 14, image: demoapp14, title: "Telegram", companyName: "Telegram FZ-LLC", size: 60, ratingAvg: 4.8, downloads: 75000000 },
  { id: 15, image: demoapp15, title: "Snapseed", companyName: "Google LLC", size: 40, ratingAvg: 4.7, downloads: 25000000 },
  { id: 16, image: demoapp16, title: "Shazam", companyName: "Apple Inc.", size: 35, ratingAvg: 4.8, downloads: 20000000 },
];

const Apps = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate(); // ✅ Add this line

  const filteredApps = allApps.filter((app) =>
    app.title.toLowerCase().includes(search.toLowerCase())
  );

  // ✅ Download handler (save to localStorage)
  const handleDownload = (app, e) => {
    e.stopPropagation(); // ✅ prevent triggering card click
    const installed = JSON.parse(localStorage.getItem("installedApps")) || [];
    if (!installed.find((a) => a.id === app.id)) {
      installed.push(app);
      localStorage.setItem("installedApps", JSON.stringify(installed));
      alert(`${app.title} Installed Successfully ✅`);
    } else {
      alert(`${app.title} is already installed.`);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-2">
        Our All Applications
      </h2>
      <p className="text-center text-gray-500 mb-8">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      {/* 🔍 Search Bar */}
      <div className="flex justify-between items-center mb-6">
        <p className="font-semibold text-gray-700">
          ({filteredApps.length}) Apps Found
        </p>
        <div className="relative">
          <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search Apps"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-md pl-10 pr-4 py-2 w-60 outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>

      {/* 🧩 App Cards */}
      {filteredApps.length === 0 ? (
        <p className="text-center text-gray-500">No App Found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredApps.map((app) => (
            <div
              key={app.id}
              onClick={() => navigate(`/app/${app.id}`)} // ✅ navigate to details page
              className="bg-white border rounded-lg shadow-sm hover:shadow-2xl p-3 transition-transform duration-300 ease-out hover:-translate-y-2 hover:scale-105 cursor-pointer"
            >
              <img
                src={app.image}
                alt={app.title}
                className="rounded-lg w-full h-48 object-cover mb-3 transition-transform duration-300 ease-out hover:scale-110"
              />
              <h3 className="font-semibold text-gray-800 text-base mb-1">
                {app.title}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{app.companyName}</p>
              <div className="flex justify-between text-sm text-gray-600">
                <span
                  onClick={(e) => handleDownload(app, e)} // ✅ download without page open
                  className="flex items-center gap-1 text-green-600 cursor-pointer hover:text-emerald-700 transition"
                >
                  <Download className="w-4 h-4" />{" "}
                  {Math.floor(app.downloads / 1000000)}M
                </span>
                <span className="flex items-center gap-1 text-orange-500">
                  ⭐ {app.ratingAvg}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Apps;
