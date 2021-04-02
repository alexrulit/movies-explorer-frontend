import React from 'react';
import './search/search.css';

function SearchForm() {
    return (
        <form action="#" className="search">
                <div className="search__box">
                    <input type="text" className="search__input" placeholder="Фильм"/>
                    <button type="submit" className="search__button"></button>
                </div>
                <label className="search__checkbox-container">
                    <span className="search__label">Короткометражки</span> 
                    <input type="checkbox" id="shortfilm" className="search__shortfilm"/>
                    <span className="search__checkbox"></span>
                </label>
        </form>
    )
}

export default SearchForm;