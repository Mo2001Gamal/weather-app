import axios from "axios";

export default async function handler(req, res) {
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
      )}&appid=${process.env.API_KEY}&units=metric`
    );

    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(error.response?.status || 500).json({
      error:
        error.response?.data?.message ||
        error.message ||
        "Failed to fetch weather data",
    });
  }
}
