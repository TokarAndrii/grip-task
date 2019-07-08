import customerTypes from "./customerTypes";

const customerReducer = (state = [], { type, payload }) => {
  switch (type) {
    case customerTypes.FETCH_CUSTOMERS_SUCCESS:
      return payload.customers;
    case customerTypes.FETCH_CUSTOMER_DELETE_SUCCESS:
      return state.filter(customer => customer.id !== payload.customerId);
    case customerTypes.FETCH_CUSTOMER_ADD_SUCCESS:
      return [...state, payload.customer];
    default:
      return state;
  }
};

export default customerReducer;
