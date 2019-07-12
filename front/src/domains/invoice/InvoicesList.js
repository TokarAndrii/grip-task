import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
import invoicesActions from "./invoicesActions";
import customerActions from "../customers/customerActions";
import styles from "./InvoicesList.module.css";

const InvoicesList = ({
  invoicesList,
  customersList,
  getInvoices,
  getCustomers
}) => {
  let [invoicesQuantity] = useState(0);

  useEffect(() => {
    getCustomers();
    getInvoices();
  }, [invoicesList.length, getInvoices, getCustomers]);

  const getCustomerById = id => {
    const foundCustomer = customersList.find(cust => cust.id === id);
    const { name } = foundCustomer;
    return name;
  };

  return (
    invoicesList &&
    invoicesList.length > 0 && (
      <div className={styles.holder}>
        <Table bordered hover className={styles.table}>
          <thead>
            <tr>
              <th className={styles.tableItem}>#</th>
              <th className={styles.tableItem}>Customer</th>
              <th className={styles.tableItem}>Discount</th>
              <th className={styles.tableItem}>Total</th>
              <th className={styles.tableItem}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {invoicesList.map(invoice => (
              <tr key={invoice.id}>
                <td className={styles.tableItem}>{(invoicesQuantity += 1)}</td>
                <td className={styles.tableItem}>{getCustomerById(invoice.customer_id)}</td>
                <td className={styles.tableItem}>{invoice.discount}</td>
                <td className={styles.tableItem}>{invoice.total}</td>
                <td className={styles.tableItem}>...</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    )
  );
};

const mstp = state => ({
  customersList: state.customers,
  invoicesList: state.invoices
});

const mdtp = {
  getInvoices: invoicesActions.FETCH_INVOICES_GET_ALL_START,
  getCustomers: customerActions.FETCH_CUSTOMERS_START
};

export default connect(
  mstp,
  mdtp
)(InvoicesList);
