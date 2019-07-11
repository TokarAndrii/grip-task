import { combineReducers } from 'redux';
import customerReducer from '../customers/customersReducer';
import productsReducer from '../products/productsReducer';

const roorReducer = combineReducers({
    customers: customerReducer,
    products: productsReducer,
});

export default roorReducer;