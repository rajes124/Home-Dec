import React from "react";
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
  { id: 1, image: demoapp1, title: "Forest: Focus For Productivity", companyName: "Forest Studio", description: "Boost focus with gamified timer", size: 42, reviews: 900000, ratingAvg: 5, downloads: 9000000 },
  { id: 2, image: demoapp2, title: "SmPlan: ToDo List With Reminder", companyName: "SmPlan Inc.", description: "Plan your day efficiently", size: 38, reviews: 820000, ratingAvg: 5, downloads: 9000000 },
  { id: 3, image: demoapp3, title: "FLIP - Focus Timer For Study", companyName: "FlipSoft", description: "Pomodoro timer for study sessions", size: 40, reviews: 780000, ratingAvg: 5, downloads: 9000000 },
  { id: 4, image: demoapp4, title: "Pomocat - Cute Pomodoro Timer", companyName: "Pomocat", description: "Stay productive with cute cats!", size: 33, reviews: 640000, ratingAvg: 5, downloads: 9000000 },
  { id: 5, image: demoapp5, title: "Time Planner: Schedule & Tasks", companyName: "Planify", description: "Smart time management tool", size: 47, reviews: 950000, ratingAvg: 5, downloads: 9000000 },
  { id: 6, image: demoapp6, title: "Morning Habits - Daily Routine", companyName: "HabitPro", description: "Develop strong morning habits", size: 39, reviews: 650000, ratingAvg: 5, downloads: 9000000 },
  { id: 7, image: demoapp7, title: "Focus Plant: Pomodoro Forest", companyName: "ShikTech", description: "Gamified productivity app", size: 45, reviews: 720000, ratingAvg: 5, downloads: 9000000 },
  { id: 8, image: demoapp8, title: "Alarmy - Alarm Clock & Sleep", companyName: "Alarmy", description: "Smart alarm & sleep tracker", size: 52, reviews: 880000, ratingAvg: 5, downloads: 9000000 },
];

const Home = () => {
  return (
    <div className="text-center bg-blue-400">
      {/*  Hero + Stats Section */}
      <div className="relative w-full bg-white">
        <div className="text-center pt-16 pb-10">
          <h2 className="text-4xl font-bold text-gray-900">
            We Build <span className="text-purple-600">Productive</span> Apps
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>

          <div className="flex justify-center items-center gap-4 mt-6">
            <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-200">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="w-28"
              />
            </button>
            <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-200">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="w-28"
              />
            </button>
          </div>
        </div>

        {/*  Hero Image */}
        <div className="flex justify-center relative z-10">
          <img
            src={hero}
            alt="Hero Section"
            className="max-w-[700px] w-full drop-shadow-2xl relative bottom-[-2px]"
          />
        </div>

        {/*  Stats Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white text-center pt-20 pb-12 -mt-1">
          <h3 className="text-2xl font-semibold mb-8">
            Trusted By Millions, Built For You
          </h3>

          <div className="flex flex-wrap justify-center gap-12">
            <div>
              <h4 className="text-4xl font-bold">29.6M</h4>
              <p className="text-sm mt-1">Total Downloads</p>
              <p className="text-xs text-purple-200 mt-1">
                21% More Than Last Month
              </p>
            </div>

            <div>
              <h4 className="text-4xl font-bold">906K</h4>
              <p className="text-sm mt-1">Total Reviews</p>
              <p className="text-xs text-purple-200 mt-1">
                46% More Than Last Month
              </p>
            </div>

            <div>
              <h4 className="text-4xl font-bold">132+</h4>
              <p className="text-sm mt-1">Active Apps</p>
              <p className="text-xs text-purple-200 mt-1">
                31 More Will Launch
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*  Trending Apps Section */}
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
                <div className="flex justify-between text-sm text-gray-600">
                  <span className="flex items-center gap-1 text-green-600">
                    ⬇ {Math.floor(app.downloads / 1000000)}M
                  </span>
                  <span className="flex items-center gap-1 text-orange-500">
                    ⭐ {app.ratingAvg}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-10 px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition">
            Show All
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
