import React, { useEffect, useState } from "react";
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [showMore, setShowMore] = useState(false); // State to toggle more weather details

  useEffect(() => {
    // Replace with your actual weather API URL and API key
    const apiUrl =
      "https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=19d7b9578fccbadc7edbc93d08aa9123";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch((error) => console.error("Error fetching weather data:", error));
  }, []);

  if (!weatherData) {
    return <div>Loading weather data...</div>;
  }

  return (
    <div className="weather-component">
      <h2>Weather Data</h2>
      {/* Showing the first four weather details */}
      <p>Temperature: {(weatherData.main.temp - 273.15).toFixed(2)}°C</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Pressure: {weatherData.main.pressure} hPa</p>
      <p>Weather: {weatherData.weather[0].description}</p>

      {/* Toggle to show more details */}
      {showMore && (
        <div className="extra-weather-details">
          <p>Max Temp: {(weatherData.main.temp_max - 273.15).toFixed(2)}°C</p>
          <p>Min Temp: {(weatherData.main.temp_min - 273.15).toFixed(2)}°C</p>
          <p>Wind Speed: {weatherData.wind.speed} mph</p>
          <p>Visibility: {weatherData.visibility} meters</p>
        </div>
      )}

      {/* Toggle button */}
      <div className="dropdown" onClick={() => setShowMore(!showMore)}>
        {showMore ? <IoMdArrowDropupCircle /> : <IoMdArrowDropdownCircle />}
      </div>
    </div>
  );
};

export default Weather;
