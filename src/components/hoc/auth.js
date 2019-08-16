import React, { Component } from 'react';
import NotAuthorized from './../not_authorized';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadUser } from '../../actions';

class Auth extends Component {

    componentWillMount() {
        if (localStorage.getItem('token') != null) {
            this.props.loadUser();
        }
    }

    renderChildren() {
        if (this.props.data.role >= this.props.roleLevel) {
            return this.props.children;
        } else if (this.props.roleLevel === 0) {
            return this.props.children;
        } else {
            return <NotAuthorized />
        }
    }

    render() {
        return (
            <div>
                {this.renderChildren()}
            </div>
        );
    }
}

const mapStateToProps = (state) => { return { data: state.auth } }
const mapDispatchToProps = (dispatch) => { return bindActionCreators({ loadUser }, dispatch) }

export default connect(mapStateToProps, mapDispatchToProps)(Auth);