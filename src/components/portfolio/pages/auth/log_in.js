import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { login, loadUser } from './../../../../actions';

class LogIn extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.data.loginBtnDisabled = true;
        this.forceUpdate();
        this.props.login(e.target.username.value, e.target.password.value);
    }

    render() {
        return this.props.data.isLogged === false ?
            (<div className="container box middle-box">
                <p className="error-text">{this.props.data.loginErrorMsg}</p>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input
                            className="form-control"
                            name="username"
                            type="text"
                            placeholder="Enter your username"
                            required />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            required />
                    </div>
                    <button className="warning-btn" type="submit" disabled={this.props.data.loginBtnDisabled}>Enter the network</button>
                </form>
            </div>
            )
            :
            <Redirect to='/home' />
    }
}

const mapStateToProps = (state) => { return { data: state.auth } }
const mapDispatchToProps = (dispatch) => { return bindActionCreators({ login, loadUser }, dispatch) }

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);