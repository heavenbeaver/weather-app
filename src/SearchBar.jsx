import React, { useState } from "react";

export default function SearchBar({onSearch}) {
    const [city, setCity] = useState('');
    

    // изменяем состояние и передаем то что вводит пользователь
    const handleChange = (event) => {
        setCity(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(city);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input className="weather__input" type="text"
            value={city}
            onChange={handleChange}
            placeholder="Введите город" />
            <br />
            <br />
            <button type="submit">Узнать погоду</button>
        </form>
    );
}