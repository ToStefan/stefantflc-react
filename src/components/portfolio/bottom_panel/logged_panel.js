import React from 'react';
import { Link } from 'react-router-dom';

const renderMaster = () => {
    if (parseInt(localStorage.getItem("role")) === 5)
        return <div className="col right-link" ><Link to="/master">~ <i><b>Master page</b></i> ~</Link></div>
};

const LoggedPanel = (props) => {
    return (
        <div className="container box middle-box">
            <div className="row">
                <div className="col left-link" >
                    <Link to="/b">~ <i><b>Go to Blog</b></i> ~</Link>
                </div>
                <div className="col right-link" >
                    <Link to="/home" onClick={props.logout}>~ <i><b>Logout</b></i> ~</Link>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col left-link" >
                    <Link to="/guest">~ <i><b>Guest page</b></i> ~</Link>
                </div>
                {renderMaster()}
            </div>
        </div>
    );
};

export default LoggedPanel;