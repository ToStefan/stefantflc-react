import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadUser } from '../../actions';

class MasterNavigation extends Component {

    renderNavigation = () => (
        this.props.data.isLogged !== false ?
            <nav className="navbar admin-nav">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#toggleadminnav">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="toggleadminnav">
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="/collection/upload"><i class="fas fa-file-upload"></i> Upload Collection</Link></li>
                        <li><Link to="/client-details"><i className="fas fa-user-secret"></i> Client Details</Link></li>
                    </ul>
                </div>
            </nav>
            :
            null
    )

    componentWillMount() {
        if (localStorage.getItem('token') != null) {
            this.props.loadUser();
        }
    }

    render() {
        return (this.renderNavigation());
    }
}

const mapStateToProps = (state) => { return { data: state.auth } }
const mapDispatchToProps = (dispatch) => { return bindActionCreators({ loadUser }, dispatch) }

export default connect(mapStateToProps, mapDispatchToProps)(MasterNavigation);
