import React from 'react';
import Logo from '../../images/logo.svg';
import './form/form.css';
import * as FormValidator from '../FormValidator/FormValidator';
import { withRouter } from 'react-router-dom'; 

function Register(props) {
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
            props.handleRegister(validator.values.password, validator.values.email, validator.values.name);
        } else {
            return;
        }
    }

    return (
        <section className="form">
            <img className="form__logo" src={Logo} alt="Логотип" onClick={goToMainSite}/>
            <h1 className="form__title">Добро пожаловать!</h1>
            <form className="form__item" action="#" noValidate onSubmit={handleSubmit}>
                <p className="form__input-name">Имя</p>
                <input type="text" name="name"  value={validator.values.name} onChange={validator.handleChange} className="form__input" minLength='2' placeholder="Имя"/>
                <span className="form__input-error">{validator.errors.name}</span>
                <p className="form__input-name">E-mail</p>
                <input name="email" type="email" value={validator.values.email} onChange={validator.handleChange} className="form__input" placeholder="email" required/>
                <span className="form__input-error">{validator.errors.email}</span>
                <p className="form__input-name">Пароль</p>
                <input name="password" type="password" value={validator.values.password} onChange={validator.handleChange} className="form__input" minLength='6' required/>
                <span className="form__input-error">{validator.errors.password}</span>
                <span className="form__input-error">{props.fetchError}</span>
                <button type="submit" className="form__button" disabled={!validator.isValid}>Зарегистрироваться</button>
                <p className="form__sublink">Уже зарегистрированы? <a href="/signin" className="form__link">Войти</a></p>
            </form>
        </section>
    )
}

export default withRouter(Register);