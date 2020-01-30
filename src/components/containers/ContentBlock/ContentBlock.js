import React from 'react';
import './ContentBlock.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContentSlider from '../ContentSlider/ContentSlider';
import Image from './media/vr_man.jpg';

function ContentBlock() {
    return (
        <section className="section content-block__section">
            <div className="container content-block__container">
                <div className="grid content-block__grid">
                    <div className="grid-item content-block__grid-item">
                        <img src={Image} className="content-block__image"></img>
                        <ContentSlider />
                    </div>
                    <div className="grid-item content-block__grid-item">
                        <h3 className="article article--md content-block__article">Why is it worthwhile to be present in virtual reality</h3>
                        <p className="paragraph content-block__paragraph">
                            Heralded as the next big step in computing, Virtual Reality (VR) was slow to gain traction in previous years. But as headsets become more accessible and affordable, the technology is finally growing up.
                        </p>
                        <ul className="list content-block__list">
                            <li className="list-item content-block__item">Status of innovator in the sector</li>
                            <li className="list-item content-block__item">Obtaining competitive advantage</li>
                            <li className="list-item content-block__item">Increasing sales</li>
                            <li className="list-item content-block__item">Involving customers in the purchase process</li>
                        </ul>
                        <a className="button button__color--blue">Free Consultation</a>
                        <a className="button content-block__button">Learn More</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContentBlock;
