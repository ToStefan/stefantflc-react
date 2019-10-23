const initState = {
    all_news: [],
    selectedArticle: 5
}

export default function (state = initState, action) {
    const payload = action.payload;
    switch (action.type) {
        case 'GET_ALL_NEWS':
            return {
                ...state,
                all_news: payload
            }
        case 'GET_ARTICLE_BY_ID':
            return {
                ...state,
                article: payload
            }
        default:
            return state;
    }
}