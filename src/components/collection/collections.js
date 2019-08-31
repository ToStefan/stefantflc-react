import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadAllCollections } from '../../actions';
import './collection.css';
import GoTo from '../../widgets/go_to';

class Collections extends Component {

    renderCollections = (collections) => (
        collections ?
            collections.map((collection, index) => (
                <div key={index} className="collection-folder">
                    <Link to={`/collections/${collection.id}`}>
                        <img src={require("../../assets/images/folder-img.png")} alt="collection img" />
                        <p>{collection.name}</p>
                    </Link>
                </div>)) : null
    )

    componentWillMount() {
        this.props.loadAllCollections();
    }

    render() {
        return (
            <div className="container box">
                <h4 className="warning-text">Public Collections</h4>
                <hr />
                <div className="row">
                    {this.renderCollections(this.props.data.collections)}
                </div>
                <GoTo side="right" to="/collection/upload" text="Upload" />
            </div>
        );
    }
}


const mapStateToProps = (state) => { return { data: state.collections } }
const mapDispatchToProps = (dispatch) => { return bindActionCreators({ loadAllCollections }, dispatch) }

export default connect(mapStateToProps, mapDispatchToProps)(Collections);