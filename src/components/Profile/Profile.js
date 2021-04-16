import React from 'react';
import './profile/profile.css';
import Header from '../Header/Header';
import EditProfile from '../EditProfile/EditProfile';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile(props) {
    const [edit, setEdit] = React.useState(false);
    const currentUser = React.useContext(CurrentUserContext);

    function handleEdit(e) {

        e.preventDefault();

        setEdit(true);
    }

    return (
        <div>
            <Header loggedIn={props.loggedIn} color={false} signOut={props.signOut} windowWidth={props.windowWidth} handleOpenMenu={props.handleOpenMenu}/>
            { !edit ?
            <section className="profile">
                <h1 className="profile__title">Привет,&nbsp;{currentUser.name}!</h1>
                <ul className="profile__list">
                    <li className="profile__item">
                        <p className="profile__label">Имя</p>
                        <p className="profile__content">{currentUser.name}</p>
                    </li>
                    <li className="profile__item">
                        <p className="profile__label">Почта</p>
                        <p className="profile__content">{currentUser.email}</p>
                    </li>
                </ul>
                <a href="/profile" className="profile__edit" onClick={handleEdit}>Редактировать</a>
                <a href="/" className="profile__logout" onClick={props.signOut}>Выйти из аккаунта</a>
            </section>
            :
            <EditProfile userData={currentUser} handleUpdateUser={props.handleUpdateUser} fetchError={props.fetchError}/>
            }
        </div>
    )
}

export default Profile;