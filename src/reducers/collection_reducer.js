const initState = {
    collections: [],
    fileToUpload: null,
    images: [],
    imgUploadMsg: "",
    imgUploadMsgClass: "",
    colUploadMsg: "",
    btnDisabled: false
}

export default function (state = initState, action) {
    const payload = action.payload;
    switch (action.type) {
        case 'ON_UPLOAD_IMAGE':
            return {
                ...state,
                fileToUpload: payload
            }
        case 'UPLOAD_IMAGE':
            return {
                ...state,
                imgUploadMsg: "Image uploaded successfully",
                imgUploadMsgClass: "success-text",
                colUploadMsg: "",
                btnDisabled: false
            }
        case 'LOAD_IMAGES_BY_COLLECTION':
            return {
                ...state,
                images: payload
            }
        case 'CREATE_COLLECTION':
            return {
                ...state,
                colUploadMsg: "Collection created",
                imgUploadMsg: "",
                btnDisabled: false,
                collections: [...state.collections, payload]
            }
        case 'LOAD_ALL_COLLECTIONS':
            return {
                ...state,
                collections: payload
            }
        case 'UNLOAD_COLLECTION_IMAGES':
            return {
                ...state,
                images: payload
            }
        case 'DEFAULT_STATUS_MSG':
            return {
                ...state,
                imgUploadMsg: "",
                imgUploadMsgClass: "",
                colUploadMsg: "",
                colUploadMsgClass: ""
            }
        default:
            return state;
    }
}