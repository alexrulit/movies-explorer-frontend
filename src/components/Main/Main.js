import React from 'react';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import './block-title/block-title.css';

function Main(props) {
    props.changeHeader(true);
    
    return (
        <main class="main">
            <Promo/>
            <AboutProject/>
            <Techs/>
            <AboutMe/>
        </main>
    )
}

export default Main;