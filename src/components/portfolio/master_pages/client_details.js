import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './client_details.css'
import { API_URL } from '../../../config';


class ClientDetails extends Component {

    state = {
        data: []
    }

    getClientDetails = () => {
        axios.get(`${API_URL}/client-details`, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            this.setState({ data: res.data });
        })
    }

    renderTableData() {
        return this.state.data.map((client) => {
            const { id, ip, count, user, dateTime, userAgent, country, region, city, location } = client
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{ip}</td>
                    <td>{count}</td>
                    <td>{user}</td>
                    <td>{dateTime}</td>
                    <td>{userAgent}</td>
                    <td>{country}</td>
                    <td>{region}</td>
                    <td>{city}</td>
                    <td>{location}</td>
                </tr>
            )
        })
    }

    componentWillMount() {
        this.getClientDetails();
    }

    render() {
        return (
            <div className="box container">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>IP</th>
                            <th>Count</th>
                            <th>User</th>
                            <th>Date/Time</th>
                            <th>User agent</th>
                            <th>Country</th>
                            <th>Region</th>
                            <th>City</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </table>
                <hr />
                <div className="row">
                    <div className="col left-link"><Link to="/master">~ <i><b>Go back</b></i> ~</Link></div>
                    <div className="col right-link"><Link onClick={this.getClientDetails}>~ <i><b>Refrash</b></i> ~</Link></div>
                </div>
            </div>
        );
    }
}

export default ClientDetails;