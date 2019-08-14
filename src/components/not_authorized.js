import React from 'react';
import { Link } from 'react-router-dom';

const NotAuthorized = () => {
    return (
        <div className="container box middle-box">
            <h3 className="error-text"> You are not authorized! </h3>
            <hr />
            <div className="row">
                <div className="left-link" >
                    <Link to="/home">~ <i><b> Go back</b></i> ~</Link>
                </div>
            </div>
        </div>
    );
};

export default NotAuthorized;