import { put, call, takeLatest } from "redux-saga/effects";
import productsActions from './productsActions';
import productsTypes from './productsTypes';
import api from '../../utils/api';

function* getProducts() {
    try {
        const products = yield call(api.getAllProducts);
        yield put(productsActions.FETCH_PRODUCTS_ALL_GET_SUCCESS(products));
    } catch (error) {
        console.log(error);
        //TO DO error handler
    }
}

export default function* customersWatcher() {
    yield takeLatest(productsTypes.FETCH_PRODUCTS_ALL_GET_START, getProducts);
}
