import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import './block-title/block-title.css';

function Main(props) {
    return (
        <div>
            <Header loggedIn={props.loggedIn} color={true} signOut={props.signOut} windowWidth={props.windowWidth} handleOpenMenu={props.handleOpenMenu}/>
            <main className="main">
                <Promo/>
                <AboutProject/>
                <Techs/>
                <AboutMe/>
            </main>
            <Footer/>
        </div>
    )
}

export default Main;