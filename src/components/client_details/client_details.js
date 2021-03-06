import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { clientDetailsList } from '../../actions';
import './client_details.css'
import GoTo from '../../widgets/go_to.js';

class ClientDetails extends Component {

    UNSAFE_componentWillMount() {
        this.props.clientDetailsList();
    }

    renderTableData = (clientDetails) => (
        clientDetails ?
            clientDetails.map((client, index) => (
                <tr key={client.id}>
                    <td>{index + 1}</td>
                    <td>{client.id}</td>
                    <td><Link to={`/client-details/${client.ip}`}>{client.ip}</Link></td>
                    <td>{client.count}</td>
                    <td>{client.userAgent.substring(0, 80)}</td>
                    <td>{client.country}</td>
                    <td>{client.region}</td>
                    <td>{client.city}</td>
                    <td>{client.location}</td>
                </tr>
            )) : null
    )

    render() {
        return (
            <div className="box container">
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>ID</th>
                            <th>IP</th>
                            <th>Count</th>
                            <th>User agent</th>
                            <th>Country</th>
                            <th>Region</th>
                            <th>City</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTableData(this.props.data)}
                    </tbody>
                </table>
                <GoTo to="/client-details" side="right" text="Refrash" />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.clients.client_details
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ clientDetailsList }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientDetails);