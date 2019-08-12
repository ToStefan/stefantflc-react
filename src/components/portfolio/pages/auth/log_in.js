import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import { API_URL } from '../../../../config';

class LogIn extends Component {

    state = {
        username: "",
        password: "",
        messageText: "",
        isBtnDisabled: false
    }

    stringifyUser() {
        return JSON.stringify({
            username: this.state.username,
            password: this.state.password
        })
    }

    submitForm(e) {
        e.preventDefault();
        this.setState({ isBtnDisabled: true });
        axios.post(`${API_URL}/auth/login`, this.stringifyUser(), {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            localStorage.setItem('token', res.data.token);
            this.setState({ isBtnDisabled: false });
            this.props.loadUser();
            return <Redirect to='/guest' />
        }).catch(error => {
            this.setState({ messageText: error.response.data.errorMessage, isBtnDisabled: false });
        });
    }

    render() {
        return localStorage.getItem("token") == null ?
            (<div className="container box middle-box">
                <p className="error-text">{this.state.messageText}</p>
                <form onSubmit={(event) => this.submitForm(event)}>
                    <div className="form-group">
                        <input
                            className="form-control"
                            value={this.state.username}
                            onChange={(event) => this.setState({ username: event.target.value })}
                            type="text"
                            placeholder="Enter your username"
                            required />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            value={this.state.password}
                            onChange={(event) => this.setState({ password: event.target.value })}
                            type="password"
                            placeholder="Enter your password"
                            required />
                    </div>
                    <button className="warning-btn" type="submit">Enter the network</button>
                </form>
            </div>
            )
            :
            <Redirect to='/home' />
    }
}

export default LogIn;