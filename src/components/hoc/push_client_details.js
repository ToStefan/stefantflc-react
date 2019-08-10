import { Component } from 'react';
import axios from 'axios';

import { API_URL } from './../../config';

class PushClientDetails extends Component {

    pushClientDetails(data) {
        let client = {
            userAgent: navigator.userAgent,
            location: data.loc,
            region: data.region,
            country: data.country,
            city: data.city,
            ip: data.ip,
            user: null,
            path: this.props.path
        }

        if (typeof localStorage.getItem("loggedUser") !== 'undefined') {
            client.user = localStorage.getItem("loggedUser");
        }

        axios.post(`${API_URL}/client-details`, JSON.stringify(client), {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    componentWillMount() {
        axios.get(`https://ipinfo.io?token=0967b2ba8c74d7`)
            .then(res => {
                this.pushClientDetails(res.data);
            })
    }

    render() {
        return (this.props.children);
    }
}

export default PushClientDetails;