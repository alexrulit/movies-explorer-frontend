import React from 'react';
import Account from '../../images/account.png';

function DesktopMenu(props) {
    return (
        <div>
            <a href="/movies" className={props.headerLinkClassName}>Фильмы</a>
            <a href="/saved-movies" className={props.headerLinkClassName}>Сохраненные фильмы</a>
            <a href="/profile" className={props.headerLinkClassName}>Аккаунт<img className="header__account" src={Account} alt="Account"/></a>
        </div>
    )
}

export default DesktopMenu;