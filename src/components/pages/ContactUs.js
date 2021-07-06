import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTE_LINKS } from '../../utils/routing';
import PublicContainer from '../container/PublicContainer';

import '../../css/pages/Contact.css';

const ContactUs = () => {
    return (
        <PublicContainer footer footer_image>
            
            <div className="contact">

                {/* CONTACT PAGE BANNER */}
                <div className="page-banner-area">
                    <div className="page-banner-content">
                        <h2>Contact</h2>
                        <ul>
                            <li>
                                <Link to={ROUTE_LINKS.HOME}>Home</Link>
                            </li>
                            <li>
                                Contact
                            </li>
                        </ul>
                    </div>
                </div>

                {/* SECTION ONE */}
                <section className="contact-area">
                    <div className="container">
                        <div className="align-items-center">

                            <div className="contact-form">
                                <h3>Ready to get Started?</h3>
                                <form action="" id="contactForm">
                                    <div className="row">

                                        <div className="form-item">
                                            <div className="form-group">
                                                <input type="text" name="name" id="name" class="form-control" required="" data-error="Please enter your name" placeholder="Your name" />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>

                                        <div className="form-item">
                                            <div className="form-group">
                                                <input type="email" name="email" id="email" class="form-control" required="" data-error="Please enter your email" placeholder="Your email address" />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>

                                        <div className="form-item">
                                            <div className="form-group">
                                                <input type="text" name="phone_number" id="phone_number" class="form-control" required="" data-error="Please enter your phone number" placeholder="Your phone number" />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>

                                        <div className="form-item">
                                            <div className="form-group">
                                                <input type="text" name="subjects" id="subjects" class="form-control" required="" data-error="Please enter your subjects" placeholder="Subjects" />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>

                                        <div className="form-item">
                                            <div className="form-group">
                                                <textarea name="message" id="message" cols="30" rows="5" required="" data-error="Please enter your message" class="form-control" placeholder="Write your message..."></textarea>
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>

                                        <div className="form-item">
                                            <button type='submit' link={ROUTE_LINKS} className="default-btn">Send Message</button>
                                        </div>

                                    </div>
                                </form>
                            </div>

                            <div className="contact-information">
                                <h3>Here to Help</h3>
                                <div className="contact-list">
                                    <li>
                                        <div>
                                            <p>location: <span>Wonder Stree, Douala, Cameroon</span></p>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <p>Call Us: <span>(+237) 123-456-789</span></p>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <p>Email Us: <span>hello@queenyekel.com</span></p>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <p>POBOX: <span>1510</span></p>
                                        </div>
                                    </li>
                                </div>
                                <h3>Opening Hours</h3>
                                <div className="opening-hours">
                                    <li>
                                        <p><span>Monday: </span>8AM - 2PM</p>
                                        <p><span>Tuesday: </span>8AM - 2PM</p>
                                        <p><span>Wednesday: </span>8AM - 2PM</p>
                                        <p><span>Thursday: </span>8AM - 2PM</p>
                                        {/* <p><span>Friday: </span>8AM - 2PM</p>
                                        <p><span>Saturday: </span>Closed</p> */}
                                    </li>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                
                
                {/* SECTION TWO */}
                
                <div className="map">

                </div>

            </div>

        </PublicContainer>
    );
};

export default ContactUs;
