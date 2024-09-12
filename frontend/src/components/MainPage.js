import React from "react";
import Weather from "./Weather.js";
import VideoFeed from "./VideoFeed.js";
import SensorReadings from "./SensorReadings.js";
import MainNav from "./MainNav.js";
import Farm from "./Farm.js";

const MainPage = ({ userSignOut }) => {
  return (
    <div className="main-page">
      <MainNav />

      {/* Top Section: Weather and Sensor Readings */}
      <div className="top-section">
        <Weather />
        <SensorReadings />
      </div>

      {/* Middle Section: Farm */}
      <div className="middle-section">
        <Farm />
      </div>

      {/* Bottom Section: Video Feed */}
      <div className="bottom-section">
        <VideoFeed />
      </div>
    </div>
  );
};

export default MainPage;
