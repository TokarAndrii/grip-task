import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import customerActions from './customerActions';
import styles from './CustomerList.module.css';

const Customerslist = ({ customers, getCustomers }) => {

    useEffect(() => {
        getCustomers();

    }, [customers.length, getCustomers]);
    return (
        <div className={styles.holder}>
            <div className={styles.hederRow}>
                <h1 className={styles.header}>Customers list</h1>
                <Button variant="outline-secondary">Create</Button>
            </div>
            <Table striped bordered hover className={styles.table}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.length > 0 && customers.map(customer => (
                        <tr key={customer.id}>
                            <td>{customer.id += 1}</td>
                            <td>{customer.name}</td>
                            <td>{customer.price}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

const mstp = state => ({
    customers: state.customers
});

const mdtp = { getCustomers: customerActions.FETCH_CUSTOMERS_START }



export default connect(mstp, mdtp)(Customerslist);