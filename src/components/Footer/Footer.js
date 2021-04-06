import React from 'react';
import './footer/footer.css';

function Footer() {
    return(
        <footer className="footer">
            <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className="footer__info">
                <p className="footer__copyright">&copy; 2020</p>
                <ul className="footer__social">
                    <li className="footer__social-element"><a href="#" class="footer__social-link">Яндекс.Практикум</a></li>
                    <li className="footer__social-element"><a href="#" class="footer__social-link">Github</a></li>
                    <li className="footer__social-element"><a href="#" class="footer__social-link">Facebook</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;