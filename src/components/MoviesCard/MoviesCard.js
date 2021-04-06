import React from 'react';

function MoviesCard(props) {
    let filmClassNames = `films__save ${props.isSaved ? 'films__save_saved' : 'films__save_unsaved'}`;
    if (props.isSavedPlace) {
        filmClassNames = `films__save films__save_delete`;
    }

    return (
        <li className="films__element">
            <div className="films__description">
                <p className="films__name">{props.name}</p>
                <p className="films__duration">{props.duration}</p>
            </div>
            <img class="films__thumbnail" src={props.img} alt={props.name}/>
            <button className={filmClassNames}>Сохранить</button>
        </li>
    )
}

export default MoviesCard;