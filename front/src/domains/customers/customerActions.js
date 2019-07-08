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

const FETCH_CUSTOMER_ADD_START = customer => ({
  type: types.FETCH_CUSTOMER_ADD_START,
  payload: { customer }
});

const FETCH_CUSTOMER_ADD_SUCCESS = customer => ({
  type: types.FETCH_CUSTOMER_ADD_SUCCESS,
  payload: { customer }
})

const FETCH_CUSTOMER_EDIT_START = customer => ({
  type: types.FETCH_CUSTOMER_EDIT_START,
  payload: { customer }
})

const FETCH_CUSTOMER_EDIT_SUCCESS = customer => ({
  type: types.FETCH_CUSTOMER_EDIT_SUCCESS,
  payload: { customer }
})

export default {
  FETCH_CUSTOMERS_SUCCESS,
  FETCH_CUSTOMERS_START,
  FETCH_CUSTOMER_DELETE_START,
  FETCH_CUSTOMER_DELETE_SUCCESS,
  FETCH_CUSTOMER_ADD_START,
  FETCH_CUSTOMER_ADD_SUCCESS,
  FETCH_CUSTOMER_EDIT_START,
  FETCH_CUSTOMER_EDIT_SUCCESS,
};
