import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div>
            <div className="container box middle-box">
                <h1>Blog is under development!</h1>
            </div>
            <div className="container box middle-box">
                <div className="row">
                    <div className="left-link" >
                        <Link to="/home">~ <i><b> Go back</b></i> ~</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog;