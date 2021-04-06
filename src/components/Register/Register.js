import React from 'react';
import Logo from '../../images/logo.svg';
import './form/form.css';

function Register() {
    return (
        <section className="form">
            <img className="form__logo" src={Logo} alt="Логотип"/>
            <h1 className="form__title">Добро пожаловать!</h1>
            <form className="form__item" action="#">
                <p className="form__input-name">Имя</p>
                <input type="text" className="form__input" placeholder="Имя"/>
                <p className="form__input-name">E-mail</p>
                <input type="text" className="form__input" placeholder="email"/>
                <p className="form__input-name">Пароль</p>
                <input type="password" className="form__input"/>
                <button type="submit" className="form__button">Зарегистрироваться</button>
                <p className="form__sublink">Уже зарегистрированы? <a href="/signin" className="form__link">Войти</a></p>
            </form>
        </section>
    )
}

export default Register;