import React from 'react';
import PublicHeader from '../common/PublicHeader';

const PublicContainer = ({ children }) => {
    return (
        <div className='mdl-layout mdl-js-layout mdl-layout--fixed-header'>
            <PublicHeader />
            {children}
        </div>
    );
};

export default PublicContainer;
