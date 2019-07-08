import React, { Component } from "react";
import { Modal, Button, Form, } from "react-bootstrap";
import { connect } from 'react-redux';
import customerActions from './customerActions';

const INITIAL_STATE = {
  name: "",
  address: "",
  phone: "",
}

class CustomerAddModal extends Component {
  state = { ...INITIAL_STATE }

  handleInput = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value })
  }

  handleSubmitAddCustomer = e => {
    console.log('handleSubmitAddCustomer')
    e.preventDefault();
    const { addCustomer, onClose } = this.props;
    const { name, address, phone } = this.state;
    const newCustomer = { address, phone, name }
    addCustomer(newCustomer);
    this.setState({ ...INITIAL_STATE });
    onClose();
  }

  render() {
    const { showModal, onClose, handleAddCustomer, } = this.props;
    const { name, address, phone } = this.state;
    return (
      <Modal
        show={showModal}
        onHide={onClose}
        size="lg"
        onSubmit={handleAddCustomer}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add customer form</Modal.Title>
        </Modal.Header>
        <Modal.Body />
        <Form style={{ padding: "50px" }}>
          <Form.Group controlId="formBasicAddCustomer">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" name="name" value={name} onChange={this.handleInput} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Enter address" name="address" value={address} onChange={this.handleInput} />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" placeholder="Enter phone" name="phone" value={phone} onChange={this.handleInput} />
          </Form.Group>
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
              type="submit" size="lg"
              onClick={this.handleSubmitAddCustomer}
            >
              Submit
            </Button>
          </Form.Group>
        </Form>
      </Modal >
    );
  };
}



const mdtp = {
  addCustomer: customerActions.FETCH_CUSTOMER_ADD_START
}

export default connect(null, mdtp)(CustomerAddModal);
