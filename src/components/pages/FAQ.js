import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTE_LINKS } from '../../utils/routing';
import PublicContainer from '../container/PublicContainer';

import '../../css/pages/faq.css';

const FAQ = () => {
    const [activeTab, setActiveTab] = useState('');

    const handleContextToggler = (event) => {
        if (activeTab === event.target.id) return setActiveTab('');

        setActiveTab(event.target.id);
    };

    useEffect(() => {
        //
    }, [activeTab]);

    return (
        <PublicContainer footer footer_image>
            <div className='faq'>
                {/* FAQ PAGE BANNER */}
                <div className='page-banner-area'>
                    <div className='page-banner-content'>
                        <h2>FAQ</h2>
                        <ul>
                            <li>
                                <Link to={ROUTE_LINKS.HOME}>Home</Link>
                            </li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                </div>

                {/* SECION ONE */}
                <div className='faq-area'>
                    <div className='container'>
                        <div className='section-title'>
                            <span>FAQ</span>
                            <h2>Frequently Asked Questions</h2>
                        </div>
                        <div className='row'>
                            <div className='faq-image'></div>
                            <div className='faq-accordion'>
                                <ul className='accordion'>
                                    <li className='accordion-item'>
                                        {/* <a href="" className="accordion-title"></a> */}
                                        <h5 className='accordion-title' onClick={handleContextToggler} id='1'>
                                            What Country are we in?
                                        </h5>
                                        {activeTab === '1' && (
                                            <p className='accordion-content' id='myDiv'>
                                                Queen Yekel's Unrivaled is based in Douala, Cameroon. It is located 200 Meters from
Alimentation Fraicheur and Government English Primary School
                                            </p>
                                        )}
                                    </li>
                                </ul>
                                <ul className='accordion'>
                                    <li className='accordion-item'>
                                        {/* <a href="" className="accordion-title"></a> */}
                                        <h5 className='accordion-title' onClick={handleContextToggler} id='2'>
                                            Submit Application Online
                                        </h5>
                                        {activeTab === '2' && <p className='accordion-content'>You can apply directly by filling and submiting the form on the "enrol now" tab</p>}
                                    </li>
                                </ul>
                                <ul className='accordion'>
                                    <li className='accordion-item'>
                                        {/* <a href="" className="accordion-title"></a> */}
                                        <h5 className='accordion-title' onClick={handleContextToggler} id='3'>
                                            Kids eligible for opportunity
                                        </h5>
                                        {activeTab === '3' && <p className='accordion-content'>Our focus is on children within the age group of 6 months and 3 years</p>}
                                    </li>
                                </ul>
                                <ul className='accordion'>
                                    <li className='accordion-item'>
                                        {/* <a href="" className="accordion-title"></a> */}
                                        <h5 className='accordion-title' onClick={handleContextToggler} id='4'>
                                            Is there a resident doctor on campus?
                                        </h5>
                                        {activeTab === '4' && <p className='accordion-content'>Yes, there is a Pediatrician who is always available to take care of the kids' health needs.</p>}
                                    </li>
                                </ul>
                                <ul className='accordion'>
                                    {/* <li className='accordion-item'>
                                        <h5 className='accordion-title' onClick={handleContextToggler} id='5'>
                                            Go Online Live Class
                                        </h5>
                                        {activeTab === '5' && <p className='accordion-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>}
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PublicContainer>
    );
};

export default FAQ;
