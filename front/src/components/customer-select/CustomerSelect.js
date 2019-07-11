import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import customerActions from "../../domains/customers/customerActions";

class CustomerSelect extends Component {
  componentDidMount() {
    const { getCustomers } = this.props;
    getCustomers();
  }

  render() {
    const { customersList, handleItemChange, selected } = this.props;
    return (
      customersList &&
      customersList.length > 0 && (
        <Form.Group controlId="exampleForm.ControlSelect1" style={{ width: "400px" }}>
          <Form.Control as="select" name="customer" onChange={handleItemChange}>
            <option value="">Select customer:</option>
            {customersList.map(customer => (
              <option key={customer.id} value={customer.name}
                selected={customer.name === selected ? true : false}>
                {customer.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
      )
    );
  }
}

const mstp = state => ({
  customersList: state.customers
});

const mdtp = {
  getCustomers: customerActions.FETCH_CUSTOMERS_START
};

export default connect(
  mstp,
  mdtp
)(CustomerSelect);
