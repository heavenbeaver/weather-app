import { useState } from 'react'
import React from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import SearchBar from './SearchBar'
import WeatherCard from './WeatherCard'
import Forecast from './Forecast'

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const apiKey = 'c7d7426ccc8f56bacc1533e405e98b3a';

  const fetchWeather = async (city) => {
    try {
      const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang={ru}`);
      setWeatherData(weatherResponse.data);
      console.log(weatherResponse.data);

      const forecastResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang={ru}`);
      setForecastData(forecastResponse.data.list);
      console.warn(forecastResponse.data.list);

    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div>
      <h1>Weather App</h1>
      <SearchBar onSearch={fetchWeather} />
      <WeatherCard weatherData={weatherData}/>
      <Forecast forecastData={forecastData}/>
      
    </div>
  );
}

export default App

