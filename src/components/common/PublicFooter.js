import React from 'react';
import colors from '../utils/colors';
import Icons from '../utils/Icons';

import { Link } from 'react-router-dom';
import { ROUTE_LINKS } from '../../utils/routing';

const PublicFooter = ({ images }) => {
    return (
        <footer className='queen-footer mg-t-40'>
            {images && (
                <div className='footer-image flex'>
                    {images.map((image, i) => {
                        return (<img key={i} src={image} alt={image} />)
                    })}
                </div>
            )}
            <div className='flex __footer-container align-start justify-space-between'>
                <div className='queens'>
                    <h3 className='__title mg-b-20'>Queen Yekel's Unrivaled</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='contact'>
                    <h3 className='__sub-title'>Contact Us</h3>
                    <div className='flex align-center __phone'>
                        <Icons name='IconCall' size={22} color={colors.light_red} />
                        <div className='content'>
                            <p>Phone</p>
                            <span>882-569-756</span>
                        </div>
                    </div>
                    <div className='flex align-center __email'>
                        <Icons name='IconMail' size={22} color={colors.light_red} />
                        <div className='content'>
                            <p>Email</p>
                            <span>example@example.com</span>
                        </div>
                    </div>
                    <div className='flex align-center __address'>
                        <Icons name='IconLocation' size={39} color={colors.light_red} />
                        <div className='content'>
                            <p>Address</p>
                            <span>175 5th Ave Premium Area, New York, NY 10010, United States</span>
                        </div>
                    </div>
                </div>
                <div className='quick-links'>
                    <h3 className='__sub-title'>Quick Links</h3>
                    <div className='links flex'>
                        <Link to={ROUTE_LINKS.ABOUT}>About</Link>
                        <Link to={ROUTE_LINKS.REGISTERATION}>Enroll Now</Link>
                        <Link to={ROUTE_LINKS.FAQ}>Faq</Link>
                        <Link to={ROUTE_LINKS.NEWS}>News</Link>
                        <Link to={ROUTE_LINKS.TERMS_CONDITION}>Privacy Policy</Link>
                    </div>
                </div>
            </div>
            <div className='copy-right'>
                <p>Copyright ©2021 All rights reserved</p>
            </div>
        </footer>
    );
};

export default PublicFooter;
