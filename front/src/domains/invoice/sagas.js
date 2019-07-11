import { put, call, takeLatest } from "redux-saga/effects";
import invoiceTypes from "./inoicesTypes";
import invoiceActions from "./invoicesActions";
import api from "../../utils/api";

function* addInvoice(action) {
  const { invoice } = action.payload;
  try {
    const invoiceReceived = yield call(api.addInvoice, invoice);
    yield put(invoiceActions.FETCH_INVOICES_ADD_SUCCESS(invoiceReceived));
  } catch (error) {
    console.log(error);
    //TO DO error handler
  }
}

function* getAllInvoices() {
  try {
    const invoices = yield call(api.getAllInvoices);
    yield put(invoiceActions.FETCH_INVOICES_GET_ALL_SUCCESS(invoices));
  } catch (error) {
    console.log(error);
    //TO DO error handler
  }
}

export default function* invoicesWatcher() {
  yield takeLatest(invoiceTypes.FETCH_INVOICES_ADD_START, addInvoice);
  yield takeLatest(invoiceTypes.FETCH_INVOICES_GET_ALL_START, getAllInvoices);
}
