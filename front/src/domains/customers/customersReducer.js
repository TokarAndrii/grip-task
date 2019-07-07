import customerTypes from "./customerTypes";

const customerReducer = (state = [], { type, payload }) => {
  switch (type) {
    case customerTypes.FETCH_CUSTOMERS_SUCCESS:
      return payload.customers;
    case customerTypes.FETCH_CUSTOMER_DELETE_START:
      return payload.customerId;
    case customerTypes.FETCH_CUSTOMER_DELETE_SUCCESS:
      return state.filter(customer => customer.id !== payload.customerId);
    default:
      return state;
  }
};

export default customerReducer;
