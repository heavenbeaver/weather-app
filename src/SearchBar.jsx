import React, { useState } from "react";

export default function SearchBar({onSearch}) {
    const [city, setCity] = useState('');
    
    const handleChange = (event) => {
        setCity(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(city);
        setCity('');
    };

    return (
        <form onSubmit={handleSubmit} className="search__form">
            <input className="weather__input" type="text"
            value={city}
            onChange={handleChange}
            placeholder="Введите название города" />
            <button type="submit">Поиск</button>
        </form>
    );
}