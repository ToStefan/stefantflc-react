import axios from 'axios';
import { API_URL } from '../config';

export function uploadImage(file) {
    const request = axios.post(`${API_URL}/images`, file, {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    }).then(res => res.data)

    return {
        type: 'UPLOAD_IMAGE',
        payload: request
    }
}

export function onUploadImage(imgFile) {
    return {
        type: 'ON_UPLOAD_IMAGE',
        payload: imgFile
    }
}

export function loadImagesByCollection(id) {
    const request = axios.get(`${API_URL}/images/${id}`).then(res => res.data);
    return {
        type: 'LOAD_IMAGES_BY_COLLECTION',
        payload: request
    }
}

export function loadAllCollections() {
    const request = axios.get(`${API_URL}/collections`).then(res => res.data);
    return {
        type: 'LOAD_ALL_COLLECTIONS',
        payload: request
    }
}

export function createCollection(collection) {
    const request = axios.post(`${API_URL}/collections`, collection, {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    }).then(res => res.data);

    return {
        type: 'CREATE_COLLECTION',
        payload: request
    }
}

export function resetStatusMsg() {
    return {
        type: 'DEFAULT_STATUS_MSG'
    }
}

export function unloadCollections() {
    return {
        type: 'UNLOAD_COLLECTION_IMAGES',
        payload: []
    }
}