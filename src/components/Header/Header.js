import React from 'react';
import './header/header.css';
import Logo from '../../images/logo.png';

function Header(props) {
    const color = props.color;
    const headerClassName = `header ${color ? 'header_color_blue' : 'header_color_white'}`;
    const headerLinkClassName = `header__link ${color ? 'header__link_color_white' : 'header__link_color_black'}`

    return (
        <header className={headerClassName}>
            <img className="header__logo" src={Logo} alt="Лого" />
            <div className="header__auth">
                <a href="/register" className={headerLinkClassName}>Регистрация</a>
                <button className="header__button">Войти</button>
            </div>
        </header>
    )
}

export default Header;
