import React, { useState } from 'react';
import './search/search.css';
import * as Filter from '../Filter/Filter';

function SearchForm(props) {
    const [findWord, setFindWord] = useState('');
    const [duration, setDuration] = useState(false);
    const lastSearch = JSON.parse(localStorage.getItem('search_string'));

    function handleChangeWord(e) {
        setFindWord(e.target.value);
    }

    function handleChangeDuration(e) {
        setDuration(e.target.checked);
    }

    function search(string, short) {
        return Filter.filter(props.cards, props.savedCards, string, short); 
    }

    function handleSubmit(e) {

        e.preventDefault();

        localStorage.setItem('search_string', JSON.stringify({findWord, duration}));
        
        console.log(search(findWord, duration));
        props.filterCards(search(findWord, duration));
    }

    React.useEffect(() => {
        if (lastSearch) {
            props.filterCards(search(lastSearch.findWord, lastSearch.duration));
        }
    }, [props.cards, props.savedCards])

    return (
        <form action="#" className="search" onSubmit={handleSubmit}>
                <div className="search__box">
                    <input type="text" value={findWord} onChange={handleChangeWord} className="search__input" placeholder="Фильм" required/>
                    <button type="submit" className="search__button"></button>
                </div>
                <label className="search__checkbox-container">
                    <input type="checkbox" id="shortfilm" className="search__shortfilm" onChange={handleChangeDuration}/>
                    <span className="search__checkbox"></span>
                    <span className="search__label">Короткометражки</span> 
                </label>
        </form>
    )
}

export default SearchForm;