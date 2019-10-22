export default function (state = {}, action) {
    const payload = action.payload;
    switch (action.type) {
        case 'GET_ALL_NEWS':
            return { ...state, all_news: payload }
        default:
            return state;
    }
}