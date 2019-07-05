import { all, } from "redux-saga/effects";
import customersSaga from '../customers/sagas';

export default function* rootSaga() {
    yield all([
        customersSaga(),
    ])
}