import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { logout, loadUser } from './../../actions';

class BottomPanel extends Component {

    componentWillMount() {
        if (localStorage.getItem('token') != null) {
            this.props.loadUser();
        }
    }

    renderPanel() {
        return this.props.data.isLogged === true ?
            <div className="container box middle-box">
                <div className="row">
                    <div className="col left-link" ><Link to="/navigator">~ <i><b>Navigation panel</b></i> ~</Link></div>
                    <div className="col right-link" ><Link to="/home" onClick={this.props.logout}>~ <i><b>Logout</b></i> ~</Link></div>
                </div>
                <hr />
            </div>
            :
            <div className="container box middle-box">
                <div className="row">
                    <p className="warning-text"><b>I'm collecting informations from clients!</b></p>
                    <p className="warning-text"><b>Some parts of software are hidden!</b></p>
                </div>
                <div className="row">
                    <div className="left-link" ><Link to="/log-in">~ <i><b>Log in</b></i> ~</Link></div>
                    <div className="right-link" ><Link to="/register">~ <i><b>Register</b></i> ~</Link></div>
                </div>
            </div>
    }

    render() {
        return (
            <div>
                {this.renderPanel()}
            </div>
        );
    }
}

const mapStateToProps = (state) => { return { data: state.auth } }
const mapDispatchToProps = (dispatch) => { return bindActionCreators({ logout, loadUser }, dispatch) }

export default connect(mapStateToProps, mapDispatchToProps)(BottomPanel);