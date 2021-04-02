import React from 'react';
import './student/student.css';
import Foto from '../../images/foto.png';
import Arrow from '../../images/arrow.svg';

function AboutMe() {
    return (
        <section className="student">
                <a name="student"></a>
                <h2 className="block-title student__markup">Студент</h2>
                <div className="student__about">
                    <div className="student__profile">
                        <h3 className="student__title">Виталий</h3>
                        <p className="student__subtitle">Фронтенд-разработчик, 30 лет</p>
                        <p className="student__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                        <ul className="student__social">
                            <li className="student__social-element"><a href="#" className="student__social-link">Facebook</a></li>
                            <li className="student__social-element"><a href="#" className="student__social-link">Github</a></li>
                        </ul>
                    </div>
                    <img src={Foto} className="student__foto" alt="Фото"/>
                </div>
                <h3 className="student__portfolio-title">Портфолио</h3>
                <ul className="student__portfolio">
                    <li className="student__portfolio-element"><a href="#" className="student__portfolio-link">Статичный сайт<img src={Arrow} class="student__portfolio-arrow" alt="Стрелка"/></a></li>
                    <li className="student__portfolio-element"><a href="#" className="student__portfolio-link">Адаптивный сайт<img src={Arrow} class="student__portfolio-arrow" alt="Стрелка"/></a></li>
                    <li className="student__portfolio-element"><a href="#" className="student__portfolio-link">Одностраничное приложение<img src={Arrow} class="student__portfolio-arrow" alt="Стрелка"/></a></li>
                </ul>
            </section>
    )
}

export default AboutMe;