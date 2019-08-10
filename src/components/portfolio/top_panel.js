import React from 'react';
import { Link } from 'react-router-dom';

const TopPanel = () => {
    return (
        <div className="box container middle-box">
            <div className="row">
                <div className="col left-link"><Link to="/home">~ <i><b>Home</b></i> ~</Link></div>
                <div className="col right-link"><Link to="/more-about-me">~ <i><b>More about me</b></i> ~</Link></div>
            </div>
            <hr />
            <div className="row">
                <div className="col left-link"><Link to="/blog">~ <i><b>Blog</b></i> ~</Link></div>
                <div className="col right-link"><Link to="/slb-info">~ <i><b>Super Lazy Boot</b></i> ~</Link></div>
            </div>
        </div>
    );
};

export default TopPanel;