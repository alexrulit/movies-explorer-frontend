import React, { useState } from 'react';
import Logo from '../../images/logo.svg';
import './form/form.css';
import { withRouter } from 'react-router-dom';

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleChangePassword(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {

        e.preventDefault();
        
        if (!email || !password){
            return;
        }
        
        props.handleLogin(password, email);
    
    }

    return (
        <section className="form">
            <img className="form__logo" src={Logo} alt="Логотип"/>
            <h1 className="form__title">Рады видеть!</h1>
            <form className="form__item" action="#" noValidate onSubmit={handleSubmit}>
                <p className="form__input-name">E-mail</p>
                <input name="email" type="email" value={email} onChange={handleChangeEmail} className="form__input" placeholder="email"/>
                <p className="form__input-name">Пароль</p>
                <input name="password" type="password" value={password} onChange={handleChangePassword} className="form__input"/>
                <button type="submit" className="form__button">Войти</button>
                <p className="form__sublink">Ещё не зарегистрированы? <a href="/signup" className="form__link">Зарегистрироваться</a></p>
            </form>
        </section>
    )
}

export default withRouter(Login);