import React, { useState } from "react";

export default function SearchBar({onSearch}) {
    const [city, setCity] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const apiKey = 'c7d7426ccc8f56bacc1533e405e98b3a';
    
    const handleChange = (event) => {
        const value = event.target.value;
        setCity(value);

        if (value.length > 2) {
            fetchCities(value);
        } else {
            setSuggestions([]);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (city.trim()) {
            onSearch(city);
            setCity('');
            setSuggestions([]);
        }
    };

    function clearPlaceholder() {
        document.querySelector('.search__form').querySelector('input').placeholder = '';
    }

    function getPlaceholder() {
        document.querySelector('.search__form').querySelector('input').placeholder = 'Введите город';
    }

    const fetchCities = async (query) => {
        try {
            const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${apiKey}&lang=ru`);
            const data = await response.json();

            // Фильтруем только города, названия которых на русском
            const russianCities = data
                .filter(item => item.local_names?.ru) // Убираем города без русского названия
                .map(item => ({
                    name: item.local_names.ru,
                    country: item.country
                }));

            setSuggestions(data || []);
        } catch (error) {
            console.error('Ошибка при загрузке городов', error);
        }
    }

    const handleSuggestionClick = (cityName) => {
        setCity(cityName);
        setSuggestions([]);
        if (cityName.trim()) {
            onSearch(cityName);
            setCity('');
            setSuggestions([]);
        }
    };

    

    return (
        <form onSubmit={handleSubmit} className="search__form">
            <input className="weather__input" type="text"
            value={city}
            onChange={handleChange}
            onFocus={clearPlaceholder}
            onBlur={getPlaceholder}
            autoComplete="off"
            placeholder="Введите город" />
            <button type="submit">Узнать погоду</button>
            {suggestions.length > 0 && (
                <div className="city__placeholder">
                    <ul className="city__list">
                        {suggestions.map((item, index) => (
                            <li key={index} onClick={() => handleSuggestionClick(item.name)}>
                                {item.name}, {item.country}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </form>
    );
}

// когда я ввожу буквы в поиск, нужно делать запрос по городам по апи, и то что он нашел выводить в список, а по нажатию на город подставлять это значение в инпут