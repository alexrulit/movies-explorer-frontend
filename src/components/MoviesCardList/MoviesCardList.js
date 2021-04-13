import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

function MoviesCardList(props) {

    let moreButtonClass = `${props.cards.length <= props.initCardsCount ? 'films__more_disabled' : 'films__more'}`;
    

    return (
        <div>
            <ul className="films__list">
                {props.cards.slice(0,props.initCardsCount).map((item) => {
                    let id;
                    if (props.isSavedPlace) {
                        id = item.movieId;
                    } else {
                        id = item.id;
                    }
                    return (
                        <MoviesCard isSavedPlace={props.isSavedPlace} savedCards={props.savedCards} key={id} card={item} handleCardSave={props.handleCardSave} handleCardDelete={props.handleCardDelete}/>
                    );
                })}
            </ul>
            <button className={moreButtonClass} onClick={props.handleMoreCards}>Ещё</button>
            {props.isLoad && <Preloader />}
        </div>
        
    )
}

export default MoviesCardList;