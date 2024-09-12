import React, { useEffect, useState } from "react";
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";
import axios from "axios";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [showMore, setShowMore] = useState(false); // State to toggle more weather details
  const [error, setError] = useState(null); // State to handle errors
  const [loading, setLoading] = useState(true); // State to handle loading

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        setLoading(true); // Set loading state before fetching
        const apiUrl =
          "https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=19d7b9578fccbadc7edbc93d08aa9123";

        const response = await axios.get(apiUrl);
        setWeatherData(response.data); // Store the API response data
      } catch (err) {
        setError(
          "Could not load weather data. Please check your network connection and try again."
        );
      } finally {
        setLoading(false); // Reset loading state
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div className="weather-component">
      <h2>Weather Data</h2>
      {loading ? (
        <div className="loading">
          <p>Loading weather data...</p>
          {/* Add a spinner or animation here if desired */}
        </div>
      ) : error ? (
        <div className="weather-error">
          <p>{error}</p>
        </div>
      ) : (
        <>
          <p>Temperature: {(weatherData.main.temp - 273.15).toFixed(2)}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Pressure: {weatherData.main.pressure} hPa</p>
          <p>Weather: {weatherData.weather[0].description}</p>

          {showMore && (
            <div className="extra-weather-details">
              <p>
                Max Temp: {(weatherData.main.temp_max - 273.15).toFixed(2)}°C
              </p>
              <p>
                Min Temp: {(weatherData.main.temp_min - 273.15).toFixed(2)}°C
              </p>
              <p>Wind Speed: {weatherData.wind.speed} mph</p>
              <p>Visibility: {weatherData.visibility} meters</p>
            </div>
          )}

          <div
            className="dropdown"
            onClick={() => setShowMore(!showMore)}
            role="button"
            aria-expanded={showMore}
          >
            {showMore ? <IoMdArrowDropupCircle /> : <IoMdArrowDropdownCircle />}
          </div>
        </>
      )}
    </div>
  );
};

export default Weather;
