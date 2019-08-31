import axios from 'axios';
import { API_URL } from '../config';

export function previousMessages() {
    const request = axios.get(`${API_URL}/chat/global_channel`);
    return request.then(
        res => previousMessagesSuccess(res.data.token),
        err => previousMessagesError()
    );
}

function previousMessagesSuccess(data) {
    return {
        type: 'CHAT_GLOBAL_MESSAGES',
        payload: data
    }
}

function previousMessagesError() {
    return {
        type: 'CHAT_GLOBAL_MESSAGES_ERROR',
    }
}

export function sendMessage(message) {
    const request = axios.post(`${API_URL}/chat/global_channel`, message);
    return {
        type: '',
        payload: request
    }
}

export function onNewMessage(result) {
    const message = JSON.parse(result.body);
    return {
        type: 'CHAT_ADD_MSG_GLOBAL',
        payload: message
    }
}