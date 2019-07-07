import types from "./customerTypes";

const FETCH_CUSTOMERS_SUCCESS = customers => ({
  type: types.FETCH_CUSTOMERS_SUCCESS,
  payload: { customers }
});

const FETCH_CUSTOMERS_START = () => ({
  type: types.FETCH_CUSTOMERS_START
});

const FETCH_CUSTOMER_DELETE_START = customerId => ({
  type: types.FETCH_CUSTOMER_DELETE_START,
  payload: { customerId }
});

const FETCH_CUSTOMER_DELETE_SUCCESS = customerId => ({
  type: types.FETCH_CUSTOMER_DELETE_SUCCESS,
  payload: { customerId }
});

export default {
  FETCH_CUSTOMERS_SUCCESS,
  FETCH_CUSTOMERS_START,
  FETCH_CUSTOMER_DELETE_START,
  FETCH_CUSTOMER_DELETE_SUCCESS
};
