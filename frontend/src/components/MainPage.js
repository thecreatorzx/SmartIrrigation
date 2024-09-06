import React from "react";
import Weather from "./Weather.js";
import VideoFeed from "./VideoFeed.js";
import SensorReadings from "./SensorReadings.js";
import MainNav from "./MainNav.js";

const MainPage = ({ userSignOut }) => {
  return (
    <div className="main-page">
      <MainNav />
      <div className="content">
        <div className="top-section">
          <Weather />
          <SensorReadings />
        </div>
        <div className="bottom-section">
          <VideoFeed />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
