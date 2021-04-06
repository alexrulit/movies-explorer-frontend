import React from 'react';
import '../Movies/films/films.css';
import SearchForm from '../SearchForm/SearchForm';
import SavedMoviesCardList from '../SavedMoviesCardList/SavedMoviesCardList';

function SavedMovies() {
    return (
        <div>
            <SearchForm/>
            <section className="films">
                <SavedMoviesCardList/>
            </section>
        </div>
    )
}

export default SavedMovies;