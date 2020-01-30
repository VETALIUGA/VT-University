import React from "react";
import Slider from "react-slick";
import './ContentSlider.scss';
import Image from './media/vr-carousel2.jpg';

class ContentSlider extends React.Component {
    render() {
        var settings = {
            dots: false,
            arrows: false,
            infinite: true,
            speed: 500,
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '190px',
            focusOnSelect: true
        };
        return (
            <Slider className="content-slider__list" {...settings}>
                <div className="content-slider__item">
                    <img src={Image} className="content-slider__image"></img>
                </div>
                <div className="content-slider__item">
                    <img src={Image} className="content-slider__image"></img>
                </div>
                <div className="content-slider__item">
                    <img src={Image} className="content-slider__image"></img>
                </div>
                <div className="content-slider__item">
                    <img src={Image} className="content-slider__image"></img>
                </div>
            </Slider>
        );
    }
}

export default ContentSlider;