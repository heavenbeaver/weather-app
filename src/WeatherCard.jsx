import React from "react";

export default function WeatherCard({weatherData}) {
    if (!weatherData) return null;

    return (
        <div>
            <h2>{weatherData.name}, {weatherData.sys.country}</h2>
            <p>{weatherData.weather[0].description}</p>
            <p>{Math.round(weatherData.main.temp)}°C</p>
            <p>Влажность: {weatherData.main.humidity}%</p>
            <p>Скорость ветра: {weatherData.wind.speed} м/с</p>
        </div>
    );
}