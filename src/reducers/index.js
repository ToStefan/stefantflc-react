import { combineReducers } from 'redux';
import clients from './client_details_reducer';
import auth from './auth_reducer';
import chat from './chat_reducer';
import collections from './collection_reducer';
import news from './news_reducer';

const rootReducer = combineReducers({
    clients,
    auth,
    chat,
    collections,
    news
})

export default rootReducer;