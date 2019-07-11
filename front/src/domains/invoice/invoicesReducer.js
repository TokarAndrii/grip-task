import invoicesTypes from './inoicesTypes';

const invoicesReducer = (state = [], { type, payload }) => {
    switch (type) {
        case invoicesTypes.FETCH_INVOICES_ADD_SUCCESS: return [...state, payload.invoice]
        default: return state;
    }
};


export default invoicesReducer;