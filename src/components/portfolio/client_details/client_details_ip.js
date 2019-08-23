import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { clientDetailsByIpList } from './../../../actions';
import './client_details.css'

class ClientDetailsIp extends Component {

    componentWillMount() {
        this.props.clientDetailsByIpList(this.props.match.params.ip)
    }

    renderTableData = (clientDetails) => (
        clientDetails ?
            clientDetails.map((client, index) => (
                <tr key={client.id}>
                    <td>{index + 1}</td>
                    <td>{client.id}</td>
                    <td>{client.ip}</td>
                    <td>{client.user}</td>
                    <td>{client.dateTime}</td>
                    <td>{client.userAgent}</td>
                    <td>{client.country}</td>
                    <td>{client.region}</td>
                    <td>{client.city}</td>
                    <td>{client.location}</td>
                    <td>{client.path}</td>
                </tr>
            )) : null
    )

    render() {
        return (
            <div className="box container">
                <div className="row">
                    <div className="col left-link"><Link to="/client-details"><i><b>Go back</b></i></Link></div>
                    <div className="col right-link"><Link to={`/client-details/${this.props.match.params.ip}`}><i><b>Refrash</b></i></Link></div>
                </div>
                <hr />
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>ID</th>
                            <th>IP</th>
                            <th>User</th>
                            <th>Date/Time</th>
                            <th>User agent</th>
                            <th>Country</th>
                            <th>Region</th>
                            <th>City</th>
                            <th>Location</th>
                            <th>Path</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTableData(this.props.data)}
                    </tbody>
                </table>
                <hr />
                <div className="row">
                    <div className="col left-link"><Link to="/client-details"><i><b>Go back</b></i></Link></div>
                    <div className="col right-link"><Link to={`/client-details/${this.props.match.params.ip}`}><i><b>Refrash</b></i></Link></div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.clients.client_details_ip
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ clientDetailsByIpList }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientDetailsIp);