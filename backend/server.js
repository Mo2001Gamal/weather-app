import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

if (!process.env.API_KEY) {
  console.error("Missing API_KEY in .env file");
  process.exit(1);
}

const app = express();
app.use(cors());

const API_KEY = process.env.API_KEY;
const PORT = process.env.PORT || 3000;

app.get("/weather", async (req, res) => {
  const city = req.query.city;

  if (!city || city.trim().length < 2) {
    return res.status(400).json({
      error: "Please provide a valid city name",
    });
  }

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        city
      )}&appid=${API_KEY}&units=metric`
    );

    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({
      error:
        error.response?.data?.message ||
        error.message ||
        "Failed to fetch weather data",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});