import React, { useState } from "react";
import demoapp1 from "../assets/demo-app-1.png";

const installedApps = [
  {
    id: 1,
    image: demoapp1,
    title: "Forest: Focus For Productivity",
    size: 258,
    downloads: 9000000,
    rating: 5,
  },
  {
    id: 2,
    image: demoapp1,
    title: "Forest: Focus For Productivity",
    size: 258,
    downloads: 9000000,
    rating: 5,
  },
  {
    id: 3,
    image: demoapp1,
    title: "Forest: Focus For Productivity",
    size: 258,
    downloads: 9000000,
    rating: 5,
  },
];

function Installation() {
  const [apps, setApps] = useState(installedApps);

  const handleUninstall = (id) => {
    setApps(apps.filter((app) => app.id !== id));
  };

  return (
    <>
     

      <div className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-2">
          Your Installed Apps
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Explore All Trending Apps on the Market developed by us
        </p>

        <div className="flex justify-between items-center mb-6">
          <p className="font-semibold text-gray-700">
            {apps.length} Apps Found
          </p>
          <select className="border rounded-md px-4 py-2 text-gray-600 focus:ring-2 focus:ring-purple-500 outline-none">
            <option>Sort By Size</option>
            <option>Sort By Name</option>
          </select>
        </div>

        <div className="space-y-4">
          {apps.map((app) => (
            <div
              key={app.id}
              className="flex justify-between items-center border rounded-lg shadow-sm p-4 hover:shadow-md transition duration-300"
            >
              <div className="flex items-center gap-4">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-14 h-14 rounded-md object-cover"
                />
                <div className="text-left">
                  <h3 className="font-semibold text-gray-800 text-base">
                    {app.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                    <span className="flex items-center gap-1 text-green-600">
                      ⬇ {Math.floor(app.downloads / 1000000)}M
                    </span>
                    <span className="flex items-center gap-1 text-orange-500">
                      ⭐ {app.rating}
                    </span>
                    <span>{app.size} MB</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleUninstall(app.id)}
                className="bg-emerald-500 text-white px-4 py-2 rounded-md hover:bg-emerald-600 transition"
              >
                Uninstall
              </button>
            </div>
          ))}
        </div>
      </div>

     
    </>
  );
}

export default Installation;
