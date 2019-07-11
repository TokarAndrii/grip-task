import { combineReducers } from "redux";
import customerReducer from "../customers/customersReducer";
import productsReducer from "../products/productsReducer";
import invoicesReducer from "../invoice/invoicesReducer";

const roorReducer = combineReducers({
  customers: customerReducer,
  products: productsReducer,
  invoices: invoicesReducer
});

export default roorReducer;
