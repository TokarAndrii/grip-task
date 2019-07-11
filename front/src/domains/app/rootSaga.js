import { all, } from "redux-saga/effects";
import customersSaga from '../customers/sagas';
import productsSaga from '../products/sagas';
import invoicesSaga from '../invoice/sagas';

export default function* rootSaga() {
    yield all([
        customersSaga(),
        productsSaga(),
        invoicesSaga(),
    ])
}