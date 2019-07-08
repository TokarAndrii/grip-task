import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Table, Button } from "react-bootstrap";

import CustomerAddModal from "./CustomerAddModal";
import CustomerDeleteModal from './CustomerDeleteModal';
import CustomerEditModal from './CustomerEditModal';

import customerActions from "./customerActions";
import styles from "./CustomerList.module.css";


const Customerslist = ({ customers, getCustomers, deleteById }) => {
  useEffect(() => {
    getCustomers();
  }, [customers.length, getCustomers]);

  //Customer add 
  const [showAddModal, setAddModal] = useState(false);

  let [customersQuantity,] = useState(0);

  const handleCloseModal = () => {
    setAddModal(false);
  };
  const handleShowModal = () => {
    setAddModal(true);
  };
  const onCustomerAdd = e => {
    e.preventDefault();
    handleCloseModal();
  };

  //Customer delete
  const [userForDeletingId, setUserForDeletingId] = useState(null);

  const [showDeleteConfirm, setDeleteConfirm] = useState(false);

  const handleShowDeleteConfirm = id => {
    setUserForDeletingId(id);
    setDeleteConfirm(true);
  }
  const handleCloseDeleteConfirm = () => {
    setDeleteConfirm(false)
  }

  //customer edit

  const [customerForEditingId, setCustomerForEditingId] = useState(null);

  const [showEditModal, setShowEditModal] = useState(false);

  const handleCloseEditCustomerModal = () => {
    setShowEditModal(false);
    setCustomerForEditingId(null)
  };
  const handleShowEditCustomerModal = id => {
    setCustomerForEditingId(id)
    setShowEditModal(true);
  };

  return (
    <div className={styles.holder}>
      <div className={styles.hederRow}>
        <h1>Customers list</h1>
        <Button variant="outline-secondary" onClick={handleShowModal}>
          CREATE
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
                    onClick={() => handleShowDeleteConfirm(customer.id)}
                    className={styles.buttonsActions}
                  >
                    DELETE
                  </Button>
                  <Button
                    variant="outline-secondary"
                    className={styles.buttonsActions}
                    onClick={() => handleShowEditCustomerModal(customer.id)}
                  >
                    EDIT
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <CustomerAddModal
        showModal={showAddModal}
        onClose={handleCloseModal}
        handleAddCustomer={onCustomerAdd}
      />
      <CustomerDeleteModal
        showModal={showDeleteConfirm}
        onClose={handleCloseDeleteConfirm}
        userId={userForDeletingId}
        handleDelete={deleteById}
      ></CustomerDeleteModal>
      <CustomerEditModal
        showModal={showEditModal}
        onClose={handleCloseEditCustomerModal}
        userId={customerForEditingId}
      ></CustomerEditModal>
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
