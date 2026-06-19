const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const icon = document.querySelector(".weather-icon");

async function getWeather() {
  const city = cityInput.value.trim();

  if (!city) {
    alert("Please enter a city name");
    return;
  }

  try {
    const res = await fetch(`http://localhost:3000/weather?city=${city}`);
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

    cityInput.value = "";

  } catch (error) {
    alert("Error fetching weather data");
    console.log(error);
  }
}

searchBtn.addEventListener("click", getWeather);

cityInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    getWeather();
  }
});