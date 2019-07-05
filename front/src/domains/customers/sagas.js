import { put, call, takeLatest, } from "redux-saga/effects";
import customerTypes from './customerTypes';
import customerActions from './customerActions';
import api from '../../utils/api';

function* getCustomers() {
    try {
        const customers = yield call(api.getUsers);
        yield put(customerActions.FETCH_CUSTOMERS_SUCCESS(customers))
    }
    catch (error) {
        console.log(error);
        //TO DO error handler
    }
}

export default function* customersWatcher() {
    yield takeLatest(customerTypes.FETCH_CUSTOMERS_START, getCustomers);
}