import React from 'react';
import Background from './media/slide-1.jpg';
import Image from './media/hero-vr.png';
import './MainScreen.scss';

function MainScreen() {
    return (
        <section className="section main-screen__section">
            <div className="container main-screen__container">
                <div className="grid main-screen__grid">
                    <div className="grid-item main-screen__grid-item">
                        <h1 className="article article--lg main-screen__article">Be Imaginative • Be Innovative</h1>
                        <p className="paragraph main-screen__paragraph">
                            Virtual Reality is no longer a "virtual" reality for businesses - it's the immediate future. VR Land Labs is helping clients leverage this technology to discover what’s next and stay miles ahead of the competition.
                        </p>
                        <a className="button button__color--yellow main-screen__button">Free Consultation</a>
                        <a className="button main-screen__button">Learn More</a>
                    </div>
                </div>
            </div>
            <div style={{ backgroundImage: `url(${Background})` }} className="main-screen__overlay"></div>
            <img src={Image} className="main-screen__image"></img>
        </section>
    );
}

export default MainScreen;
