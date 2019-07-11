import productsTypes from './productsTypes';

const FETCH_PRODUCTS_ALL_GET_START = () => ({
    type: productsTypes.FETCH_PRODUCTS_ALL_GET_START
});

const FETCH_PRODUCTS_ALL_GET_SUCCESS = products => ({
    type: productsTypes.FETCH_PRODUCTS_ALL_GET_SUCCESS,
    payload: { products }
})


export default {
    FETCH_PRODUCTS_ALL_GET_START,
    FETCH_PRODUCTS_ALL_GET_SUCCESS,
}