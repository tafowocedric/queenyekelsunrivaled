import React, { useEffect, useState } from 'react';
import PublicContainer from '../container/PublicContainer';

import '../../css/pages/faq.css'

const FAQ = () => {
    const [activeTab, setActiveTab] = useState("");

    const handleContextToggler = (event) => {
        if (activeTab === event.target.id) 
            return setActiveTab('');
            
        setActiveTab(event.target.id);
    }

    useEffect(() => {
        //
    }, [activeTab])
    
    return (
        <PublicContainer>
            
            <div className="faq">

                {/* FAQ PAGE BANNER */}
                <div className="page-banner-area">
                    <div className="page-banner-content">
                        <h2>FAQ</h2>
                        <ul>
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li>
                                FAQ
                            </li>
                        </ul>
                    </div>
                </div> 

                {/* SECION ONE */}
                <div className="faq-area">
                    <div className="container">
                        <div className="section-title">
                            <span>FAQ</span>
                            <h2>Frequently Asked Questions</h2>
                        </div>
                        <div className="row">
                            <div className="faq-image"></div>
                            <div className="faq-accordion">
                                <ul className="accordion">
                                    <li className="accordion-item">
                                        {/* <a href="" className="accordion-title"></a> */}
                                        <h5 className="accordion-title" onClick={handleContextToggler} id="1">Explore Your Option</h5>
                                        {activeTab === "1" && (<p className="accordion-content" id="myDiv">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>)}
                                    </li>
                                </ul>
                                <ul className="accordion">
                                    <li className="accordion-item">
                                        {/* <a href="" className="accordion-title"></a> */}
                                        <h5 className="accordion-title" onClick={handleContextToggler} id="2">Submit Application Online</h5>
                                        {activeTab === "2" && (<p className="accordion-content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>)}
                                    </li>
                                </ul>
                                <ul className="accordion">
                                    <li className="accordion-item">
                                        {/* <a href="" className="accordion-title"></a> */}
                                        <h5 className="accordion-title" onClick={handleContextToggler} id="3">Recieve Assign Task</h5>
                                        <p className="accordion-content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                    </li>
                                </ul>
                                <ul className="accordion">
                                    <li className="accordion-item">
                                        {/* <a href="" className="accordion-title"></a> */}
                                        <h5 className="accordion-title" onClick={handleContextToggler} id="4">Register at Your Assign Class</h5>
                                        <p className="accordion-content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                    </li>
                                </ul>
                                <ul className="accordion">
                                    <li className="accordion-item">
                                        {/* <a href="" className="accordion-title"></a> */}
                                        <h5 className="accordion-title" onClick={handleContextToggler} id="5">Go Online Live Class</h5>
                                        <p className="accordion-content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                    </li>
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
