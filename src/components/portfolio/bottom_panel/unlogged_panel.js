import React from 'react';
import { Link } from 'react-router-dom';

const UnloggedPanel = () => {
    return (
        <div className="container box middle-box">
            <div className="row">
                <p className="warning-text"><b>I'm collecting informations from clients!</b></p>
                <p className="warning-text"><b>Some parts of software are hidden!</b></p>
            </div>
            <div className="row">
                <div className="left-link" ><Link to="/log-in">~ <i><b>Log in</b></i> ~</Link></div>
                <div className="right-link" ><Link to="/register">~ <i><b>Register</b></i> ~</Link></div>
            </div>
        </div>
    );
};

export default UnloggedPanel;