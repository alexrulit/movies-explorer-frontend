import React from 'react';
import './tech/tech.css';

function Techs() {
    return (
        <section className="tech">
                <a name="tech"></a>
                <h2 className="block-title tech__markup">Технологии</h2>
                <h3 className="tech__title">7 технологий</h3>
                <p className="tech__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <ul className="tech__list">
                    <li className="tech__element">HTML</li>
                    <li className="tech__element">CSS</li>
                    <li className="tech__element">JS</li>
                    <li className="tech__element">React</li>
                    <li className="tech__element">Git</li>
                    <li className="tech__element">Express.js</li>
                    <li className="tech__element">mongoDB</li>
                </ul>
            </section>
    )
}

export default Techs;