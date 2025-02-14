import React from "react";

export default function Forecast({forecastData}) {
    if (!forecastData) return null;

    

    return (
        <div className="forecast__card">
            {forecastData?.map((day, index) => (
                <div key={index} className="forecast__day">
                    <p className="forecast__date">{day.dt_txt}</p>
                    <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt="Иконка погоды" />
                    <p>{Math.round(day.main.temp)}°C</p>
                    <p>{day.weather[0].description}</p>
                </div>
            ))}
        </div>
    );
}