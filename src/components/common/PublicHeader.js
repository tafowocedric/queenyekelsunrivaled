import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ROUTE_LINKS } from '../../utils/routing';

const PublicHeader = () => {
    return (
        <Fragment>
            <header className='mdl-layout__header'>
                <div className='mdl-layout__header-row'>
                    <span className='mdl-layout-title'>Title</span>
                    <div className='mdl-layout-spacer'></div>
                    <nav className='mdl-navigation mdl-layout--large-screen-only'>
                        <Link className='mdl-navigation__link' to={ROUTE_LINKS.HOME}>
                            Home
                        </Link>
                        <Link className='mdl-navigation__link' to={ROUTE_LINKS.ABOUT}>
                            About Us
                        </Link>
                        <Link className='mdl-navigation__link' to={ROUTE_LINKS.CONTACT_US}>
                            Contact Us
                        </Link>
                        <Link className='mdl-navigation__link' to={ROUTE_LINKS.SERVICE}>
                            Services
                        </Link>
                        <Link className='mdl-navigation__link' to={ROUTE_LINKS.NEWS}>
                            News
                        </Link>
                        <Link className='mdl-navigation__link' to={ROUTE_LINKS.FAQ}>
                            FAQ
                        </Link>
                        <Link className='mdl-navigation__link' to={ROUTE_LINKS.REGISTERATION}>
                            Request Registration
                        </Link>
                    </nav>
                </div>
            </header>
            {/* <div class='mdl-layout__drawer'>
                <span class='mdl-layout-title'>Title</span>
                <nav class='mdl-navigation'>
                    <Link className='mdl-navigation__link' to={ROUTE_LINKS.HOME}>
                        Home
                    </Link>
                    <Link className='mdl-navigation__link' to={ROUTE_LINKS.ABOUT}>
                        About Us
                    </Link>
                    <Link className='mdl-navigation__link' to={ROUTE_LINKS.CONTACT_US}>
                        Contact Us
                    </Link>
                    <Link className='mdl-navigation__link' to={ROUTE_LINKS.SERVICE}>
                        Services
                    </Link>
                    <Link className='mdl-navigation__link' to={ROUTE_LINKS.NEWS}>
                        News
                    </Link>
                    <Link className='mdl-navigation__link' to={ROUTE_LINKS.FAQ}>
                        FAQ
                    </Link>
                    <Link className='mdl-navigation__link' to={ROUTE_LINKS.REGISTERATION}>
                        Request Registration
                    </Link>
                </nav>
            </div> */}
        </Fragment>
    );
};

export default PublicHeader;
