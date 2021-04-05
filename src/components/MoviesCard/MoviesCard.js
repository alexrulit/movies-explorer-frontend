import React from 'react';

function MoviesCard(props) {
    return (
        <li className="films__element">
            <div className="films__description">
                <p className="films__name">{props.name}</p>
                <p className="films__duration">{props.duration}</p>
            </div>
            <img class="films__thumbnail" src={props.img} alt={props.name}/>
            <button className="films__save">Сохранить</button>
        </li>
    )
}

export default MoviesCard;