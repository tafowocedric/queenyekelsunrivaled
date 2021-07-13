import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTE_LINKS } from '../../utils/routing';
import PublicContainer from '../container/PublicContainer';

import '../../css/pages/news.css'

const News = () => {
    return (
        <PublicContainer>
            <div className="news">
                <div className="news-banner">
                    <div className="news-banner-heading">
                        <h1>News</h1>
                    </div>
                </div>
                <div className="news container">
                    <div className="news-row">
                        <div className="left-side">
                            <article className="news-item">
                                <div className="news-item-img">
                                    <img src="" alt="" />
                                    <a href="\" className="news-item-date">
                                        <h3>15</h3>
                                        <p>Jan</p>
                                    </a>
                                </div>
                                <div className="news-item-details">
                                    <a href="">
                                        <h2>Google inks pact for new 35-storey office</h2>
                                    </a>
                                    <p>
                                    That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying
                                    </p>
                                    <ul className="news-info-link">
                                        <li>
                                            <a href="">Travel</a>
                                        </li>
                                    </ul>
                                </div>
                            </article>
                        </div>
                        <div className="right-side">
                            <div className="single-sidebar search-widget">
                                <form action="">
                                    <div className="form-group">
                                        <div className="input-group">
                                            <input type="text" class="form-control" placeholder="Search Key"/>
                                            <div className="input-group-append">
                                                <button>s</button>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="main-search-btn">Search</button>
                                </form>
                            </div>

                            <aside className="single-sidebar post">
                                <h4 className="widget-title">Category</h4>
                                <ul className="cat-list">
                                    <li><Link to={ROUTE_LINKS}>Kitchen food</Link></li>
                                    <li><Link to={ROUTE_LINKS}>Travel News</Link></li>
                                    <li><Link to={ROUTE_LINKS}>Product</Link></li>
                                    <li><Link to={ROUTE_LINKS}>Inspiration</Link></li>
                                    <li><Link to={ROUTE_LINKS}>Healthcare</Link></li>
                                </ul>
                            </aside>  
                        </div> 
                    </div>    
                </div>
            </div>
        </PublicContainer>
    );
};

export default News;
