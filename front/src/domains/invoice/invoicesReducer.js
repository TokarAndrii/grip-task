import invoicesTypes from "./inoicesTypes";

const invoicesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case invoicesTypes.FETCH_INVOICES_ADD_SUCCESS:
      return [...state, payload.invoice];
    case invoicesTypes.FETCH_INVOICES_GET_ALL_SUCCESS:
      return payload.invoices;
    default:
      return state;
  }
};

export default invoicesReducer;
