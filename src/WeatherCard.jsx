import React from "react";

export default function WeatherCard({weatherData}) {
    if (!weatherData) return null;

    return (
        <div className="weather__wrapper">
            <div className="weather__card">

                <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="Иконка погоды" />
                
                <p className="current__temp">{Math.round(weatherData.main.temp)}°C</p>
                
                <div>
                    <p className="weather__description">{weatherData.weather[0].    description}</p>
                    <p className="weather__city">Город: {weatherData.name}, {weatherData.sys.country}</p>

                </div>
                
            </div>
            <div className="description__card">
                <ul className="desc__list">

                    <li className="desc__item"><img src="./src/assets/temp.svg" alt="" /><p className="desc__title">Температура</p><p>{Math.round(weatherData.main.temp)}°C - ощущается как {Math.round(weatherData.main.feels_like)}°C</p></li>

                    <li className="desc__item"><img src="./src/assets/pressure.svg" alt="" /><p className="desc__title">Давление</p><p>{weatherData.main.pressure} мм ртутного столба</p></li>

                    <li className="desc__item"><img src="./src/assets/snowrain.svg" alt="" /><p className="desc__title">Влажность</p><p>{weatherData.main.humidity}%</p></li>

                    <li className="desc__item"><img src="./src/assets/wind.svg" alt="" /><p className="desc__title">Ветер</p><p>{weatherData.wind.speed}м/с</p></li>

                </ul>
            </div>
        </div>
    );
}