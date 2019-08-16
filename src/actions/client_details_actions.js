import axios from 'axios';
import { API_URL } from '../config';

export function clientDetailsList() {
    const request = axios.get(`${API_URL}/client-details`, {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    }).then(res => res.data)

    return {
        type: 'GET_CLIENT_DETAILS',
        payload: request
    }
}

export function clientDetailsByIpList(ip) {
    const request = axios.get(`${API_URL}/client-details/ip/${ip}`, {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    }).then(res => res.data)

    return {
        type: 'GET_CLIENT_DETAILS_IP',
        payload: request
    }
}

export function pushClientDetails(user, path) {
    const request = axios.get(`https://ipinfo.io?token=0967b2ba8c74d7`);
    return request.then(res => pushDetails(res.data, user, path))
}

function pushDetails(data, user, path) {
    const client = {
        userAgent: navigator.userAgent,
        location: data.loc,
        region: data.region,
        country: data.country,
        city: data.city,
        ip: data.ip,
        user: user,
        path: path
    }

    const request = axios.post(`${API_URL}/client-details`, client, {
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return {
        type: '',
        payload: request
    }
}