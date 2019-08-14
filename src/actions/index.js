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