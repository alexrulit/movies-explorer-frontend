import React, { useState } from 'react';
import './films/films.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


function Movies(props) {
    const [filteredCards, setFilteredCards] = useState([]);

    return (
        <div>
            <Header loggedIn={props.loggedIn} color={false} signOut={props.signOut} windowWidth={props.windowWidth} handleOpenMenu={props.handleOpenMenu}/>
            <SearchForm cards={props.cards} filterCards={setFilteredCards} savedCards={props.savedCards}/>
            <section className="films">
                <MoviesCardList cards={filteredCards} isLoad={props.isLoad} handleMoreCards={props.handleMoreCards} initCardsCount={props.initCardsCount} handleCardSave={props.handleCardSave} handleCardDelete={props.handleCardDelete}/>
            </section>
            <Footer/>
        </div>
    )
}

export default Movies;