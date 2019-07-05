import customerTypes from './customerTypes';

const customerReducer = (state = [], { type, payload }) => {
    switch (type) {
        case customerTypes.FETCH_CUSTOMERS_SUCCESS: return payload.customers
        default: return state;
    }
};

export default customerReducer;