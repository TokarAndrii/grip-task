import React, { Component } from "react";
import { Modal, Button, Form, } from "react-bootstrap";
import { connect } from 'react-redux';
import customerActions from './customerActions';
import styles from './CustomerDeleteModal.module.css';

const INITIAL_STATE = {
    customer: null
}

class CustomerDeleteModal extends Component {
    state = { ...INITIAL_STATE }

    componentDidUpdate(prevProps, ) {
        if (prevProps.userId !== this.props.userId) {
            const { userId, customers } = this.props;
            const customer = customers.find(customer => customer.id === userId);
            this.setState({ customer })
        }
    }

    onDelete = e => {
        e.preventDefault('onDelete');
        const { deleteById, userId, onClose } = this.props;
        deleteById(userId);
        onClose();
    }

    render() {
        const { showModal, onClose, } = this.props;
        const { customer } = this.state;
        return (
            <Modal
                show={showModal}
                onHide={onClose}
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure you want to delete customer?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {customer && (
                        <div className={styles.customerDetails}>
                            <div className={styles.customerDetailsItem}><b>{customer.name}</b></div>
                            <div className={styles.customerDetailsItem}><b>{customer.address}</b></div>
                            <div className={styles.customerDetailsItem}><b>{customer.phone}</b></div>
                        </div>)
                    }
                    <Form style={{ padding: "50px" }} onSubmit={this.onDelete}>
                        <Form.Group
                            controlId="formBasicPassword"
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            <Button
                                variant="outline-secondary"
                                type="submit"
                                size="lg"
                                style={{ marginRight: "24px" }}
                            >
                                OK
                        </Button>
                            <Button
                                variant="outline-secondary"
                                type="button"
                                size="lg"
                                onClick={onClose}
                            >
                                CANCEL
                        </Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal >
        )
    }
};


const mstp = state => ({
    customers: state.customers
});

const mdtp = {
    deleteById: customerActions.FETCH_CUSTOMER_DELETE_START
};

export default connect(mstp, mdtp)(CustomerDeleteModal);