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
        document.querySelector('.search__form').querySelector('input').blur();
        
    };

    function clearPlaceholder() {
        document.querySelector('.search__form').querySelector('input').placeholder = '';
    }

    function getPlaceholder() {
        document.querySelector('.search__form').querySelector('input').placeholder = 'Введите город';
    }

    

    return (
        <form onSubmit={handleSubmit} className="search__form">
            <input className="weather__input" type="text"
            value={city}
            onChange={handleChange}
            onFocus={clearPlaceholder}
            onBlur={getPlaceholder}
            placeholder="Введите город" />
            <button type="submit">Узнать погоду</button>
        </form>
    );
}