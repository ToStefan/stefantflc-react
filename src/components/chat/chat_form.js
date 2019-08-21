import React from 'react';

const ChatForm = (props) => {
    return (
        <div className="container msg-field-form">
            <form onSubmit={props.sendMessage}>
                <div className="form-group">
                    <input
                        className="form-control"
                        name="message"
                        autoComplete="off"
                        placeholder="Start typing..." />
                    <button type="submit">send</button>
                </div>
            </form>
        </div>

    );
};

export default ChatForm;