const express = require("express");
const cors = require("cors"); // To handle cross-origin requests

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS for all requests
app.use(express.json()); // Parse incoming JSON requests

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the backend API");
});
app.get("/api/sensor-data", (req, res) => {
  const sensorData = {
    temperature: 24.5,
    humidity: 25,
    soilMoisture: 30,
    visibility: 250,
    weather: "rain",
    feels: "rainy",
  };
  res.json(sensorData);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
