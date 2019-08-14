import React from 'react';
import { Link } from 'react-router-dom';

const LoggedPanel = (props) => {
    return (
        <div className="container box middle-box">
            <div className="row">
                <div className="col left-link" ><Link to="/navigator">~ <i><b>Navigation page</b></i> ~</Link></div>
                <div className="col right-link" ><Link to="/home" onClick={props.logout}>~ <i><b>Logout</b></i> ~</Link></div>
            </div>
            <hr />
        </div>
    );
};

export default LoggedPanel;