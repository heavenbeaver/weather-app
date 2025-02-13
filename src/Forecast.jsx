import React from "react";

export default function Forecast({forecastData}) {
    return (
        <div>
            {forecastData?.map((day, index) => (
                <div key={index}>
                    <p>{day.dt_txt}</p>
                    <p>{day.main.temp}°C</p>
                    <p>{day.weather[0].description}</p>
                </div>
            ))}
        </div>
    );
}