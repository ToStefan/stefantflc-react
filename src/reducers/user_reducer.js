export default function (state = {}, action) {
    switch (action.type) {
        case 'SIGN-IN':
            return { ...state, logged: action.payload }
        default:
            return state;
    }
}