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
                        <li className="link-mobile"><Link to="/chat"><i className="fas fa-comments"></i> Chat</Link></li>
                        <li className="link-mobile"><Link to="/collections"><i className="fas fa-images"></i> Collections</Link></li>
                        <li className="link-mobile"><Link to="/news"><i className="fas fa-video"></i> Filmske novosti</Link></li>
                        <li className="dropdown">
                            <a href="/" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-angle-double-right"></i> More <span className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li><Link to="/news"><i className="fas fa-video"></i> Filmske novosti</Link></li>
                                <li role="separator" className="divider"></li>
                                <li><Link to="/chat"><i className="fas fa-comments"></i> Chat</Link></li>
                                <li role="separator" className="divider"></li>
                                <li><Link to="/collections"><i className="fas fa-images"></i> Collections</Link></li>
                            </ul>
                        </li>
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
