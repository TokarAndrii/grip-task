import types from './inoicesTypes';

const FETCH_INVOICES_ADD_START = invoice => ({
    type: types.FETCH_INVOICES_ADD_START,
    payload: { invoice }
});

const FETCH_INVOICES_ADD_SUCCESS = invoice => ({
    type: types.FETCH_INVOICES_ADD_SUCCESS,
    payload: { invoice }
})


export default {
    FETCH_INVOICES_ADD_START,
    FETCH_INVOICES_ADD_SUCCESS,
}