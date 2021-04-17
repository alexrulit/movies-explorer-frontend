import React from 'react';
import * as FormValidator from '../FormValidator/FormValidator';

function EditProfile(props) {
    const validator = FormValidator.useFormWithValidation();
    const [valid, setValid] = React.useState(false);

    React.useEffect(() => {
        if (validator.isValid && (validator.values.email !== props.userData.email || validator.values.name !== props.userData.name)) {
            setValid(true);
        } else {
            setValid(false);
        }
    }, [validator.isValid, validator.values.email, validator.values.name]);
    

    function handleSubmit(e) {
        e.preventDefault();

        if(valid) {
            props.handleUpdateUser(validator.values.email, validator.values.name);
        }

    }


    return(
        <form className="profile" onSubmit={handleSubmit}>
            <h1 className="profile__title">Привет,&nbsp;{props.userData.name}!</h1>
            <ul className="profile__list">
                <li className="profile__item">
                    <p className="profile__label">Имя</p>
                    <input name="name" type="text" className="profile__content" value={validator.values.name} onChange={validator.handleChange} required/>
                </li>
                <span className="profile__input-error">{validator.errors.name}</span>
                <li className="profile__item">
                    <p className="profile__label">Почта</p>
                    <input name="email" type="email" className="profile__content" value={validator.values.email} onChange={validator.handleChange} required/>
                </li>
                <span className="profile__input-error">{validator.errors.email}</span>
            </ul>
            <span className="profile__input-error">{props.fetchError}</span>
            <button className="profile__button" type="submit" disabled={!valid}>Сохранить</button>
        </form>
    )
}

export default EditProfile;