import { FaSeedling } from "react-icons/fa"; // Example icon for sensor
import React, { useEffect, useState } from "react";
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";

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

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/api/sensor-data"); // Fetch from your API
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);
  if (!data) {
    return <div>Loading sensor data...</div>;
  }

  return (
    <div className="sensor-readings-component">
      <h2>
        <FaSeedling className="sensor-icon" /> Sensor Readings
      </h2>
      <p>Humidity: {data.humidity}%</p>
      <p>Temperature: {data.temperature}</p>
      <p>Feels Like: {data.feels}%</p>
      <p>Visibility: {data.visibility}</p>
      {showMore && (
        <>
          <p>Weather: {data.weather}%</p>
          <p>SoilMoisture: {data.soilMoisture}%</p>
        </>
      )}
      <div className="dropdown" onClick={() => setShowMore(!showMore)}>
        {showMore ? <IoMdArrowDropupCircle /> : <IoMdArrowDropdownCircle />}
      </div>
    </div>
  );
};

export default SensorReadings;
