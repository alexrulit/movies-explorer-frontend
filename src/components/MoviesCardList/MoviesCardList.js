import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Film1 from '../../images/100.jpg';
import Film2 from '../../images/33.jpg';

function MoviesCardList() {
    return (
        <div>
            <ul className="films__list">
                <MoviesCard img={Film1} alt="100 лет дизайна" name="Киноальманах «100 лет дизайна»" duration="1ч42м"/>
                <MoviesCard img={Film2} alt="33 слова о дизайне" name="33 слова о дизайне" duration="1ч42м"/>
                <MoviesCard img={Film1} alt="100 лет дизайна" name="Киноальманах «100 лет дизайна»" duration="1ч42м"/>
                <MoviesCard img={Film2} alt="33 слова о дизайне" name="33 слова о дизайне" duration="1ч42м"/>
                <MoviesCard img={Film1} alt="100 лет дизайна" name="Киноальманах «100 лет дизайна»" duration="1ч42м"/>
                <MoviesCard img={Film2} alt="33 слова о дизайне" name="33 слова о дизайне" duration="1ч42м"/>
                <MoviesCard img={Film1} alt="100 лет дизайна" name="Киноальманах «100 лет дизайна»" duration="1ч42м"/>
                <MoviesCard img={Film2} alt="33 слова о дизайне" name="33 слова о дизайне" duration="1ч42м"/>
                <MoviesCard img={Film1} alt="100 лет дизайна" name="Киноальманах «100 лет дизайна»" duration="1ч42м"/>
                <MoviesCard img={Film2} alt="33 слова о дизайне" name="33 слова о дизайне" duration="1ч42м"/>
                <MoviesCard img={Film1} alt="100 лет дизайна" name="Киноальманах «100 лет дизайна»" duration="1ч42м"/>
                <MoviesCard img={Film2} alt="33 слова о дизайне" name="33 слова о дизайне" duration="1ч42м"/>
                <MoviesCard img={Film1} alt="100 лет дизайна" name="Киноальманах «100 лет дизайна»" duration="1ч42м"/>
                <MoviesCard img={Film2} alt="33 слова о дизайне" name="33 слова о дизайне" duration="1ч42м"/>
                <MoviesCard img={Film1} alt="100 лет дизайна" name="Киноальманах «100 лет дизайна»" duration="1ч42м"/>
                <MoviesCard img={Film2} alt="33 слова о дизайне" name="33 слова о дизайне" duration="1ч42м"/>
                <MoviesCard img={Film1} alt="100 лет дизайна" name="Киноальманах «100 лет дизайна»" duration="1ч42м"/>
                <MoviesCard img={Film2} alt="33 слова о дизайне" name="33 слова о дизайне" duration="1ч42м"/>
                <MoviesCard img={Film1} alt="100 лет дизайна" name="Киноальманах «100 лет дизайна»" duration="1ч42м"/>
                <MoviesCard img={Film2} alt="33 слова о дизайне" name="33 слова о дизайне" duration="1ч42м"/>
                <MoviesCard img={Film1} alt="100 лет дизайна" name="Киноальманах «100 лет дизайна»" duration="1ч42м"/>
                <MoviesCard img={Film2} alt="33 слова о дизайне" name="33 слова о дизайне" duration="1ч42м"/>
            </ul>
            <button className="films__more">Ещё</button>
        </div>
    )
}

export default MoviesCardList;