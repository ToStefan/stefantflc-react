import React from 'react';

const capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

const ChatMessages = (props) => {
    const loggedUser = props.loggedUser;
    const messages = props.data;
    let msgListContent = null;
    messages !== null && typeof messages !== 'undefined' ?
        msgListContent = messages.map((msg, index) => (
            loggedUser === msg.from ?
                <div key={index}>
                    <div className="msg-data msg-data-sent">
                        <span><b>You</b></span>
                        <span className="msg-data-time"><i>{msg.time.substring(11, 16)}</i></span>
                    </div>
                    <div className="msg msg-sent">{msg.message}</div>
                </div>
                :
                <div key={index}>
                    <div className="msg-data msg-data-received">
                        <span><b>{capitalizeString(msg.from)}</b></span>
                        <span className="msg-data-time"><i>{msg.time.substring(11, 16)}</i></span>
                    </div>
                    <div className="msg msg-received">{msg.message}</div>
                </div>))
        :
        msgListContent = null
    return (<div id="scrolling-wrapper" className="middle-box msg-list">{msgListContent}</div>)
};

export default ChatMessages;


