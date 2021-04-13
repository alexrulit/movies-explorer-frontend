import React, { useState } from 'react';
import Logo from '../../images/logo.svg';
import './form/form.css';
import { withRouter } from 'react-router-dom'; 

function Register(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleChangePassword(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {

        e.preventDefault();
      
        props.handleRegister(password, email, name);    
    }


    return (
        <section className="form">
            <img className="form__logo" src={Logo} alt="Логотип"/>
            <h1 className="form__title">Добро пожаловать!</h1>
            <form className="form__item" action="#" noValidate onSubmit={handleSubmit}>
                <p className="form__input-name">Имя</p>
                <input type="text" name="name"  value={name} onChange={handleChangeName} className="form__input" placeholder="Имя"/>
                <p className="form__input-name">E-mail</p>
                <input name="email" type="email" value={email} onChange={handleChangeEmail} className="form__input" placeholder="email" required/>
                <p className="form__input-name">Пароль</p>
                <input name="password" type="password" value={password} onChange={handleChangePassword} className="form__input" required/>
                <button type="submit" className="form__button">Зарегистрироваться</button>
                <p className="form__sublink">Уже зарегистрированы? <a href="/signin" className="form__link">Войти</a></p>
            </form>
        </section>
    )
}

export default withRouter(Register);