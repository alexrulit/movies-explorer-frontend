import React, { useState } from 'react';
import './search/search.css';
import * as Filter from '../Filter/Filter';
import * as FormValidator from '../FormValidator/FormValidator';

function SearchForm(props) {
    const validator = FormValidator.useFormWithValidation();
    const [duration, setDuration] = useState(false);
    const lastSearch = JSON.parse(localStorage.getItem('search_string'));
    
  
    function handleChangeDuration(e) {
        setDuration(e.target.checked);
    }

    function search(string, short) {
        return Filter.filter(props.cards, props.savedCards, string, short); 
    }

    function handleSubmit(e) {
        const findWord = validator.values.findWord;

        e.preventDefault();



        if (validator.isValid) {
            localStorage.setItem('search_string', JSON.stringify({findWord, duration}));
            props.filterCards(search(findWord, duration));
        } else {
            validator.resetForm();
        }
    }

    React.useEffect(() => {
        if (lastSearch) {
            props.filterCards(search(lastSearch.findWord, lastSearch.duration));
        }
    }, [props.cards, props.savedCards])

    return (
        <form action="#" className="search" noValidate onSubmit={handleSubmit}>
                <div className="search__box">
                    <input name="findWord" type="text" value={validator.values.findWord} onChange={validator.handleChange} className="search__input" placeholder="Фильм" required/>
                    <button type="submit" className="search__button"></button>
                </div>
                <span className="search__input-error">{validator.errors.findWord}</span>
                <label className="search__checkbox-container">
                    <input type="checkbox" id="shortfilm" className="search__shortfilm" onChange={handleChangeDuration}/>
                    <span className="search__checkbox"></span>
                    <span className="search__label">Короткометражки</span> 
                </label>
        </form>
    )
}

export default SearchForm;