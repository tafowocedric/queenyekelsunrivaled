import React from 'react';
import PublicContainer from '../container/PublicContainer';

const Home = () => {
    return (
        <PublicContainer>
            <div className='layout-transparent'>
                <div className='parallax-container'>
                    <div className='parallax'>
                        <div className='__title'>Learning Course Online</div>
                        <div className='__sub-title'>
                            We offer professional SEO services that help websites <span> score drastically in order to compete for the highest rankings.</span>
                        </div>
                    </div>
                </div>
            </div>
        </PublicContainer>
    );
};

export default Home;
