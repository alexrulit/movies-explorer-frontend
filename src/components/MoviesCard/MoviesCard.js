import React from 'react';

function MoviesCard(props) {
    return (
        <li className="films__element">
            <img className="films__thumbnail" src={props.img} alt={props.alt}/>
            <div className="films__description">
                <p className="films__name">{props.name}</p>
                <button className="films__like"></button>
            </div>
            <p className="films__duration">{props.duration}</p>
        </li>
    )
}

export default MoviesCard;