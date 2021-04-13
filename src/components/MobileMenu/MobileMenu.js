import React from 'react';

function MobileMenu(props) {
    return (
        <dev>
            <button className={props.headerBMClassName} onClick={props.handleOpenMenu}></button>
        </dev>
    )
}

export default MobileMenu;