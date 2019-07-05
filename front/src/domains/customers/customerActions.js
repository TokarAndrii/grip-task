import types from './customerTypes';

const FETCH_CUSTOMERS_SUCCESS = customers => ({
    type: types.FETCH_CUSTOMERS_SUCCESS,
    payload: { customers }
});

const FETCH_CUSTOMERS_START = () => ({
    type: types.FETCH_CUSTOMERS_START,
});


export default { FETCH_CUSTOMERS_SUCCESS, FETCH_CUSTOMERS_START }