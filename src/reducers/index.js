import { combineReducers } from 'redux';
import clients from './client_details_reducer';
import auth from './auth_reducer';

const rootReducer = combineReducers({
    clients,
    auth
})

export default rootReducer;