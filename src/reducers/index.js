import { combineReducers } from 'redux';
import clients from './client_details_reducer';

const rootReducer = combineReducers({
    clients
})

export default rootReducer;