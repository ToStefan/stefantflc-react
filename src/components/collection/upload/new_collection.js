import React from 'react';

const NewCollection = (props) => {
    return (
        <div>
            <form onSubmit={props.handleCreateCollection}>
                <h4 className="warning-text">Create new collection</h4>
                <div className="form-group">
                    <input
                        className="form-control"
                        name="collection"
                        type="text"
                        placeholder="Enter collection name"
                        autoComplete="off"
                        required />
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        name="description"
                        type="text"
                        placeholder="Enter description (optional)"
                        autoComplete="off" />
                </div>
                <button className="success-btn" type="submit" disabled={props.disabled}>Create</button>
            </form>
        </div>
    );
};

export default NewCollection;