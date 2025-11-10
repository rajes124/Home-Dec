import React, { useState, useEffect } from "react";
import { Download } from "lucide-react";

function Installation() {
  const [apps, setApps] = useState([]);
  const [sortType, setSortType] = useState("name");

  useEffect(() => {
    const installed = JSON.parse(localStorage.getItem("installedApps")) || [];
    setApps(installed);
  }, []);

  // ✅ Uninstall handler
  const handleUninstall = (id) => {
    const updated = apps.filter((app) => app.id !== id);
    setApps(updated);
    localStorage.setItem("installedApps", JSON.stringify(updated));
  };

  // ✅ Sorting Logic
  const sortedApps = [...apps].sort((a, b) => {
    if (sortType === "name") {
      return a.title.localeCompare(b.title);
    } else if (sortType === "size") {
      return a.size - b.size;
    }
    return 0;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-2">
        Your Installed Apps
      </h2>
      <p className="text-center text-gray-500 mb-8">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="flex justify-between items-center mb-6">
        <p className="font-semibold text-gray-700">{apps.length} Apps Found</p>
        <select
          onChange={(e) => setSortType(e.target.value)}
          className="border rounded-md px-4 py-2 text-gray-600 focus:ring-2 focus:ring-purple-500 outline-none"
        >
          <option value="name">Sort By Name</option>
          <option value="size">Sort By Size</option>
        </select>
      </div>

      {sortedApps.length === 0 ? (
        <p className="text-center text-gray-500">No Installed Apps Found</p>
      ) : (
        <div className="space-y-4">
          {sortedApps.map((app) => (
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
                <div>
                  <h3 className="font-semibold text-gray-800 text-base">
                    {app.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                    <span className="flex items-center gap-1 text-green-600">
                      <Download className="w-4 h-4" />{" "}
                      {Math.floor(app.downloads / 1000000)}M
                    </span>
                    <span className="flex items-center gap-1 text-orange-500">
                      ⭐ {app.ratingAvg || app.rating}
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
      )}
    </div>
  );
}

export default Installation;
