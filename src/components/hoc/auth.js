import React from 'react';
import NotAuthorized from './not_authorized';

const Auth = (props) => {
    if (localStorage.getItem('role') >= props.roleLevel) {
        return props.children;
    } else {
        return <NotAuthorized />
    }
};

export default Auth;