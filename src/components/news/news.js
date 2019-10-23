import React from 'react';

import FcsNews from './fcs/fcs_news';

const News = () => {
    return (
        <div className="box container">
            <h3>Filmski Centar Srbije</h3>
            <hr />
            <FcsNews />
            <hr />
        </div>
    );
};

export default News;