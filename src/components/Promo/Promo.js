import React from 'react';
import './hero/hero.css';

function Promo() {
    return (
        <section className="hero">
            <h1 className="hero__title">Учебный проект студента факультета Веб-разработки.</h1>
            <p className="hero__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
            <button className="hero__button">Узнать больше</button>
        </section>
    )
}

export default Promo;