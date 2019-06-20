import React, { Component } from 'react';

import './../blog.css';
import './authentication.css';

import { connect } from 'react-redux';
import { signIn } from './../../../actions';
import { bindActionCreators } from 'redux';

class SignIn extends Component {
    render() {
        return (
            <div className="container backgroundBox signinBox">
                <h2>Поздрав!</h2>
                <div>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                </div>
                <button>Sign in</button>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        user_reducer: state.user_reducer
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ signIn }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);