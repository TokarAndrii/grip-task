import React from "react";
import { Modal, Button, Form, Row } from "react-bootstrap";

const CustomerAddModal = ({ showModal, onClose, handleAddCustomer }) => {
  return (
    <Modal
      show={showModal}
      onHide={onClose}
      size="lg"
      onSubmit={handleAddCustomer}
    >
      <Modal.Header closeButton>
        <Modal.Title>Add customer</Modal.Title>
      </Modal.Header>
      <Modal.Body />
      <Form style={{ padding: "50px" }}>
        <Form.Group controlId="formBasicAddCustomer">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Enter address" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" placeholder="Enter phone" />
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
            Submit
          </Button>
        </Form.Group>
      </Form>
    </Modal>
  );
};

export default CustomerAddModal;
