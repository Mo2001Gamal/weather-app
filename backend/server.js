import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());

const API_KEY = process.env.API_KEY;

app.get("/weather", async (req, res) => {
  const city = req.query.city;

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    res.json(response.data);

  } catch (error) {
    res.status(500).json({ error: "Error fetching data" });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

console.log("API KEY:", process.env.API_KEY);