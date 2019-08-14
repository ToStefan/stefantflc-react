import React from 'react';
import { Link } from 'react-router-dom';

const NavigationPage = () => {
    return (
        <div className="box middle-box container">
            <h3><b>Navigation page</b></h3>
            <hr />
            <div className="row">
                <div className="col left-link">
                    <Link to="client-details">~ <i><b>Client details</b></i> ~</Link>
                </div>
            </div>
        </div>
    );
};

export default NavigationPage;