import React from 'react';
import { Link } from 'react-router-dom';
import './notfound/notfound.css';

function PageNotFound() {
    return(
        <div className="notfound">
            <span className="notfound__error">404</span>
            <span className="notfound__suberror">Страница не найдена</span>
            <Link className="notfound__button" to="/">Назад</Link>
        </div>
    )
}

export default PageNotFound;