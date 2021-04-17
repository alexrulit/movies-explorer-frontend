import React from 'react';
import Logo from '../../images/logo.svg';
import './form/form.css';
import * as FormValidator from '../FormValidator/FormValidator';
import { withRouter } from 'react-router-dom';

function Login(props) {
    const validator = FormValidator.useFormWithValidation();

    function goToMainSite() {
        props.history.push("/");
    }

    if(props.loggedIn) {
        goToMainSite();
    }

    function handleSubmit(e) {

        e.preventDefault();
        
        if (validator.isValid) {
            props.handleLogin(validator.values.password, validator.values.email);
        } else {
            return;
        }
        
    
    }

    return (
        <section className="form">
            <img className="form__logo" src={Logo} alt="Логотип" onClick={goToMainSite}/>
            <h1 className="form__title">Рады видеть!</h1>
            <form className="form__item" action="#" noValidate onSubmit={handleSubmit}>
                <p className="form__input-name">E-mail</p>
                <input name="email" type="email" value={validator.values.email} onChange={validator.handleChange} className="form__input" placeholder="email" required/>
                <span className="form__input-error">{validator.errors.email}</span>
                <p className="form__input-name">Пароль</p>
                <input name="password" type="password" value={validator.values.password} onChange={validator.handleChange} className="form__input" minLength='6' required/>
                <span className="form__input-error">{validator.errors.password}</span>
                <span className="form__input-error">{props.fetchError}</span>
                <button type="submit" className="form__button" disabled={!validator.isValid}>Войти</button>
                <p className="form__sublink">Ещё не зарегистрированы? <a href="/signup" className="form__link">Зарегистрироваться</a></p>
            </form>
        </section>
    )
}

export default withRouter(Login);