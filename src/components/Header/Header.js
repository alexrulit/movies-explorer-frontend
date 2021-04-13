import React from 'react';
import LoggetIn from '../LoggetIn/LoggetIn';
import LoggetOut from '../LoggetOut/LoggetOut';
import './header/header.css';
import Logo from '../../images/logo.png';
import { withRouter } from 'react-router-dom';

function Header(props) {
    const color = props.color;
    const headerClassName = `header ${color ? 'header_color_blue' : 'header_color_white'}`;
    const headerLinkClassName = `header__link ${color ? 'header__link_color_white' : 'header__link_color_black'}`
    const headerBMClassName = `header__burgermenu ${color ? 'header__burgermenu_color-blue' : 'header__burgermenu_color-white'}`

    function goToMainSite() {
        props.history.push("/");
    }

    return (
        <header className={headerClassName}>
            <img className="header__logo" src={Logo} alt="Лого" onClick={goToMainSite}/>
            { props.loggedIn ? <LoggetIn headerLinkClassName={headerLinkClassName} signOut={props.signOut} windowWidth={props.windowWidth} handleOpenMenu={props.handleOpenMenu} headerBMClassName={headerBMClassName}/> : <LoggetOut headerLinkClassName={headerLinkClassName}/> }
        </header>
    )
}

export default withRouter(Header);
