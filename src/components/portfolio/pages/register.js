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
        key: "",
        messageText: "Username and/or Password should be characters and/or numbers with minimal length of 6",
        messageClass: "warning-text"
    }

    stringifyUser() {
        return JSON.stringify({
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            information: this.state.key
        })
    }

    submitForm(e) {
        e.preventDefault();
        if (this.state.password !== this.state.repeatPassword)
            this.setState({ messageText: 'Passwords must be same', messageClass: 'error-text' })
        else {
            axios.post(`${API_URL}/auth/register`, this.stringifyUser(), {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                this.setState({ messageText: 'Check out e-mail for verification link', messageClass: 'sucess-text' })
            })
        }
    }

    render() {
        return localStorage.getItem("token") == null ?
            (<div className="container box middle-box">
                <p className={this.state.messageClass}>{this.state.messageText}</p>
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
                            pattern="[A-Za-z1-9]{6,}"
                            type="text"
                            placeholder="Enter username (characters, numbers, min length: 6)" required />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            value={this.state.password}
                            onChange={(event) => this.setState({ password: event.target.value })}
                            pattern="[A-Za-z1-9]{6,}"
                            type="password"
                            placeholder="Enter password (characters, numbers, min length: 6)"
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