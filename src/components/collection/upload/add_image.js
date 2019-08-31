import React from 'react';

const renderCollectionsName = (collections) => (
    collections ?
        collections.map((collection, index) => (
            <option key={index} value={collection.id} >{collection.name}</option>
        )) : null
)

const AddImage = (props) => {
    return (
        <div>
            <form onSubmit={props.handleUploadImage}>
                <div className="form-group">
                    <h4 className="warning-text">Select collection to add images</h4>
                    <select className="form-control" name="collection_select">
                        {renderCollectionsName(props.collections)}
                    </select>
                </div>
                <div className="form-group">
                    <input
                        className="image-input"
                        type="file"
                        accept="image/*"
                        onChange={props.onUploadImage} />
                </div>
                <button className="success-btn" type="submit" disabled={props.disabled}>Add</button>
            </form>
        </div>
    );
};

export default AddImage;