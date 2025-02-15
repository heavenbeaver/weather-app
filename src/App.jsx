import { useState } from 'react'
import React from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import SearchBar from './SearchBar'
import WeatherCard from './WeatherCard'
import Forecast from './Forecast'

import logo from './assets/Header logo.svg'

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const apiKey = 'c7d7426ccc8f56bacc1533e405e98b3a';

  const fetchWeather = async (city) => {
    try {
      const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ru`);
      setWeatherData(weatherResponse.data);
      console.log(weatherResponse.data);

      const forecastResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=ru`);
      setForecastData(forecastResponse.data.list);
      console.log(forecastResponse.data.list);

    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div>
      <header>
        <div className="container">
          <nav>
            <div className="logo">
              <img className='nav__logo' src={logo} alt="" />
              <p className='logo__text'>Погода React JS</p>
            </div>
            <div className="search">
              <SearchBar onSearch={fetchWeather} />
            </div>
          </nav>
        </div>
      </header>
      <main>
        <section className="current__weather">
          <div className="container">
            <WeatherCard weatherData={weatherData} />
          </div>
        </section>
        <section className="forecast">
          <div className="container">
            <Forecast forecastData={forecastData} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App

