import React from 'react';

const authlvl = (lvl) => (
    lvl === 0 ?
        <h3 className="warning-text">Not logged in, please log in to continue.</h3>
        :
        <h3 className="error-text">You are not authorized!</h3>
)

const NotAuthorized = (props) => {
    return (
        <div className="container box middle-box">
            {authlvl(props.authlvl)}
            <hr />
        </div>
    );
};

export default NotAuthorized;