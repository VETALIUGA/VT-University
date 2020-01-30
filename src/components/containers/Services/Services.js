import React from 'react';
import Background from './media/service_right_bg.jpg';
import IconFirst from './media/product-development.png';
import IconSecond from './media/virtual-tour.png';
import IconThird from './media/collab.png';
import IconFourth from './media/training.png';
import IconFifth from './media/data-visual.png';
import './Services.scss';

function Services() {
    return (
        <section className="section services__section">
            <div className="container services__container">
                <span className="services__tag-title">Services</span>
                <h3 className="article article--md services__article--md">
                    VR Land provides various virtual reality solution services to clients
                </h3>
                <div className="grid services__grid">
                    <div className="grid-item services__grid-item services__grid-item-1">
                        <div className="services__item">
                            <div className="services__content-wrap">
                                <div className="services__image-wrap">
                                    <img className="services__image" src={IconFirst}></img>
                                </div>
                            </div>
                            <div className="services__content-wrap">
                                <h4 className="article article--sm services__article--sm">
                                    Product Development
                                </h4>
                                <p className="paragraph services__paragraph">
                                    With it's unique high graphic quality and user friendly interfaces, Pandora provides best user experience for mobile vr applications.
                                </p>
                            </div>
                        </div>
                        <div className="services__item">
                            <div className="services__content-wrap">
                                <div className="services__image-wrap">
                                    <img className="services__image" src={IconSecond}></img>
                                </div>
                            </div>
                            <div className="services__content-wrap">
                                <h4 className="article article--sm services__article--sm">
                                    Virtual Tours
                                </h4>
                                <p className="paragraph services__paragraph">
                                    from real estate to building sites and tourism offices, VR enables virtual tours, allowing companies to point out all the best features.
                                    </p>
                            </div>
                        </div>
                        <div className="services__item">
                            <div className="services__content-wrap">
                                <div className="services__image-wrap">
                                    <img className="services__image" src={IconThird}></img>
                                </div>
                            </div>
                            <div className="services__content-wrap">
                                <h4 className="article article--sm services__article--sm">
                                    Collaboration
                                </h4>
                                <p className="paragraph services__paragraph">
                                    virtual workspaces are an engaging, immersive and low-cost solution to holding meetings with people. It act as the collaborative hub.
                                    </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item services__grid-item services__grid-item-2">
                        <div className="services__item">
                            <div className="services__content-wrap">
                                <div className="services__image-wrap">
                                    <img className="services__image" src={IconFourth}></img>
                                </div>
                            </div>
                            <div className="services__content-wrap">
                                <h4 className="article article--sm services__article--sm">
                                    Data visualization
                                </h4>
                                <p className="paragraph services__paragraph">
                                    visualizing big data in virtual environments makes data even more engaging and actionable, enabling a whole new level of decision-making.
                                    </p>
                            </div>
                        </div>
                        <div className="services__item">
                            <div className="services__content-wrap">
                                <div className="services__image-wrap">
                                    <img className="services__image" src={IconFifth}></img>
                                </div>
                            </div>
                            <div className="services__content-wrap">
                                <h4 className="article article--sm services__article--sm">
                                    Data visualization
                                </h4>
                                <p className="paragraph services__paragraph">
                                    virtual reality offers new ways to convey knowledge and allows employers to test their workers in realistic environments without the risks.
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="services__overlay"></div>
            <div style={{ backgroundImage: `url(${Background})` }} className="services__background-image"></div>
        </section>
    );
}

export default Services;
