import { FaSeedling } from "react-icons/fa"; // Example icon for sensor
import React, { useEffect, useState } from "react";
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";
import axios from "axios";

const SensorReadings = () => {
  const [showMore, setShowMore] = useState(false);
  const [data, setData] = useState({
    humidity: 0,
    temperature: 0,
    soilMoisture: 0,
    visibility: 0,
    weather: "nil",
    feels: "nil",
  });
  const [error, setError] = useState(null); // State to handle errors
  const [loading, setLoading] = useState(true); // State to handle loading

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Set loading state before fetching
        const response = await axios.get(
          "http://localhost:5000/api/sensor-data"
        ); // Fetch from your API
        setData(response.data);
      } catch (err) {
        setError("Could not load sensor data. Please try again later.");
      } finally {
        setLoading(false); // Reset loading state
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading sensor data...</div>;
  }

  if (error) {
    return (
      <div className="sensor-error">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="sensor-readings-component">
      <h2>
        <FaSeedling className="sensor-icon" /> Sensor Readings
      </h2>
      <p>Humidity: {data.humidity}%</p>
      <p>Temperature: {data.temperature}</p>
      <p>Feels Like: {data.feels}</p>
      <p>Visibility: {data.visibility}</p>
      {showMore && (
        <>
          <p>Weather: {data.weather}</p>
          <p>Soil Moisture: {data.soilMoisture}%</p>
        </>
      )}
      <div className="dropdown" onClick={() => setShowMore(!showMore)}>
        {showMore ? <IoMdArrowDropupCircle /> : <IoMdArrowDropdownCircle />}
      </div>
    </div>
  );
};

export default SensorReadings;
