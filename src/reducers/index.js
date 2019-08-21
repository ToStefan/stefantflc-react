import { combineReducers } from 'redux';
import clients from './client_details_reducer';
import auth from './auth_reducer';
import chat from './chat_reducer';

const rootReducer = combineReducers({
    clients,
    auth,
    chat
})

export default rootReducer;