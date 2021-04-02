import React from 'react';
import './hero/hero.css';

function Promo() {
    return (
        <section className="hero">
            <h1 className="hero__title">Учебный проект студента факультета Веб-разработки.</h1>
            <ul className="hero__nav">
                <li className="hero__nav-element"><a href="#about" className="hero__nav-link">О проекте</a></li>
                <li className="hero__nav-element"><a href="#tech" className="hero__nav-link">Технологии</a></li>
                <li className="hero__nav-element"><a href="#student" className="hero__nav-link">Студент</a></li>
            </ul>
        </section>
    )
}

export default Promo;