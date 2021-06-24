import React from 'react';
import PublicFooter from '../common/PublicFooter';
import PublicHeader from '../common/PublicHeader';
import ScrollToTop from '../common/ScrollToTop';

const PublicContainer = ({ children, footer, images }) => {
    return (
        <div className='queen-yekel-unrivaled'>
            <PublicHeader />
            {children}
            {footer && <PublicFooter images={images} />}
            <ScrollToTop />
        </div>
    );
};

export default PublicContainer;
