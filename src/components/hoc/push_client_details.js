import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { pushClientDetails } from '../../actions';

class PushClientDetails extends Component {

    componentDidMount() {
        this.props.pushClientDetails(this.props.data.loggedUser, this.props.path);
    }

    render() {
        return (this.props.children);
    }
}

const mapStateToProps = (state) => { return { data: state.auth } }
const mapDispatchToProps = (dispatch) => { return bindActionCreators({ pushClientDetails }, dispatch) }

export default connect(mapStateToProps, mapDispatchToProps)(PushClientDetails);