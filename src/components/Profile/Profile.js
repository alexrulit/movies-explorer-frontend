import React from 'react';
import './profile/profile.css';

function Profile() {
    return (
        <section className="profile">
                <h1 className="profile__title">Привет,&nbsp;Виталий!</h1>
                <ul className="profile__list">
                    <li className="profile__item">
                        <p className="profile__label">Имя</p>
                        <p className="profile__content">Виталий</p>
                    </li>
                    <li className="profile__item">
                        <p className="profile__label">Почта</p>
                        <p className="profile__content">pochta@yandex.ru</p>
                    </li>
                </ul>
                <a href="#" className="profile__edit">Редактировать</a>
                <a href="#" className="profile__logout">Выйти из аккаунта</a>
            </section>
    )
}

export default Profile;