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
  const { customerId } = action.payload;
  try {
    const deleteresult = yield call(api.deleteUserById, customerId);
    const { status } = deleteresult;
    if (status === 200) {
      return yield put(customerActions.FETCH_CUSTOMER_DELETE_SUCCESS(customerId));
    }
  } catch (error) {
    console.log(error);
    //to do error handler
  }
}

function* addCustomer(action) {
  const { customer } = action.payload;
  try {
    const addCustomerResult = yield call(api.addCustomer, customer);
    const { data: customerNew, status } = addCustomerResult;
    if (status === 200) yield put(customerActions.FETCH_CUSTOMER_ADD_SUCCESS(customerNew));

  } catch (error) {
    console.log(error);
    //to do error handler
  }
}

function* editCustomer(action) {
  const { customer } = action.payload;
  try {
    const editCustomerResult = yield call(api.editCustomer, customer);
    const { status, data: customerEdited } = editCustomerResult;
    if (status === 200) yield put(customerActions.FETCH_CUSTOMER_EDIT_SUCCESS(customerEdited));

  } catch (error) {
    console.log(error);
    //to do error handler
  }
}



export default function* customersWatcher() {
  yield takeLatest(customerTypes.FETCH_CUSTOMERS_START, getCustomers);
  yield takeLatest(customerTypes.FETCH_CUSTOMER_DELETE_START, deleteUser);
  yield takeLatest(customerTypes.FETCH_CUSTOMER_ADD_START, addCustomer);
  yield takeLatest(customerTypes.FETCH_CUSTOMER_EDIT_START, editCustomer);
}
