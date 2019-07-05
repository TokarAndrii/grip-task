import { combineReducers } from 'redux';
import customerReducer from '../customers/customersReducer';

const roorReducer = combineReducers({
    customers: customerReducer
});

export default roorReducer;