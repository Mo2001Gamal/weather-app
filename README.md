🌤️ Weather App
A simple and responsive Weather Application built using HTML, CSS, JavaScript, Node.js, and Express.
It fetches real-time weather data using the OpenWeather API.
🚀 Features
Search weather by city name
Real-time weather data
Displays temperature, weather condition, and description
Responsive UI design
Backend API using Node.js & Express


🛠️ Tech Stack
Frontend:
HTML5
CSS3
JavaScript (Vanilla)
Backend:
Node.js
Express.js
dotenv
OpenWeather API


📁 Project Structure
Plain text
weather-app/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── .env (not uploaded)
│
├── index.html
├── style.css
├── script.js
└── screenshots/
    ├── home.png
    └── result.png


🚀 Quick Start
1. Clone the project
Bash
git clone <your-repo-link>
cd weather-app
2. Install backend dependencies
Bash
cd backend
npm install
3. Setup environment variables
Create a .env file inside backend:
Environment
API_KEY=your_openweather_api_key
4. Run backend server
Bash
node server.js
Server will run at:
Plain text
http://localhost:3000
5. Run frontend
Open index.html in browser
or use Live Server in VS Code.


🌐 API Used
OpenWeather API
https://openweathermap.org/api⁠�


📸 Screenshots
🏠 ### Home Page
![Home](./screenshots/home.png)
�
🌤️ ### Weather Result
![Result](./screenshots/result.png)
�


⚠️ Notes
Do NOT upload .env or node_modules to GitHub
Run npm install before starting the backend
Make sure backend is running before using frontend


👨‍💻 Author
Mohamed Gamal


⭐ If you like this project
Give it a star ⭐ on GitHub