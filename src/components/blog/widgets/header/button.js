import React from 'react';
import { Link } from 'react-router-dom';

import './button.css';

const HeaderButton = (props) => {

    return (
        <div className="headerButton">
            <Link to={props.href}>
                <i className={props.imgClassName}></i>
                <p>{props.text}</p>
            </Link>
        </div>
    );
};

export default HeaderButton;