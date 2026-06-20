# 🌤️ Weather App

A simple and responsive Weather Application built with **HTML, CSS, JavaScript, Node.js, and Express.js**.

The application fetches real-time weather data using the **OpenWeather API** and displays weather information in a clean and modern user interface.

---

## 🚀 Features

- Search weather by city name
- Real-time weather information
- Display temperature, weather condition, humidity, and wind speed
- Responsive design for desktop and mobile devices
- Backend API built with Node.js and Express
- Error handling and input validation
- Secure API key management using environment variables

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript (Vanilla JS)

### Backend
- Node.js
- Express.js
- Axios
- dotenv
- CORS

### API
- OpenWeather API

---

## 📁 Project Structure

```text
weather-app/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   ├── .env.example
│   └── .env (not uploaded)
│
├── screenshots/
│   ├── Home Page.png
│   ├── Weather Result.png
│   └── Weather Result (2).png
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd weather-app
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Create Environment Variables

Create a `.env` file inside the `backend` folder:

```env
API_KEY=your_openweather_api_key
PORT=3000
```

### 4. Start the Backend Server

```bash
npm start
```

Server will run on:

```text
http://localhost:3000
```

### 5. Run the Frontend

Open `index.html` in your browser

or use **Live Server** in VS Code.

---

## 🌐 API Used

### OpenWeather API

https://openweathermap.org/api

---

## 📸 Screenshots

### 🏠 Home Page

![Home Page](./screenshots/Home%20Page.png)

### 🌤️ Weather Result

![Weather Result](./screenshots/Weather%20Result.png)

### 📊 Another Example

![Weather Result 2](./screenshots/Weather%20Result%20(2).png)

---

## ⚠️ Notes

- Do not upload `.env` to GitHub.
- Do not upload `node_modules`.
- Make sure the backend server is running before using the frontend.
- Create your own API key from OpenWeather API.

---

## 🔒 Environment Variables

The backend requires the following environment variable:

```env
API_KEY=your_openweather_api_key
```

Example file:

```env
API_KEY=your_api_key_here
PORT=3000
```

---

## 👨‍💻 Author

**Mohamed Gamal**

GitHub Profile:
Add your GitHub profile link here.

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub.