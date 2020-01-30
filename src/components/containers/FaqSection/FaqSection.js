
import React from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import './FaqSection.scss';

function FaqSection() {
    return (
        <section className="section faq-section__section">
            <div className="container faq-section__container">
                <h3 className="article article--md faq-section__article">Frequently asked question</h3>
                <Accordion>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Do I Need To Make A Payment?
                    </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi ex, minus. Non voluptate possimus ducimus cupiditate.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Do You Provide Mobile Application For VR?
                    </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                They are a great way to get developers and other creative people together and working on building ideas into virtual worlds. Imagine if this creative energy could be channeled to further your social mission.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                            Where Can I Download The VR Application?
                    </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi ex, minus. Non voluptate possimus ducimus cupiditate.                            
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                            How Long Usally Take To To Setup Everything?
                    </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi ex, minus. Non voluptate possimus ducimus cupiditate.                            
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                            Can I Track My Daily Task Here?
                    </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi ex, minus. Non voluptate possimus ducimus cupiditate.                            
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
            </div>
        </section >
    );
}

export default FaqSection;
