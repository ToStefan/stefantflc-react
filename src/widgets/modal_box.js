import React, { Component } from 'react';

import './modal_box.css';

class ModalBox extends Component {

    showModal() {
        document.getElementById("modal").style.display = "block";
    }

    hideModal() {
        document.getElementById("modal").style.display = "none";
    }

    componentDidMount() {
        this.props.onRef(this)
    }

    componentWillUnmount() {
        this.props.onRef(undefined)
    }

    render() {
        return (
            <div onClick={() => this.hideModal()} id="modal" className="modal">
                <div className="modal-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default ModalBox;