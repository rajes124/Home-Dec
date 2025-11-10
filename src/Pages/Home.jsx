import React from "react";
import { useNavigate } from "react-router-dom";
import hero from "../assets/hero.png";
import demoapp1 from "../assets/demo-app-1.png";
import demoapp2 from "../assets/demo-app-2.png";
import demoapp3 from "../assets/demo-app-3.png";
import demoapp4 from "../assets/demo-app-4.png";
import demoapp5 from "../assets/demo-app-5.png";
import demoapp6 from "../assets/demo-app-6.png";
import demoapp7 from "../assets/demo-app-7.png";
import demoapp8 from "../assets/demo-app-8.png";

const trendingApps = [
   { id: 1, image: demoapp1, title: "Forest: Focus For Productivity", companyName: "Forest Studio", size: 42, ratingAvg: 5, downloads: 9000000 },
    { id: 2, image: demoapp2, title: "Canva: Design Anything", companyName: "Canva Ltd.", size: 50, ratingAvg: 4.9, downloads: 20000000 },
    { id: 3, image: demoapp3, title: "Spotify Music", companyName: "Spotify AB", size: 60, ratingAvg: 4.8, downloads: 50000000 },
    { id: 4, image: demoapp4, title: "Adobe Photoshop Express", companyName: "Adobe Inc.", size: 80, ratingAvg: 4.7, downloads: 40000000 },
    { id: 5, image: demoapp5, title: "Zoom Meeting", companyName: "Zoom Video Communications", size: 65, ratingAvg: 4.6, downloads: 35000000 },
    { id: 6, image: demoapp6, title: "Pinterest Ideas", companyName: "Pinterest Ltd.", size: 55, ratingAvg: 4.8, downloads: 25000000 },
    { id: 7, image: demoapp7, title: "Duolingo: Learn Languages", companyName: "Duolingo Inc.", size: 45, ratingAvg: 4.9, downloads: 40000000 },
    { id: 8, image: demoapp8, title: "Google Drive", companyName: "Google LLC", size: 70, ratingAvg: 4.8, downloads: 60000000 },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center bg-blue-400">
      {/* Hero and stats sections same as before */}
      
      {/* Trending Apps Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Trending Apps
          </h2>
          <p className="text-gray-500 mb-10">
            Explore All Trending Apps on the Market developed by us
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingApps.map((app) => (
              <div
                key={app.id}
                className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition transform hover:-translate-y-1 hover:scale-105 p-3 cursor-pointer"
              >
                <img
                  src={app.image}
                  alt={app.title}
                  className="rounded-lg w-full h-48 object-cover mb-3"
                />
                <h3 className="font-semibold text-gray-800 text-base mb-1">
                  {app.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{app.companyName}</p>
                
                {/* এখানে পরিবর্তন করা হয়েছে */}
                <div className="flex justify-between text-sm text-gray-600">
                  <span className="flex items-center gap-1 text-green-600">
                    ⬇ {app.downloads >= 1000000000 
                        ? `${(app.downloads / 1000000000).toFixed(1)}B` 
                        : `${Math.floor(app.downloads / 1000000)}M`}
                  </span>
                  <span className="flex items-center gap-1 text-orange-500">
                    ⭐ {app.ratingAvg.toFixed(1)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => navigate("/apps")}
            className="mt-10 px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
          >
            Show All
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;