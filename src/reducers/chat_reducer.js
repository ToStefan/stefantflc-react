const initState = {
    messages: []
}

export default function (state = initState, action) {
    const payload = action.payload;
    switch (action.type) {
        case 'CHAT_GLOBAL_MESSAGES':
            return {
                ...state,
                messages: payload
            }
        case 'CHAT_ADD_MSG_GLOBAL':
            return {
                ...state,
                messages: [...state.messages, payload]
            }
        default:
            return state;
    }
}