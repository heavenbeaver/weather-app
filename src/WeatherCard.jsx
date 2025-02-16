import React from "react";
import temp from './assets/temp.svg'
import pressure from './assets/pressure.svg'
import snowrain from './assets/snowrain.svg'
import wind from './assets/wind.svg'

export default function WeatherCard({weatherData}) {
    if (!weatherData) return null;

    return (
        <div className="weather__wrapper">
            <div className="weather__card">

                <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="Иконка погоды" />
                <div>
                    <p className="current__temp">{Math.round(weatherData.main.temp)}°C</p>
                    <p className="today">Сегодня</p>
                </div>
                <div>
                    <p className="weather__description">{weatherData.weather[0].    description}</p>
                    <p className="weather__city">Город: {weatherData.name}, {weatherData.sys.country}</p>

                </div>
                
            </div>
            <div className="description__card">
                <ul className="desc__list">

                    <li className="desc__item">
                        <div className="desc__name">
                            <img src={temp} alt="" />
                            <p className="desc__title">Температура</p>
                        </div>
                        
                        <p>{Math.round(weatherData.main.temp)}°C - ощущается как {Math.round(weatherData.main.feels_like)}°C</p>
                    </li>

                    <li className="desc__item">
                        <div className="desc__name">
                            <img src={pressure} alt="" />
                            <p className="desc__title">Давление</p>
                        </div>
                        <p>{weatherData.main.pressure} мм ртутного столба</p>
                    </li>

                    <li className="desc__item">
                        <div className="desc__name">
                            <img src={snowrain} alt="" />
                            <p className="desc__title">Влажность</p>
                        </div>
                        <p>{weatherData.main.humidity}%</p>
                    </li>

                    <li className="desc__item">
                        <div className="desc__name">
                            <img src={wind} alt="" />
                            <p className="desc__title">Ветер</p>
                        </div>
                        <p>{weatherData.wind.speed}м/с</p>
                    </li>

                </ul>
            </div>
        </div>
    );
}