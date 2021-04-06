import React from 'react';
import './about/about.css';

function AboutProject() {
    return (
        <section className="about">
                <a name="about"></a>
                <h2 className="block-title about__title">О проекте</h2>
                <ul className="about__list">
                    <li className="about__element">
                        <h3 className="about__element-title">Дипломный проект включал 5 этапов</h3>
                        <p className="about__element-content">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    </li>
                    <li className="about__element">
                        <h3 className="about__element-title">На выполнение диплома ушло 5 недель</h3>
                        <p className="about__element-content">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                    </li>
                </ul>
                <ul className="about__timeline">
                    <li className="about__timeline-element">
                        <h3 className="about__timeline-title about__timeline_green">1 неделя</h3>
                        <p className="about__timeline-text">Back-end</p>
                    </li>
                    <li className="about__timeline-element">
                        <h3 className="about__timeline-title">4 недели</h3>
                        <p className="about__timeline-text">Front-end</p>
                    </li>
                </ul>
            </section>
    )
}

export default AboutProject;