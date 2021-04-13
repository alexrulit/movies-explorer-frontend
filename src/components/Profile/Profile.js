import React from 'react';
import './profile/profile.css';
import Header from '../Header/Header';

function Profile(props) {

    const [name, setName] = React.useState(props.currentUser.name);
    const [email, setEmail] = React.useState(props.currentUser.email);

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleSubmit(e) {

        e.preventDefault();
      
        props.handleUpdateUser(email, name);

    }

    return (
        <div>
            <Header loggedIn={props.loggedIn} color={false} userData={props.userData} signOut={props.signOut} windowWidth={props.windowWidth} handleOpenMenu={props.handleOpenMenu}/>
            <section className="profile">
                <h1 className="profile__title">Привет,&nbsp;{name}!</h1>
                <ul className="profile__list">
                    <li className="profile__item">
                        <p className="profile__label">Имя</p>
                        <input type="text" className="profile__content" value={name} onChange={handleChangeName}></input>
                    </li>
                    <li className="profile__item">
                        <p className="profile__label">Почта</p>
                        <input type="email" className="profile__content" value={email} onChange={handleChangeEmail}></input>
                    </li>
                </ul>
                <a href="#" className="profile__edit" onClick={handleSubmit}>Редактировать</a>
                <a href="#" className="profile__logout" onClick={props.signOut}>Выйти из аккаунта</a>
            </section>
        </div>
    )
}

export default Profile;