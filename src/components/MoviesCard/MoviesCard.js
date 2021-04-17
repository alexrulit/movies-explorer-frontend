import React, { useState } from 'react';

function MoviesCard(props) {
    const [cardSaved, setCardSaved] = useState(false);

    React.useEffect(() => {
        if (props.card.isSaved) {
            setCardSaved(true);
        }
    }, [props.card.isSaved])
    

    let filmClassNames = `films__save ${cardSaved ? 'films__save_saved' : 'films__save_unsaved'}`;
    let cardImageUrl = "https://images.unsplash.com/photo-1613843596852-9a6317dae0b8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3452&q=80";
    if (props.card.image && props.card.image.url) {
        cardImageUrl = "https://api.nomoreparties.co" + props.card.image.url;
    }

    if (props.isSavedPlace) {
        filmClassNames = `films__save films__save_delete`;
        cardImageUrl = props.card.image;
    }

    function thumbnailClick() {
        if (props.isSavedPlace) {
            window.open(props.card.trailer, "_blank");
        } else {
            window.open(props.card.trailerLink, "_blank");
        }
        
    }

    function handleCardButtonClick() {
        if (props.isSavedPlace) {
            props.handleCardDelete(props.card);
        } else if (cardSaved) {
            setCardSaved(false);
            props.handleCardDelete(props.card);
        } else {
            setCardSaved(true);
            props.handleCardSave(props.card);
        }
    }

    return (
        <li className="films__element">
            <div className="films__description">
                <p className="films__name">{props.card.nameRU}</p>
                <p className="films__duration">{props.card.duration+"м"}</p>
            </div>
            <img className="films__thumbnail" src={cardImageUrl} alt={props.card.nameRU} onClick={thumbnailClick}/>
            <button className={filmClassNames} onClick={handleCardButtonClick}>Сохранить</button>
        </li>
    )
}

export default MoviesCard;