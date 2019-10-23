import axios from 'axios';
import { API_URL } from '../config';

export function loadAllNews() {
    const request = axios.get(`${API_URL}/fcs-news`).then(res => res.data);
    return {
        type: 'GET_ALL_NEWS',
        payload: request
    }
}

export function loadArticleById(id) {
    const request = axios.get(`${API_URL}/fcs-news/${id}`).then(res => res.data);
    return {
        type: 'GET_ARTICLE_BY_ID',
        payload: request
    }
}