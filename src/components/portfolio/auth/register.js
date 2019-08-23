import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { register } from '../../../actions';

class Register extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        if (e.target.password.value !== e.target.repeatPassword.value) {
            this.props.data.regMsg = 'Passwords must be same';
            this.props.data.regMsgClass = 'error-text';
            this.forceUpdate();
        }
        else {
            this.props.data.regBtnDisabled = true;
            this.forceUpdate();
            const user = {
                email: e.target.email.value,
                username: e.target.username.value,
                password: e.target.password.value,
                key: e.target.key.value
            }
            this.props.register(user);
        }
    }

    render() {
        return this.props.data.isLogged === false ?
            (<div className="container box middle-box">
                <p className={this.props.data.regMsgClass}>{this.props.data.regMsg}</p>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input
                            className="form-control"
                            name="email"
                            type="email"
                            placeholder="Enter e-mail"
                            autoComplete="off"
                            required />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            name="username"
                            pattern="[A-Za-z1-9]{6,}"
                            type="text"
                            placeholder="Enter username"
                            autoComplete="off"
                            required />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            name="password"
                            pattern="[A-Za-z1-9]{6,}"
                            type="password"
                            placeholder="Enter password"
                            required />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            name="repeatPassword"
                            type="password"
                            placeholder="Enter password again"
                            required />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            name="key"
                            type="text"
                            autoComplete="off"
                            placeholder="Enter the key (not requred)" />
                    </div>
                    <button className="error-btn" type="submit" disabled={this.props.data.regBtnDisabled}>Join the network</button>
                </form>
            </div>
            )
            :
            <Redirect to='/home' />
    }
}

const mapStateToProps = (state) => { return { data: state.auth } }
const mapDispatchToProps = (dispatch) => { return bindActionCreators({ register }, dispatch) }

export default connect(mapStateToProps, mapDispatchToProps)(Register);