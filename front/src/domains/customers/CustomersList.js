import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Table, Button } from "react-bootstrap";
import CustomerAddModal from "./CustomerAddModal";
import customerActions from "./customerActions";
import styles from "./CustomerList.module.css";


const Customerslist = ({ customers, getCustomers, deleteById }) => {
  useEffect(() => {
    getCustomers();
  }, [customers.length, getCustomers]);

  const [showModal, setModal] = useState(false);
  let [customersQuantity,] = useState(0);

  const handleCloseModal = () => {
    setModal(false);
  };

  const handleShowModal = () => {
    setModal(true);
  };

  const onCustomerAdd = e => {
    e.preventDefault();
    console.log("onCustomerAdd");
    handleCloseModal();
  };

  return (
    <div className={styles.holder}>
      <div className={styles.hederRow}>
        <h1>Customers list</h1>
        <Button variant="outline-secondary" onClick={handleShowModal}>
          Create
        </Button>
      </div>
      <Table bordered hover className={styles.table}>
        <thead>
          <tr>
            <th className={styles.tableItem}>#</th>
            <th className={styles.tableItem}>Name</th>
            <th className={styles.tableItem}>Address</th>
            <th className={styles.tableItem}>Phone</th>
            <th className={styles.tableItem}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.length > 0 &&
            customers.map(customer => (
              <tr key={customer.id}>
                <td className={styles.tableItem}>{customersQuantity += 1}</td>
                <td className={styles.tableItem}>{customer.name}</td>
                <td className={styles.tableItem}>{customer.address}</td>
                <td className={styles.tableItem}>{customer.phone}</td>
                <td className={styles.tableItem}>
                  <Button
                    variant="outline-secondary"
                    onClick={() => deleteById(customer.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <CustomerAddModal
        showModal={showModal}
        onClose={handleCloseModal}
        handleAddCustomer={onCustomerAdd}
      />
    </div>
  );
};

const mstp = state => ({
  customers: state.customers
});

const mdtp = {
  getCustomers: customerActions.FETCH_CUSTOMERS_START,
  deleteById: customerActions.FETCH_CUSTOMER_DELETE_START
};

export default connect(
  mstp,
  mdtp
)(Customerslist);
