// AppDetails.jsx
import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// 🔹 Import all app images
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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AppDetails = () => {
  const { id } = useParams();
  const app = allApps.find(a => a.id === Number(id));
  const [isInstalled, setIsInstalled] = useState(false);
  const chartRef = useRef(null); // ✅ Ref for Chart

  useEffect(() => {
    const installed = JSON.parse(localStorage.getItem("installedApps")) || [];
    if (installed.find(a => a.id === app.id)) {
      setIsInstalled(true);
    }

    // Cleanup chart on unmount
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [app.id]);

  const handleInstall = () => {
    const installed = JSON.parse(localStorage.getItem("installedApps")) || [];
    if (!installed.find(a => a.id === app.id)) {
      installed.push(app);
      localStorage.setItem("installedApps", JSON.stringify(installed));
      toast.success(`${app.title} Installed Successfully ✅`, {
        position: "top-right",
        autoClose: 2000,
        theme: "colored",
      });
      setIsInstalled(true);
    }
  };

  const ratingData = {
    labels: ["5★", "4★", "3★", "2★", "1★"],
    datasets: [
      {
        label: "Ratings Count",
        data: [11000, 7000, 2500, 1200, 600],
        backgroundColor: ["#10B981", "#34D399", "#FBBF24", "#F59E0B", "#EF4444"],
      },
    ],
  };

  const ratingOptions = {
    indexAxis: "y",
    plugins: { legend: { display: false } },
    scales: { x: { display: false }, y: { grid: { display: false } } },
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-xl shadow-md mt-8">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src={app.image}
          alt={app.title}
          className="w-64 h-64 object-cover rounded-lg shadow-lg"
        />
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-2">{app.title}</h2>
          <p className="text-gray-500 mb-2">
            Developed by <span className="font-semibold">{app.companyName}</span>
          </p>
          <div className="flex items-center gap-4 mb-4 text-gray-700">
            <p>📦 {app.size} MB</p>
            <p>⭐ {app.ratingAvg}</p>
            <p>⬇️ {Math.floor(app.downloads / 1000000)}M Downloads</p>
          </div>
          <button
            onClick={handleInstall}
            disabled={isInstalled}
            className={`px-5 py-2 rounded-lg text-white font-medium transition ${
              isInstalled ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {isInstalled ? "Installed" : "Install Now"}
          </button>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-3">Ratings</h3>
        <Bar
          ref={chartRef} // ✅ Ref added
          key={JSON.stringify(ratingData)} // ✅ Key ensures new canvas on data change
          data={ratingData}
          options={ratingOptions}
          height={150}
        />
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-3">Description</h3>
        <p className="text-gray-600 leading-relaxed">
          {app.title} is designed to deliver an outstanding experience through
          simplicity, performance, and reliability. With its smart algorithm and
          clean UI, you can track your productivity, stay connected with your
          community, and explore creative tools that adapt to your workflow.
          <br />
          <br />
          Whether you’re managing tasks, designing projects, learning new
          skills, or streaming entertainment — this app provides everything in
          one place. Experience fast performance, minimal ads, and seamless
          syncing across all your devices.
        </p>
      </div>

      <ToastContainer />
    </div>
  );
};

export default AppDetails;
