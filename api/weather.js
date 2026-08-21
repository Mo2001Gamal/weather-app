export default async function handler(req, res) {
  const city = req.query.city;

  if (!city || city.trim().length < 2) {
    return res.status(400).json({
      error: "Please provide a valid city name",
    });
  }

  if (!process.env.API_KEY) {
    return res.status(500).json({
      error: "API_KEY is not configured",
    });
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        city
      )}&appid=${process.env.API_KEY}&units=metric`
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        error: data.message || "Failed to fetch weather data",
      });
    }

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      error: "Failed to fetch weather data",
    });
  }
}
