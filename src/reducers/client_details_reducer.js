export default function (state = {}, action) {
    const payload = action.payload;
    switch (action.type) {
        case 'GET_CLIENT_DETAILS':
            return { ...state, client_details: payload }
        case 'GET_CLIENT_DETAILS_IP':
            return { ...state, client_details_ip: payload }
        default:
            return state;
    }
}