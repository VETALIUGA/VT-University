import React from 'react';
import './CallToAction.scss';

function CallToAction() {
    return (
        <section className="section call-to-action__section">
            <div className="container call-to-action__container">
                <h3 className="article article--md call-to-action__article">
                    Ready to explore the world?
                </h3>
                <p className="paragraph call-to-action__paragraph">
                    AR and VR will disrupt the ways we live, work and collaborate with each other. Since 2015, VR Land has been exploring the world of augmented, virtual and mixed reality. Combined with other technologies such as the Internet of Things, drones or beacons, the possibilities are truly endless.
                </p>
                <a href="#" className="button button__color--yellow call-to-action__button">
                    <span>Free 60 minutes project consultation</span>
                    <svg fill="#fff" className="call-to-action__icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 31.49 31.49"> <path d="M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111 C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587 c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z" /> </svg>
                </a>
            </div>
            <div className="call-to-action__overlay">
            <svg class="call-to-action__wave" xmlns="http://www.w3.org/2000/svg" width="3374px" height="132px"> <path fill-rule="evenodd" opacity="0.149" fill="rgb(255, 255, 255)" d="M798.292,44.000 C798.292,44.000 1152.025,-27.506 1712.699,17.013 C2273.373,61.533 2682.029,-41.641 3106.081,20.533 C3530.134,82.708 3323.797,132.000 3323.797,132.000 L1153.895,126.133 L609.605,100.320 L798.292,44.000 Z"></path> <path fill-rule="evenodd" opacity="0.149" fill="rgb(255, 255, 255)" d="M188.687,44.000 C188.687,44.000 542.420,-27.506 1103.094,17.013 C1663.769,61.533 2072.424,-41.641 2496.477,20.533 C2920.529,82.708 2714.193,132.000 2714.193,132.000 L544.290,126.133 L0.000,100.320 L188.687,44.000 Z"></path> <path fill-rule="evenodd" fill="rgb(255, 255, 255)" d="M812.806,44.000 C812.806,44.000 1011.593,21.833 1574.812,53.387 C2138.032,84.940 2321.865,10.017 2728.707,39.307 C3228.239,75.270 3120.596,85.067 3120.596,85.067 L3200.425,92.106 L769.263,117.920 L812.806,44.000 Z"></path> </svg>            </div>
        </section >
    );
}

export default CallToAction;
