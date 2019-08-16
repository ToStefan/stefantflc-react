import axios from 'axios';
import { API_URL } from '../config';

export function loadUser() {
    const request = axios.get(`${API_URL}/auth/me`, {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    });

    return request.then(res => loadSuccess(res.data.username, res.data.authorities.length))
}

export function logout() {
    localStorage.removeItem('token');
    return {
        type: 'LOGOUT_USER'
    }
}

function loadSuccess(username, role) {
    return {
        type: 'LOAD_USER',
        loggedUser: username,
        role: role
    }
}

export function login(username, password) {

    const user = {
        username: username,
        password: password
    }
    const request = axios.post(`${API_URL}/auth/login`, user, {
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return request.then(
        res => loginSuccess(res.data.token),
        err => typeof err.response === 'undefined' ? loginError('Server Error!') : loginError(err.response.data.errorMessage)
    );
}

function loginSuccess(token) {
    localStorage.setItem('token', token);
    return {
        type: 'LOGIN_SUCCESS',
        token: token
    };
}

function loginError(msg) {
    return {
        type: 'LOGIN_ERROR',
        loginErrorMsg: msg
    };
}

export function register(user) {
    const request = axios.post(`${API_URL}/auth/register`, user, {
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return request.then(
        res => registerSuccess('Check out e-mail for verification link'),
        err => typeof err.response === 'undefined' ? registerError('Server Error!') : registerError(err.response.data.errorMessage)
    );
}

function registerSuccess(msg) {
    return {
        type: 'REGISTER_SUCCESS',
        regMsg: msg
    }
}

function registerError(msg) {
    return {
        type: 'REGISTER_ERROR',
        regMsg: msg
    }
}