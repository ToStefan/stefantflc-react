import React, { Component } from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { previousMessages, sendMessage, onNewMessage, loadUser } from '../../actions';

import ChatMessages from './chat_messages';
import ChatForm from './chat_form';

import { WS_URL } from './../../config';
import './chat.css'

class ChatContainer extends Component {

    scrollToBottom() {
        const element = document.getElementById('scrolling-wrapper');
        element.scrollTop = element.scrollHeight;
    }

    connectWebSocket() {
        var socket = new SockJS(WS_URL);
        var stompClient = Stomp.over(socket);
        stompClient.debug = null;
        stompClient.connect({}, (frame) => {
            stompClient.subscribe('/channel/global_channel', this.props.onNewMessage);
        });
    }

    sendMessage = (e) => {
        e.preventDefault();
        if (e.target.message.value !== "") {
            const message = {
                message: e.target.message.value,
                from: this.props.loggedUser
            }
            e.target.message.value = "";
            this.props.sendMessage(message);
        }
    }

    UNSAFE_componentWillMount() {
        this.props.loadUser();
        this.props.previousMessages();
        this.connectWebSocket();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    componentWillUnmount() {
        this.props.data.errorMsg = "";
    }

    render() {
        return (
            <div className="container box middle-box">
                <p className="error-text">{this.props.data.errorMsg}</p>
                <ChatMessages {...this.props} />
                <ChatForm sendMessage={this.sendMessage} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.chat,
        loggedUser: state.auth.loggedUser
    }
}
const mapDispatchToProps = (dispatch) => { return bindActionCreators({ previousMessages, sendMessage, onNewMessage, loadUser }, dispatch) }

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);