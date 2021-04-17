import React from 'react';
import './menu/menu.css';
import Account from '../../images/account.png';

function BurgerMenu(props) {
    const menuClassNames = `menu ${props.open ? 'menu_visibility-visible' : 'menu_visibility-hidden'}`

    return (
        <div className={menuClassNames}>
            <div className="menu__list">
                <button className="menu__close-button" onClick={props.setClose}></button>
                <a href="/" className="menu__link">Главная</a>
                <a href="/movies" className="menu__link">Фильмы</a>
                <a href="/saved-movies" className="menu__link">Сохраненные фильмы</a>
                <a href="/profile" className="menu__link">Аккаунт<img className="menu__account" src={Account} alt="Account"/></a>
            </div>
        </div>
    );
}

export default BurgerMenu;