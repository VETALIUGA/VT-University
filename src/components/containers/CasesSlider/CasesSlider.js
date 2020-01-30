import React from "react";
import Slider from "react-slick";
import './CasesSlider.scss';
import Background from './media/background.jpg';

class CasesSlider extends React.Component {
    render() {
        var settings = {
            dots: true,
            arrows: false,
            infinite: true,
            speed: 500,
            centerMode: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            centerPadding: '400px'
        };
        return (
            <Slider className="cases-slider__list" {...settings}>
                <div className="cases-slider__item">
                    <div className="cases-slider__content">
                        <img src={Background} className="cases-slider__image"></img>
                        <a href="#" className="button cases-slider__button">
                            <svg fill="#ffffff" className="cases-slider__icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512"><path d="M508.875,248.458l-160-160c-4.167-4.167-10.917-4.167-15.083,0c-4.167,4.167-4.167,10.917,0,15.083l141.792,141.792 H10.667C4.771,245.333,0,250.104,0,256s4.771,10.667,10.667,10.667h464.917L333.792,408.458c-4.167,4.167-4.167,10.917,0,15.083 c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125l160-160C513.042,259.375,513.042,252.625,508.875,248.458z " /></svg>
                        </a>
                        <a href="#" className="link cases-slider__link">VR Training</a>
                    </div>
                </div>
                <div className="cases-slider__item">
                    <div className="cases-slider__content">
                        <img src={Background} className="cases-slider__image"></img>
                        <a href="#" className="button cases-slider__button">
                            <svg fill="#ffffff" className="cases-slider__icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512"><path d="M508.875,248.458l-160-160c-4.167-4.167-10.917-4.167-15.083,0c-4.167,4.167-4.167,10.917,0,15.083l141.792,141.792 H10.667C4.771,245.333,0,250.104,0,256s4.771,10.667,10.667,10.667h464.917L333.792,408.458c-4.167,4.167-4.167,10.917,0,15.083 c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125l160-160C513.042,259.375,513.042,252.625,508.875,248.458z " /></svg>
                        </a>
                        <a href="#" className="link cases-slider__link">VR Training</a>
                    </div>
                </div>
                <div className="cases-slider__item">
                    <div className="cases-slider__content">
                        <img src={Background} className="cases-slider__image"></img>
                        <a href="#" className="button cases-slider__button">
                            <svg fill="#ffffff" className="cases-slider__icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512"><path d="M508.875,248.458l-160-160c-4.167-4.167-10.917-4.167-15.083,0c-4.167,4.167-4.167,10.917,0,15.083l141.792,141.792 H10.667C4.771,245.333,0,250.104,0,256s4.771,10.667,10.667,10.667h464.917L333.792,408.458c-4.167,4.167-4.167,10.917,0,15.083 c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125l160-160C513.042,259.375,513.042,252.625,508.875,248.458z " /></svg>
                        </a>
                        <a href="#" className="link cases-slider__link">VR Training</a>
                    </div>
                </div>
                <div className="cases-slider__item">
                    <div className="cases-slider__content">
                        <img src={Background} className="cases-slider__image"></img>
                        <a href="#" className="button cases-slider__button">
                            <svg fill="#ffffff" className="cases-slider__icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512"><path d="M508.875,248.458l-160-160c-4.167-4.167-10.917-4.167-15.083,0c-4.167,4.167-4.167,10.917,0,15.083l141.792,141.792 H10.667C4.771,245.333,0,250.104,0,256s4.771,10.667,10.667,10.667h464.917L333.792,408.458c-4.167,4.167-4.167,10.917,0,15.083 c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125l160-160C513.042,259.375,513.042,252.625,508.875,248.458z " /></svg>
                        </a>
                        <a href="#" className="link cases-slider__link">VR Training</a>
                    </div>
                </div>
            </Slider>
        );
    }
}

export default CasesSlider;