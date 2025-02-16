import { useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'
import WeatherCard from './WeatherCard'
import Forecast from './Forecast'
import './App.css'
import logo from '../public/logo.svg'

// получаем данные и убираем повторяющиеся дни
const processForecastData = (list) => {
  const dailyData = {};

  list.forEach((item) => {
    const date = item.dt_txt.split(" ")[0]; // YYYY-MM-DD
    const temp = item.main.temp;

    if (!dailyData[date]) {
      dailyData[date] = {
        min: temp,
        max: temp,
        icon: item.weather[0].icon,
        description: item.weather[0].description
      };
    } else {
      dailyData[date].min = Math.min(dailyData[date].min, temp);
      dailyData[date].max = Math.max(dailyData[date].max, temp);
    }
  });

  return Object.entries(dailyData).map(([date, data]) => ({
    date,
    ...data
  }));
};

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

      

      const dailyForecast = processForecastData(forecastResponse.data.list);
      console.log(dailyForecast); // Выведет массив с 5 днями

      setForecastData(dailyForecast);
      console.log(forecastResponse.data.list);

    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };


  // получение погоды по геолокации
  useEffect(() => {

    navigator.permissions.query({ name: "geolocation" }).then((result) => {
      if (result.state === 'denied') {
        alert("Геолокация заблокирована. Разрешите доступ в настройках.", error);
      }
    });

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const {latitude, longitude} = position.coords;

        try {
          const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=ru`);

          const forecastResponseGeo = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=ru`);
          
          setWeatherData(response.data);
          const uniqueForecastGeo = processForecastData(forecastResponseGeo.data.list);
          setForecastData(uniqueForecastGeo);

        } catch(error) {
          alert("Ошибка при получении погоды:", error);
        }
      }
    );
  }, []);



  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div className="logo">
              <img className='nav__logo' src={logo} alt="" />
              <p className='logo__text'>Погода</p>
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
    </>
  );
}

export default App

