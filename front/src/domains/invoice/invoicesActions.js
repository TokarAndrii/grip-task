import types from "./inoicesTypes";

const FETCH_INVOICES_ADD_START = invoice => ({
  type: types.FETCH_INVOICES_ADD_START,
  payload: { invoice }
});

const FETCH_INVOICES_ADD_SUCCESS = invoice => ({
  type: types.FETCH_INVOICES_ADD_SUCCESS,
  payload: { invoice }
});

const FETCH_INVOICES_GET_ALL_START = () => ({
  type: types.FETCH_INVOICES_GET_ALL_START
});

const FETCH_INVOICES_GET_ALL_SUCCESS = invoices => ({
  type: types.FETCH_INVOICES_GET_ALL_SUCCESS,
  payload: { invoices }
});

export default {
  FETCH_INVOICES_ADD_START,
  FETCH_INVOICES_ADD_SUCCESS,
  FETCH_INVOICES_GET_ALL_START,
  FETCH_INVOICES_GET_ALL_SUCCESS
};
