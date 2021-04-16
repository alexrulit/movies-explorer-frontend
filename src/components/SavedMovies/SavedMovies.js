import React, {useState} from 'react';
import '../Movies/films/films.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies(props) {
    const [filteredCards, setFilteredCards] = useState([]);

    return (
        <div>
            <Header loggedIn={props.loggedIn} color={false} signOut={props.signOut} windowWidth={props.windowWidth} handleOpenMenu={props.handleOpenMenu}/>
            <SearchForm cards={props.cards} filterCards={setFilteredCards} savedCards={props.cards}/>
            <section className="films">
                <MoviesCardList cards={filteredCards} isLoad={props.isLoad} handleMoreCards={props.handleMoreCards} initCardsCount={props.initCardsCount} handleCardDelete={props.handleCardDelete} isSavedPlace={true}/>
            </section>
            <Footer/>
        </div>
    )
}

export default SavedMovies;