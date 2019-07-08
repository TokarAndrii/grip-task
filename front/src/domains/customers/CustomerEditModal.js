import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import customerActions from "./customerActions";

const INITIAL_STATE = {
  name: "",
  address: "",
  phone: "",
  id: ""
};

class CustomerEditModal extends Component {
  state = { ...INITIAL_STATE };

  componentDidUpdate(prevProps) {
    if (prevProps.userId !== this.props.userId && this.props.userId) {
      const { userId, customers } = this.props;
      const customer = customers.find(customer => customer.id === userId);
      const { name, address, phone, id } = customer;
      this.setState({ name, address, phone, id });
    }
  }

  handleInput = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmitEditCustomer = e => {
    e.preventDefault();
    const { editCustomer, onClose } = this.props;
    const { name, address, phone, id } = this.state;
    const newCustomer = { address, phone, name, id };
    editCustomer(newCustomer);
    this.setState({ ...INITIAL_STATE });
    onClose();
  };

  render() {
    const { showModal, onClose, handleAddCustomer } = this.props;
    const { name, address, phone } = this.state;
    return (
      <Modal
        show={showModal}
        onHide={onClose}
        size="lg"
        onSubmit={handleAddCustomer}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit customer form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            style={{ padding: "50px" }}
            onSubmit={this.handleSubmitEditCustomer}
          >
            <Form.Group controlId="formBasicAddCustomer">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                value={name}
                onChange={this.handleInput}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address"
                name="address"
                value={address}
                onChange={this.handleInput}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone"
                name="phone"
                value={phone}
                onChange={this.handleInput}
              />
            </Form.Group>
            <Form.Group
              controlId="formBasicPassword"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Button variant="outline-secondary" type="submit" size="lg">
                EDIT
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

const mstp = state => ({
  customers: state.customers
});

const mdtp = {
  editCustomer: customerActions.FETCH_CUSTOMER_EDIT_START
};

export default connect(
  mstp,
  mdtp
)(CustomerEditModal);
