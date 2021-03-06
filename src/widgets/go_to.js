import React from 'react';
import { Link } from 'react-router-dom';

//side = left/right
//to = where to go
//text = text to show
//hr = 0 - down

const render = (props) => {
    const classNames = "col " + props.side + "-link";
    return props.hr === "0" ?
        <div>
            <div className="row">
                <div className={classNames}><Link to={props.to}><i><b>{props.text}</b></i></Link></div>
            </div>
            <hr />
        </div>
        :
        <div>
            <hr />
            <div className="row">
                <div className={classNames}><Link to={props.to}><i><b>{props.text}</b></i></Link></div>
            </div>
        </div>
}

const GoTo = (props) => {
    return (render(props));
};

export default GoTo;