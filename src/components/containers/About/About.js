import React from 'react';
import './About.scss';
import Image from './media/about_vr1.jpg';
import Figure from './media/about-content-illustration.png';
import Icon from './media/play.svg';
import Background from './media/circle.png';

function About() {
    return (
        <section className="section about__section">
            <img className="about__section-image" src={Background}></img>
            <div className="container about__container">
                <div className="grid about__grid">
                    <div className="grid-item about__grid-item about__grid-item-1">
                        <div className="about__content">
                            <h2 className="article article--md about__article">
                                <span className="about__article--colored">
                                    Virtual Reality
                                </span>
                                The future is immersive
                        </h2>
                            <p className="paragraph about__paragraph">
                                Heralded as the next big step in computing, Virtual Reality (VR) was slow to gain traction in previous years. But as headsets become more accessible and affordable, the technology is finally growing up.
                        </p>
                            <p className="paragraph about__paragraph">
                                While content creation for household entertainment is kicking into gear, many professional sectors are beginning to see the potential of VR applications as well. Immersive gaming and VR movie experiences are set to disrupt the world of entertainment.
                        </p>
                        </div>
                        <img src={Figure} className="about__overlay"></img>
                    </div>
                    <div style={{ backgroundImage: `url(${Image})` }} className="grid-item about__grid-item about__grid-item-2">
                        <a href="#" className="about__button">
                            <img className="about__button-icon" src={Icon}></img>
                        </a>
                    </div>
                </div>
                <div className="grid about-advantages__grid">
                    <div className="grid-item about-advantages__grid-item about-advantages__grid-item-1">
                        <div className="about-advantages__content">
                            <a className="about-advantages__icon-link">
                                <svg fill="#2e77ff" className="about-advantages__icon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m133.332031 213.332031h-96c-20.585937 0-37.332031-16.746093-37.332031-37.332031v-32c0-20.585938 16.746094-37.332031 37.332031-37.332031h96c20.589844 0 37.335938 16.746093 37.335938 37.332031v32c0 20.585938-16.746094 37.332031-37.335938 37.332031zm-96-74.664062c-2.941406 0-5.332031 2.386719-5.332031 5.332031v32c0 2.945312 2.390625 5.332031 5.332031 5.332031h96c2.945313 0 5.335938-2.386719 5.335938-5.332031v-32c0-2.945312-2.390625-5.332031-5.335938-5.332031zm0 0" /><path d="m85.332031 512c-8.832031 0-16-7.167969-16-16v-298.667969c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v298.667969c0 8.832031-7.167969 16-16 16zm0 0" /><path d="m85.332031 138.667969c-8.832031 0-16-7.167969-16-16v-106.667969c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v106.667969c0 8.832031-7.167969 16-16 16zm0 0" /><path d="m474.667969 213.332031h-96c-20.589844 0-37.335938-16.746093-37.335938-37.332031v-32c0-20.585938 16.746094-37.332031 37.335938-37.332031h96c20.585937 0 37.332031 16.746093 37.332031 37.332031v32c0 20.585938-16.746094 37.332031-37.332031 37.332031zm-96-74.664062c-2.945313 0-5.335938 2.386719-5.335938 5.332031v32c0 2.945312 2.390625 5.332031 5.335938 5.332031h96c2.941406 0 5.332031-2.386719 5.332031-5.332031v-32c0-2.945312-2.390625-5.332031-5.332031-5.332031zm0 0" /><path d="m426.667969 512c-8.832031 0-16-7.167969-16-16v-298.667969c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v298.667969c0 8.832031-7.167969 16-16 16zm0 0" /><path d="m426.667969 138.667969c-8.832031 0-16-7.167969-16-16v-106.667969c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v106.667969c0 8.832031-7.167969 16-16 16zm0 0" /><path d="m304 426.667969h-96c-20.585938 0-37.332031-16.746094-37.332031-37.335938v-32c0-20.585937 16.746093-37.332031 37.332031-37.332031h96c20.585938 0 37.332031 16.746094 37.332031 37.332031v32c0 20.589844-16.746093 37.335938-37.332031 37.335938zm-96-74.667969c-2.945312 0-5.332031 2.390625-5.332031 5.332031v32c0 2.945313 2.386719 5.335938 5.332031 5.335938h96c2.945312 0 5.332031-2.390625 5.332031-5.335938v-32c0-2.941406-2.386719-5.332031-5.332031-5.332031zm0 0" /><path d="m256 352c-8.832031 0-16-7.167969-16-16v-320c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v320c0 8.832031-7.167969 16-16 16zm0 0" /><path d="m256 512c-8.832031 0-16-7.167969-16-16v-85.332031c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v85.332031c0 8.832031-7.167969 16-16 16zm0 0" /></svg>
                            </a>
                            <h4 className="article article--sm about-advantages__article">Unique User Experience</h4>
                            <p className="paragraph about-advantages__paragraph">
                                With it's unique high graphic quality and user friendly interfaces, Pandora provides best user experience for mobile vr applications.
                    </p>
                        </div>
                    </div>
                    <div className="grid-item about-advantages__grid-item about-advantages__grid-item-2">
                        <div className="about-advantages__content">
                            <a className="about-advantages__icon-link">
                                <svg className="about-advantages__icon" fill="#dd422e" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512"><path d="M435.143,129.356c-6.796-6.795-17.463-7.797-25.407-2.384c-29.926,20.398-180.03,122.969-196.162,139.1 c-23.394,23.395-23.394,61.459,0,84.854c11.697,11.696,27.063,17.545,42.427,17.545c15.364,0,30.729-5.849,42.427-17.545 c16.131-16.132,118.701-166.236,139.1-196.162C442.939,146.821,441.938,136.153,435.143,129.356z M270.142,322.641 c-7.797,7.799-20.486,7.799-28.283,0c-7.798-7.797-7.799-20.482-0.004-28.28c6.268-6.194,48.885-36.588,101.319-73.035 C306.728,273.76,276.334,316.375,270.142,322.641z" /> <path d="M92.231,401.523l-24.69,12.044C49.475,381.325,40,345.338,40,308.499c0-26.991,4.977-52.842,14.06-76.683l28.291,13.57 c2.79,1.338,5.735,1.972,8.636,1.972c7.453,0,14.608-4.185,18.047-11.355c4.776-9.959,0.576-21.906-9.384-26.683l-27.932-13.398 c34.717-56.62,94.784-96.095,164.283-102.505v30.081c0,11.046,8.954,20,20,20c11.046,0,20-8.954,20-20V93.402 c23.828,2.169,46.884,8.237,68.771,18.117c10.065,4.545,21.912,0.066,26.457-9.999c4.545-10.068,0.068-21.913-10-26.458 C328.063,60.091,292.659,52.499,256,52.499c-68.38,0-132.667,26.628-181.02,74.98C26.629,175.832,0,240.119,0,308.499 c0,50.53,14.998,99.674,43.373,142.115c3.822,5.715,10.141,8.886,16.639,8.886c2.954,0,5.946-0.655,8.757-2.026l41-20 c9.928-4.843,14.05-16.816,9.207-26.744C114.133,400.803,102.159,396.682,92.231,401.523z" /><path d="M489.436,203.271c-4.544-10.067-16.387-14.547-26.458-10c-10.067,4.545-14.544,16.39-9.999,26.457 C465.601,247.686,472,277.553,472,308.499c0,36.894-9.506,72.939-27.625,105.218l-25.777-12.275 c-9.971-4.748-21.906-0.515-26.656,9.459c-4.749,9.972-0.514,21.907,9.459,26.656l42,20c2.763,1.315,5.692,1.944,8.588,1.944 c6.5,0,12.82-3.175,16.637-8.886C497.002,408.173,512,359.029,512,308.499C512,271.84,504.408,236.436,489.436,203.271z" /></svg>
                            </a>
                            <h4 className="article article--sm about-advantages__article">Great Functionality</h4>
                            <p className="paragraph about-advantages__paragraph">
                                Switch between exterior view, interior view, different floors and amenity areas. See your project in Daylight or Night.
                            </p>
                        </div>
                    </div>
                    <div className="grid-item about-advantages__grid-item about-advantages__grid-item-3">
                        <div className="about-advantages__content">
                            <a className="about-advantages__icon-link">
                                <svg className="about-advantages__icon" fill="#30af8c" viewBox="0 -86 512.00142 512" xmlns="http://www.w3.org/2000/svg"><path d="m508.078125 265.480469c-3.039063 10.617187-14.109375 16.765625-24.726563 13.726562-10.621093-3.035156-16.765624-14.105469-13.730468-24.726562 3.414062-11.929688 3.140625-24.496094-.78125-36.335938l-45.03125-135.832031c-8.386719-25.308594-31.941406-42.3125-58.605469-42.3125h-218.378906c-26.667969 0-50.21875 17.003906-58.609375 42.3125l-45.027344 135.832031c-5.203125 15.703125-3.976562 32.578125 3.460938 47.511719 7.425781 14.921875 20.113281 25.988281 35.71875 31.164062 15.558593 5.15625 32.253906 3.847657 47.011718-3.6875 14.785156-7.550781 25.800782-20.382812 31.023438-36.132812l2.960937-8.933594c8.34375-25.167968 31.765625-42.082031 58.28125-42.082031h68.734375c26.519532 0 49.941406 16.914063 58.285156 42.082031l2.960938 8.933594c8.386719 25.304688 32.480469 42.980469 58.589844 42.976562 5.011718 0 10.035156-.621093 14.925781-1.847656 10.714844-2.679687 21.574219 3.832032 24.257813 14.542969 2.683593 10.714844-3.828126 21.574219-14.542969 24.257813-8.066407 2.019531-16.355469 3.042968-24.636719 3.042968-21.203125 0-41.632812-6.65625-59.082031-19.253906-17.652344-12.746094-30.613281-30.425781-37.476563-51.132812l-2.960937-8.933594c-2.910157-8.777344-11.074219-14.671875-20.316407-14.671875h-68.734374c-9.246094 0-17.410157 5.894531-20.320313 14.667969l-2.960937 8.9375c-8.550782 25.792968-26.589844 46.804687-50.800782 59.167968-24.363281 12.441406-51.984375 14.582032-77.785156 6.027344-25.792969-8.550781-46.726562-26.769531-58.9375-51.300781-12.175781-24.457031-14.171875-52.128907-5.617188-77.921875l45.027344-135.832032c13.824219-41.707031 52.632813-69.726562 96.570313-69.726562h218.378906c43.9375 0 82.75 28.019531 96.574219 69.726562l45.027344 135.832032c6.464843 19.507812 6.90625 40.226562 1.273437 59.921875zm-157.074219-193.484375c-11.042968 0-19.996094 8.953125-19.996094 20 0 11.042968 8.953126 19.996094 19.996094 19.996094 11.046875 0 20-8.953126 20-19.996094 0-11.046875-8.953125-20-20-20zm0 119.992187c11.046875 0 20-8.953125 20-20 0-11.042969-8.953125-19.996093-20-19.996093-11.042968 0-19.996094 8.953124-19.996094 19.996093s8.953126 20 19.996094 20zm-39.996094-79.996093c-11.042968 0-19.996093 8.953124-19.996093 20 0 11.046874 8.953125 20 19.996093 20 11.046876 0 20-8.953126 20-20 0-11.046876-8.953124-20-20-20zm79.996094 40c11.042969 0 19.996094-8.953126 19.996094-20 0-11.046876-8.953125-20-19.996094-20-11.046875 0-20 8.953124-20 20 0 11.042968 8.953125 20 20 20zm-229.984375 39.996093c11.046875 0 20-8.953125 20-20v-19.996093h19.996094c11.046875 0 20-8.953126 20-20 0-11.046876-8.953125-20-20-20h-19.996094v-19.996094c0-11.046875-8.953125-20-20-20-11.042969 0-19.996093 8.953125-19.996093 20v19.996094h-20c-11.042969 0-20 8.953124-20 20 0 11.046874 8.957031 20 20 20h20v19.996093c0 11.042969 8.953124 20 19.996093 20zm0 0" /></svg>
                            </a>
                            <h4 className="article article--sm about-advantages__article">Control Comes Natuarally</h4>
                            <p className="paragraph about-advantages__paragraph">
                                Enabling brands to deliver more value to their audiences and create much more impactful interactions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;