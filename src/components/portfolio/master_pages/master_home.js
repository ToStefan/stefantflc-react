import React from 'react';
import { Link } from 'react-router-dom';

const MasterHome = () => {
    return (
        <div className="box middle-box container">
            <div className="row">
                <div className="col left-link">
                    <Link to="client-details">~ <i><b>Client details</b></i> ~</Link>
                </div>
            </div>
        </div>
    );
};

export default MasterHome;