//import axios from 'axios';
import { API_URL } from './../config';

export function signIn(username, password) {

    console.log(API_URL);

    return {
        type: 'SIGN-IN',
        payload: true
    }
}