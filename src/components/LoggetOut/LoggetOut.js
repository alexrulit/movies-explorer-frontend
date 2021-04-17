import React from 'react';
import { withRouter } from 'react-router-dom';


function LoggetOut(props) {

    function signIn() {
        props.history.push('/signin');
    }

    return (
        <div className="header__auth">
                <a href="/signup" className={props.headerLinkClassName}>Регистрация</a>
                <button className="header__button" onClick={signIn}>Войти</button>
        </div>
    )
}

export default withRouter(LoggetOut);