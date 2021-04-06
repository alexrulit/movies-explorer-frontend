import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Film1 from '../../images/100.jpg';
import Film2 from '../../images/33.jpg';

function MoviesCardList() {
    return (
        <div>
            <ul className="films__list">
                <MoviesCard isSaved='true' img={Film1} alt="В погоне за бенгси" name="В погоне за бенгси" duration="27 минут"/>
                <MoviesCard img={Film2} alt="В погоне за бенгси" name="В погоне за бенгси" duration="27 минут"/>
                <MoviesCard img={Film1} alt="В погоне за бенгси" name="В погоне за бенгси" duration="27 минут"/>
                <MoviesCard isSaved='true' img={Film2} alt="В погоне за бенгси" name="В погоне за бенгси" duration="27 минут"/>
                <MoviesCard img={Film1} alt="В погоне за бенгси" name="В погоне за бенгси" duration="27 минут"/>
                <MoviesCard isSaved='true' img={Film2} alt="В погоне за бенгси" name="В погоне за бенгси" duration="27 минут"/>
                <MoviesCard img={Film1} alt="В погоне за бенгси" name="В погоне за бенгси" duration="27 минут"/>
                <MoviesCard img={Film2} alt="В погоне за бенгси" name="В погоне за бенгси" duration="27 минут"/>
                <MoviesCard img={Film1} alt="В погоне за бенгси" name="В погоне за бенгси" duration="27 минут"/>
                <MoviesCard img={Film2} alt="В погоне за бенгси" name="В погоне за бенгси" duration="27 минут"/>
                <MoviesCard img={Film1} alt="В погоне за бенгси" name="В погоне за бенгси" duration="27 минут"/>
                <MoviesCard isSaved='true' img={Film2} alt="В погоне за бенгси" name="В погоне за бенгси" duration="27 минут"/>
                <MoviesCard img={Film1} alt="В погоне за бенгси" name="В погоне за бенгси" duration="27 минут"/>
                <MoviesCard img={Film2} alt="В погоне за бенгси" name="В погоне за бенгси" duration="27 минут"/>
                <MoviesCard img={Film1} alt="В погоне за бенгси" name="В погоне за бенгси" duration="27 минут"/>
                <MoviesCard img={Film2} alt="В погоне за бенгси" name="В погоне за бенгси" duration="27 минут"/>
                <MoviesCard img={Film1} alt="В погоне за бенгси" name="В погоне за бенгси" duration="27 минут"/>
                <MoviesCard img={Film2} alt="В погоне за бенгси" name="В погоне за бенгси" duration="27 минут"/>
                <MoviesCard img={Film1} alt="В погоне за бенгси" name="В погоне за бенгси" duration="27 минут"/>
                <MoviesCard img={Film2} alt="В погоне за бенгси" name="В погоне за бенгси" duration="27 минут"/>
                <MoviesCard img={Film1} alt="В погоне за бенгси" name="В погоне за бенгси" duration="27 минут"/>
                <MoviesCard img={Film2} alt="В погоне за бенгси" name="В погоне за бенгси" duration="27 минут"/>
                <MoviesCard img={Film1} alt="В погоне за бенгси" name="В погоне за бенгси" duration="27 минут"/>
                <MoviesCard img={Film2} alt="В погоне за бенгси" name="В погоне за бенгси" duration="27 минут"/>
                <MoviesCard img={Film1} alt="В погоне за бенгси" name="В погоне за бенгси" duration="27 минут"/>
                <MoviesCard img={Film2} alt="В погоне за бенгси" name="В погоне за бенгси" duration="27 минут"/>
            </ul>
            <button className="films__more">Ещё</button>
        </div>
    )
}

export default MoviesCardList;