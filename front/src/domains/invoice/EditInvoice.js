import React, { Component } from "react";
import CustomerSelect from "../../components/customer-select/CustomerSelect";

const INITIAL_STATE = {
  customer: "",
  products: [],
  total: "",
  discount: ""
};

class EditInvoice extends Component {
  state = { ...INITIAL_STATE };

  handleInput = ({ target }) => {
    const { name, value } = target;
    console.log(name, " - name");
    console.log(value, " - value");
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <CustomerSelect handleItemChange={this.handleInput} />
      </div>
    );
  }
}

export default EditInvoice;
