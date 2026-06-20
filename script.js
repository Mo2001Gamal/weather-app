const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const icon = document.querySelector(".weather-icon");
const statusEl = document.getElementById("status");

const API_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:3000/weather"
    : "/weather";

async function getWeather() {
  const city = cityInput.value.trim();

  if (!city) {
    statusEl.className = "error";
    statusEl.textContent = "Please enter a city name";
    return;
  }

  try {
    statusEl.className = "loading";
    statusEl.textContent = "Loading...";

    const res = await fetch(
      `${API_URL}?city=${encodeURIComponent(city)}`
    );

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));

      throw new Error(
        errorData.error || `HTTP Error: ${res.status}`
      );
    }

    const data = await res.json();

    cityName.textContent = data.name;
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    condition.textContent = data.weather[0].description;
    humidity.textContent = `${data.main.humidity}%`;
    wind.textContent = `${data.wind.speed} km/h`;

    const weatherMain = data.weather[0].main.toLowerCase();

    if (weatherMain.includes("cloud")) icon.textContent = "☁️";
    else if (weatherMain.includes("rain")) icon.textContent = "🌧️";
    else if (weatherMain.includes("clear")) icon.textContent = "☀️";
    else if (weatherMain.includes("snow")) icon.textContent = "❄️";
    else icon.textContent = "🌤️";

    statusEl.textContent = "";
    statusEl.className = "";

    cityInput.value = "";
  } catch (error) {
    statusEl.className = "error";
    statusEl.textContent = error.message;
    console.error(error);
  }
}

searchBtn.addEventListener("click", getWeather);

cityInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    getWeather();
  }
});