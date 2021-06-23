import React from 'react';
import PublicFooter from '../common/PublicFooter';
import PublicHeader from '../common/PublicHeader';

const PublicContainer = ({ children, footer, images }) => {
    return (
        <div className='queen-yekel-unrivaled'>
            <PublicHeader />
            {children}
            {footer && <PublicFooter images={images} />}
        </div>
    );
};

export default PublicContainer;
