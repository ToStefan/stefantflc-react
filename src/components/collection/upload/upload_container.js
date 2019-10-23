import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadUser, onUploadImage, uploadImage, createCollection, loadAllCollections, resetStatusMsg } from '../../../actions';

import NewCollection from './new_collection';
import AddImage from './add_image';
import GoTo from '../../../widgets/go_to';

class CollectionUpload extends Component {

    onUploadImage = (e) => {
        this.props.onUploadImage(e.target.files[0])
    }

    disableButtons = () => {
        this.props.data.btnDisabled = true;
        this.forceUpdate(); //??
    }

    handleUploadImage = (e) => {
        e.preventDefault();
        this.props.data.imgUploadMsg = "";
        this.disableButtons();
        const file = new FormData();
        file.append("file", this.props.data.fileToUpload)
        file.set("user", this.props.auth.loggedUser)
        file.set("collection_id", e.target.collection_select.value)
        this.props.uploadImage(file);
    }

    handleCreateCollection = (e) => {
        e.preventDefault();
        this.props.data.colUploadMsg = "";
        this.disableButtons();
        const collection = {
            name: e.target.collection.value,
            user: this.props.auth.loggedUser,
            description: e.target.description.value
        }
        this.props.createCollection(collection);
        e.target.collection.value = "";
        e.target.description.value = "";
    }

    UNSAFE_componentWillMount() {
        this.props.loadUser();
        this.props.loadAllCollections();
        this.props.resetStatusMsg();
    }

    render() {
        return (
            <div className="container box middle-box">
                <p className="success-text">{this.props.data.colUploadMsg}</p>
                <NewCollection
                    handleCreateCollection={e => this.handleCreateCollection(e)}
                    disabled={this.props.data.btnDisabled} />
                <hr />
                <p className={this.props.data.imgUploadMsgClass}>{this.props.data.imgUploadMsg}</p>
                <AddImage
                    handleUploadImage={e => this.handleUploadImage(e)}
                    collections={this.props.data.collections}
                    onUploadImage={e => this.onUploadImage(e)}
                    disabled={this.props.data.btnDisabled} />
                <GoTo to="/collections" text="Go back to collections" side="left" />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        data: state.collections
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        loadUser, onUploadImage, uploadImage, createCollection, loadAllCollections, resetStatusMsg
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionUpload);