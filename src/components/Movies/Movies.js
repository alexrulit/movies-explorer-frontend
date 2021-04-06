import React from 'react';
import './films/films.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies() {
    return (
        <div>
            <SearchForm/>
            <section className="films">
                <MoviesCardList/>
            </section>
        </div>
    )
}

export default Movies;