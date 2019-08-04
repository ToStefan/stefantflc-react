import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import Home from './home';
import SlbInfo from './slb_info';
import BlogInfo from './blog_info';
import About from './about';

import './portfolio.css';

const PortfolioRoutes = () => {
    return (
        <div>
            <div id="navigation" className="box container">
                <div class="row">
                    <div id="homeLink" className="col"><Link to="home">~ <i><b>Home</b></i> ~</Link></div>
                    <div id="aboutLink" className="col"><Link to="more-about-me">~ <i><b>More about me</b></i> ~</Link></div>
                </div>
                <hr />
                <div class="row">
                    <div id="blogLink" className="col"><Link to="blog">~ <i><b>Blog</b></i> ~</Link></div>
                    <div id="slbLink" className="col"><Link to="slb-info">~ <i><b>Super Lazy Boot</b></i> ~</Link></div>
                </div>
            </div>

            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/more-about-me" component={About} />
                <Route path="/blog" component={BlogInfo} />
                <Route path="/slb-info" component={SlbInfo} />
                <Route path="/" exact component={Home} />
                <Route component={Home} />
            </Switch>
        </div>
    );
};

export default PortfolioRoutes;