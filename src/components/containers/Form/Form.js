import React from 'react';
import './Form.scss';
import Background from './media/faq_sec_bg.png';

function Form() {
    return (
        <section style={{ backgroundImage: `url(${Background})` }} className="section form__section">
            <div className="container form__container">
                <h3 className="article article--md form__article">Start your Virtual Reality journey today</h3>
                <p className="paragraph form__paragraph">We are here to make your experience better. If you have any questions about what we offer, our perspective, or any VR topic in general – contact us using the methods above or form below.</p>
                <form className="grid form__block">
                    <label className="form__label">
                        <input className="form__input" type="text" placeholder="Your name*"></input>
                    </label>
                    <label className="form__label">
                        <input className="form__input" type="email" placeholder="Your mail*"></input>
                    </label>
                    <label className="form__label">
                        <input className="form__input" type="text" placeholder="Your Subject"></input>
                    </label>
                    <label className="form__label">
                        <textarea className="form__textarea" placeholder="Your message"></textarea>
                    </label>
                    <label className="form__label--button">
                        <input className="form__submit button button__color--blue" type="submit" value="Submit"></input>
                    </label>
                </form>
                <p className="paragraph form__description">We'll get back to you in 1-2 business days.</p>
            </div>
        </section >
    );
}

export default Form;
