import { put, call, takeLatest } from "redux-saga/effects";
import customerTypes from "./customerTypes";
import customerActions from "./customerActions";
import api from "../../utils/api";

function* getCustomers() {
  try {
    const customers = yield call(api.getUsers);
    yield put(customerActions.FETCH_CUSTOMERS_SUCCESS(customers));
  } catch (error) {
    console.log(error);
    //TO DO error handler
  }
}

function* deleteUser(action) {
  console.log("action", action);
  const { customerId } = action.payload;
  console.log("customerId", customerId);
  try {
    const deleteresult = yield call(api.getusers, customerId);
    if (deleteresult === 200) {
      yield put(customerActions.fetch_customer_delete_success(customerId));
    }
  } catch (error) {
    console.log(error);
    //to do error handler
  }
}

export default function* customersWatcher() {
  yield takeLatest(customerTypes.FETCH_CUSTOMERS_START, getCustomers);
  yield takeLatest(customerTypes.FETCH_CUSTOMER_DELETE_START, deleteUser);
}
