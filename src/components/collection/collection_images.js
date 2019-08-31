import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadImagesByCollection, unloadCollections } from '../../actions';
import './collection.css';
import GoTo from '../../widgets/go_to';
import ModalBox from '../../widgets/modal_box';

class CollectionImages extends Component {

    state = {
        imageUrl: null
    }

    imageFullScreen = (e, url) => {
        e.preventDefault();
        this.setState({ imageUrl: url });
        this.child.showModal();
    }

    renderImages = (images) => (
        images ?
            images.map((img, index) => (
                <div key={index} className="image-container">
                    <img className="rounded-img" onClick={(e) => this.imageFullScreen(e, img.url)} src={img.url} alt={img.name} />
                </div>)) : null
    )

    componentWillMount() {
        this.props.loadImagesByCollection(this.props.match.params.id);
    }

    componentWillUnmount() {
        this.props.unloadCollections();
    }

    render() {
        return (
            <div className="container box">
                <GoTo side="left" to="/collections" text="Go back to collections" hr="0" />
                <div className="row">
                    {this.renderImages(this.props.data.images)}
                </div>
                <GoTo side="left" to="/collections" text="Go back to collections" />

                <ModalBox onRef={ref => (this.child = ref)}>
                    <img src={this.state.imageUrl} alt="modal page" />
                </ModalBox>
            </div>
        );
    }
}

const mapStateToProps = (state) => { return { data: state.collections } }
const mapDispatchToProps = (dispatch) => { return bindActionCreators({ loadImagesByCollection, unloadCollections }, dispatch) }

export default connect(mapStateToProps, mapDispatchToProps)(CollectionImages);