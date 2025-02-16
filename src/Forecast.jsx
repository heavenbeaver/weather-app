import React from "react";

export default function Forecast({forecastData}) {
    if (!forecastData) return null;
    return (
        <div className="forecast__card">
            {forecastData?.map((day, index) => (
                <div key={index} className="forecast__day">
                    <p className="forecast__date__day">{new Date(day.date).toLocaleDateString("ru-RU", { weekday: "short" })}</p>
                    <p className="forecast__date__number">{new Date(day.date).toLocaleDateString("ru-RU", { day: "numeric", month: "short" })}</p>
                    <img src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`} alt="Иконка погоды" />
                    <p className="max__temp">{Math.round(day.max)}°C</p>
                    <p className="min__temp">{Math.round(day.min)}°C</p>
                    <p className="day__description">{day.description}</p>
                </div>
            ))}
        </div>
    );
}