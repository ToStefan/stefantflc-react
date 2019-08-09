import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'

import { API_URL } from '../../../config';

class Register extends Component {

    state = {
        email: "",
        username: "",
        password: "",
        repeatPassword: "",
        key: ""
    }

    submitForm(e) {
        e.preventDefault();
        //inputs verification ?
        let user = JSON.stringify({
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            information: this.state.key
        })
        e.preventDefault();
        axios.post(`${API_URL}/auth/register`, user, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            console.log(res);
        })
    }

    render() {
        return localStorage.getItem("token") == null ?
            (<div className="container box middle-box">
                <form onSubmit={(event) => this.submitForm(event)}>
                    <div className="form-group">
                        <input
                            className="form-control"
                            value={this.state.email}
                            onChange={(event) => this.setState({ email: event.target.value })}
                            type="email"
                            placeholder="Enter e-mail"
                            required />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            value={this.state.username}
                            onChange={(event) => this.setState({ username: event.target.value })}
                            type="text"
                            placeholder="Enter username" required />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            value={this.state.password}
                            onChange={(event) => this.setState({ password: event.target.value })}
                            type="password"
                            placeholder="Enter password"
                            required />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            value={this.state.repeatPassword}
                            onChange={(event) => this.setState({ repeatPassword: event.target.value })}
                            type="password"
                            placeholder="Enter password again"
                            required />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            value={this.state.key}
                            onChange={(event) => this.setState({ key: event.target.value })}
                            type="text"
                            placeholder="Enter the key (not requred)" />
                    </div>
                    <button className="error-btn" type="submit">Join the network</button>
                </form>
            </div>
            )
            :
            <Redirect to='/home' />
    }
}

export default Register;