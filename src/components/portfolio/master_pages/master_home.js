import React from 'react';
import { Link } from 'react-router-dom';

const MasterHome = () => {
    return (
        <div className="box middle-box container">
            <h3><b>Master Page</b></h3>
            <hr />
            <div className="row">
                <div className="col left-link">
                    <Link to="client-details">~ <i><b>Client details</b></i> ~</Link>
                </div>
            </div>
        </div>
    );
};

export default MasterHome;