import React, { Component } from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { previousMessages, sendMessage, onNewMessage } from '../../actions';

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
        const message = {
            message: e.target.message.value,
            from: 'v'
        }
        e.target.message.value = "";
        this.props.sendMessage(message);
    }

    componentWillMount() {
        this.props.previousMessages();
        this.connectWebSocket();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    render() {
        return (
            <div className="container box middle-box">
                <ChatMessages {...this.props} />
                <ChatForm sendMessage={this.sendMessage} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.chat.messages,
        loggedUser: state.auth.loggedUser
    }
}
const mapDispatchToProps = (dispatch) => { return bindActionCreators({ previousMessages, sendMessage, onNewMessage }, dispatch) }

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);