import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { logout, loadUser } from '../../actions';

import './navigation.css';

class Navigation extends Component {

    componentWillMount() {
        if (localStorage.getItem('token') != null) {
            this.props.loadUser();
        }
    }

    renderRightNav = () => (
        this.props.data.isLogged !== false ?
            <ul className="nav navbar-nav navbar-right">
                <li><Link to="/client-details"><i className="fas fa-user-secret"></i> Client Details</Link></li>
                <li><Link to="/contact" onClick={this.props.logout}><i className="fas fa-sign-out-alt"></i> Logout</Link></li>
            </ul>
            :
            <ul className="nav navbar-nav navbar-right">
                <li><Link to="/log-in"><i className="fas fa-sign-in-alt"></i> Login</Link></li>
                <li><Link to="/register"><i className="fas fa-user-plus"></i> Register</Link></li>
            </ul>
    )

    render() {
        return (
            <nav className="navbar">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#togglenav">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="togglenav">
                    <ul className="nav navbar-nav navbar-left">
                        <li><Link to="/contact"><i className="far fa-address-card"></i> Contact</Link></li>
                        <li><Link to="/about"><i className="fas fa-info-circle"></i> About</Link></li>
                        <li><Link to="/slb-info"><i className="fas fa-leaf"></i> Super Lazy Boot</Link></li>
                        <li><Link to="/chat"><i className="fas fa-comments"></i> Chat</Link></li>
                        <li></li>
                    </ul>
                    <hr />
                    {this.renderRightNav()}
                </div>
            </nav>
        );
    }
}

const mapStateToProps = (state) => { return { data: state.auth } }
const mapDispatchToProps = (dispatch) => { return bindActionCreators({ logout, loadUser }, dispatch) }

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);