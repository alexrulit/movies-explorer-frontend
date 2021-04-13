import React from 'react';
import DesktopMenu from '../DesktopMenu/DesktopMenu';
import MobileMenu from '../MobileMenu/MobileMenu';

function LoggetIn(props) {
    return (
        <div className="header__auth">
                {props.windowWidth <= 1010 ? <MobileMenu handleOpenMenu={props.handleOpenMenu} headerBMClassName={props.headerBMClassName}/> : <DesktopMenu headerLinkClassName={props.headerLinkClassName}/>}
        </div>
    )
}

export default LoggetIn;