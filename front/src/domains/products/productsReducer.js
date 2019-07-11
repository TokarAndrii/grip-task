import types from './productsTypes';


const productsReducer = (state = [], { type, payload }) => {
    switch (type) {
        case types.FETCH_PRODUCTS_ALL_GET_SUCCESS: return payload.products;
        default: return state;
    }
}


export default productsReducer;