# Weather App:

A simple React application that allows users to input a zipcode and retrieves weather information for that location using the OpenWeatherMap API.

### Features:

User can input a zip code to fetch weather details.
Responsive UI built with Bootstrap.
Dockerized the app for easier deployments and testing.

### Prerequisites:

Node.js and npm
Docker
OpenWeatherMap API Key

### Installation:

clone the repo: git clone https://github.com/robfoss/weather-app.git
cd weather-app

### Install dependencies:

npm install

### Set up environment variables:

Create a .env file in the root directory and add the following: REACT_APP_OPENWEATHER_API_KEY=YOUR_API_KEY
Replace YOUR_API_KEY with your OpenWeatherMap API key.

### Runnning the app: npm start

Visit http://localhost:3000 to view the app.

### Docker:

Build the image: docker build -t weather-app .
Run the container: docker run -p 3000:3000 weather-app
