import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import React, { useState } from "react";
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

const allApps = [
  {
    id: 1,
    image: demoapp1,
    title: "Forest: Focus For Productivity",
    companyName: "Forest Studio",
    description: "Boost focus with gamified timer",
    size: 42,
    reviews: 900000,
    ratingAvg: 5,
    downloads: 9000000,
    ratings: [
      { name: "1 star", count: 1000 },
      { name: "2 star", count: 2000 },
      { name: "3 star", count: 4000 },
      { name: "4 star", count: 10000 },
      { name: "5 star", count: 880000 },
    ],
  },
  {
    id: 2,
    image: demoapp2,
    title: "SmPlan: ToDo List With Reminder",
    companyName: "SmPlan Inc.",
    description: "Plan your day efficiently",
    size: 38,
    reviews: 820000,
    ratingAvg: 5,
    downloads: 8900000,
    ratings: [
      { name: "1 star", count: 1200 },
      { name: "2 star", count: 2100 },
      { name: "3 star", count: 3800 },
      { name: "4 star", count: 9000 },
      { name: "5 star", count: 805000 },
    ],
  },
  {
    id: 3,
    image: demoapp3,
    title: "FLIP – Focus Timer For Study",
    companyName: "FlipSoft",
    description: "Pomodoro timer for study sessions",
    size: 40,
    reviews: 780000,
    ratingAvg: 5,
    downloads: 8700000,
    ratings: [
      { name: "1 star", count: 900 },
      { name: "2 star", count: 1800 },
      { name: "3 star", count: 3600 },
      { name: "4 star", count: 8500 },
      { name: "5 star", count: 765000 },
    ],
  },
  {
    id: 4,
    image: demoapp4,
    title: "Pomocat – Cute Pomodoro Timer",
    companyName: "Pomocat",
    description: "Stay productive with cute cats!",
    size: 33,
    reviews: 640000,
    ratingAvg: 5,
    downloads: 9100000,
    ratings: [
      { name: "1 star", count: 1100 },
      { name: "2 star", count: 1500 },
      { name: "3 star", count: 3100 },
      { name: "4 star", count: 7200 },
      { name: "5 star", count: 628000 },
    ],
  },
  {
    id: 5,
    image: demoapp5,
    title: "Time Planner: Schedule & Tasks",
    companyName: "Planify",
    description: "Smart time management tool",
    size: 47,
    reviews: 950000,
    ratingAvg: 5,
    downloads: 9200000,
    ratings: [
      { name: "1 star", count: 1500 },
      { name: "2 star", count: 1900 },
      { name: "3 star", count: 4000 },
      { name: "4 star", count: 8000 },
      { name: "5 star", count: 935000 },
    ],
  },
  {
    id: 6,
    image: demoapp6,
    title: "Morning Habits – Daily Routine",
    companyName: "HabitPro",
    description: "Develop strong morning habits",
    size: 39,
    reviews: 650000,
    ratingAvg: 5,
    downloads: 8800000,
    ratings: [
      { name: "1 star", count: 1300 },
      { name: "2 star", count: 2100 },
      { name: "3 star", count: 3700 },
      { name: "4 star", count: 8400 },
      { name: "5 star", count: 633000 },
    ],
  },
  {
    id: 7,
    image: demoapp7,
    title: "Focus Plant: Pomodoro Forest",
    companyName: "ShikTech",
    description: "Gamified productivity app",
    size: 45,
    reviews: 720000,
    ratingAvg: 5,
    downloads: 9300000,
    ratings: [
      { name: "1 star", count: 1000 },
      { name: "2 star", count: 2200 },
      { name: "3 star", count: 4000 },
      { name: "4 star", count: 8900 },
      { name: "5 star", count: 705000 },
    ],
  },
  {
    id: 8,
    image: demoapp8,
    title: "Alarmy – Alarm Clock & Sleep",
    companyName: "Alarmy",
    description: "Smart alarm & sleep tracker",
    size: 52,
    reviews: 880000,
    ratingAvg: 5,
    downloads: 9700000,
    ratings: [
      { name: "1 star", count: 2000 },
      { name: "2 star", count: 3000 },
      { name: "3 star", count: 5000 },
      { name: "4 star", count: 10000 },
      { name: "5 star", count: 860000 },
    ],
  },
  {
    id: 9,
    image: demoapp9,
    title: "Fitify – Home Workout App",
    companyName: "Fitify Labs",
    description: "Exercise anywhere, anytime",
    size: 50,
    reviews: 940000,
    ratingAvg: 5,
    downloads: 9800000,
    ratings: [
      { name: "1 star", count: 1200 },
      { name: "2 star", count: 2300 },
      { name: "3 star", count: 4500 },
      { name: "4 star", count: 8700 },
      { name: "5 star", count: 920000 },
    ],
  },
  {
    id: 10,
    image: demoapp10,
    title: "Water Reminder – Drink Tracker",
    companyName: "Hydro Apps",
    description: "Stay hydrated throughout the day",
    size: 31,
    reviews: 600000,
    ratingAvg: 5,
    downloads: 8000000,
    ratings: [
      { name: "1 star", count: 900 },
      { name: "2 star", count: 1400 },
      { name: "3 star", count: 3500 },
      { name: "4 star", count: 7200 },
      { name: "5 star", count: 580000 },
    ],
  },
  {
    id: 11,
    image: demoapp11,
    title: "NoteZen – Smart Note App",
    companyName: "NoteZen",
    description: "Take organized notes easily",
    size: 41,
    reviews: 700000,
    ratingAvg: 5,
    downloads: 8700000,
    ratings: [
      { name: "1 star", count: 1100 },
      { name: "2 star", count: 1600 },
      { name: "3 star", count: 3000 },
      { name: "4 star", count: 7500 },
      { name: "5 star", count: 687000 },
    ],
  },
  {
    id: 12,
    image: demoapp12,
    title: "TaskEase – Daily Planner",
    companyName: "EaseDev",
    description: "Keep your tasks organized",
    size: 37,
    reviews: 640000,
    ratingAvg: 5,
    downloads: 8500000,
    ratings: [
      { name: "1 star", count: 800 },
      { name: "2 star", count: 1500 },
      { name: "3 star", count: 3200 },
      { name: "4 star", count: 7000 },
      { name: "5 star", count: 628000 },
    ],
  },
  {
    id: 13,
    image: demoapp13,
    title: "Mindful – Meditation & Focus",
    companyName: "Mindful Studio",
    description: "Meditate and relax your mind",
    size: 44,
    reviews: 810000,
    ratingAvg: 5,
    downloads: 9100000,
    ratings: [
      { name: "1 star", count: 1200 },
      { name: "2 star", count: 1900 },
      { name: "3 star", count: 3500 },
      { name: "4 star", count: 8000 },
      { name: "5 star", count: 790000 },
    ],
  },
  {
    id: 14,
    image: demoapp14,
    title: "RecipeBook – Cooking Assistant",
    companyName: "CookMate",
    description: "Find and save your favorite recipes",
    size: 49,
    reviews: 860000,
    ratingAvg: 5,
    downloads: 9600000,
    ratings: [
      { name: "1 star", count: 1100 },
      { name: "2 star", count: 1800 },
      { name: "3 star", count: 4000 },
      { name: "4 star", count: 8400 },
      { name: "5 star", count: 845000 },
    ],
  },
  {
    id: 15,
    image: demoapp15,
    title: "Expense Tracker – Money Manager",
    companyName: "FinWise",
    description: "Track your spending smartly",
    size: 46,
    reviews: 920000,
    ratingAvg: 5,
    downloads: 9900000,
    ratings: [
      { name: "1 star", count: 1300 },
      { name: "2 star", count: 2000 },
      { name: "3 star", count: 4100 },
      { name: "4 star", count: 9000 },
      { name: "5 star", count: 905000 },
    ],
  },
  {
    id: 16,
    image: demoapp16,
    title: "TravelGo – Smart Trip Planner",
    companyName: "TravelGo Inc.",
    description: "Plan and track your travel easily",
    size: 53,
    reviews: 880000,
    ratingAvg: 5,
    downloads: 9500000,
    ratings: [
      { name: "1 star", count: 1000 },
      { name: "2 star", count: 1700 },
      { name: "3 star", count: 3400 },
      { name: "4 star", count: 8200 },
      { name: "5 star", count: 867000 },
    ],
  },
];

const Apps = () => {
  const [search, setSearch] = useState("");

  const filteredApps = allApps.filter((app) =>
    app.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-2">
        Our All Applications
      </h2>
      <p className="text-center text-gray-500 mb-8">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      <div className="flex justify-between items-center mb-6">
        <p className="font-semibold text-gray-700">
          ({filteredApps.length}) Apps Found
        </p>
        <input
          type="text"
          placeholder="Search Apps"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-md px-4 py-2 w-60 outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {filteredApps.length === 0 ? (
        <p className="text-center text-gray-500">No App Found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredApps.map((app) => (
            <div
  key={app.id}
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
      )}
    </div>
  );
};

export default Apps;
