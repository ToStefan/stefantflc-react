import axios from 'axios';
import { API_URL } from '../config';

export function loadAllNews() {
    const request = axios.get(`${API_URL}/fcs-news`).then(res => res.data);
    return {
        type: 'GET_ALL_NEWS',
        payload: request
    }
}