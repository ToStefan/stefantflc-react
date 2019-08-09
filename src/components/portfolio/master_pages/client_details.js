import React, { Component } from 'react';
import axios from 'axios';

import { API_URL } from '../../../config';

class ClientDetails extends Component {

    componentWillMount() {
        axios.get(`${API_URL}/client-details`, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            console.log(res.data);
        })

    }

    render() {
        return (
            <div className="box container">
                ClientDetails
            </div>
        );
    }
}

export default ClientDetails;