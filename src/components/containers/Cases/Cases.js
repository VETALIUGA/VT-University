import React from 'react';
import './Cases.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CasesSlider from '../CasesSlider/CasesSlider';

function Cases() {
    return (
        <section className="section cases__section">
            <div className="container cases__container">
                <div className="grid cases__grid">
                    <div className="grid-item cases__grid-item cases__grid-item-1">
                        <h3 className="article article--md cases__article">
                            Case studies
                        </h3>
                        <p className="paragraph cases__paragraph">
                            Here is a collection of case studies for how businesses have utilized virtual reality for real estate, commerce, marketing, and many more purposes.
                        </p>
                    </div>
                    <div className="grid-item cases__grid-item cases__grid-item-2">
                        <a href="#" className="link cases__link">
                            <span>See all Case Studies</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="container-fluid cases__container-fluid">
                <CasesSlider />
            </div>
        </section>
    );
}

export default Cases;
