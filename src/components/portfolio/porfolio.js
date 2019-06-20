import React from 'react';
import { NavLink } from 'react-router-dom';

const Portfolio = () => {
    return (
        <div>
            <NavLink to="/b">Blog</NavLink>
            <hr />
            <h1>This is portfolio.</h1>
        </div>
    )
}

export default Portfolio;