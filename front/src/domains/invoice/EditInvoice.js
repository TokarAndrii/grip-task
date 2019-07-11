import React, { Component } from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import { connect } from "react-redux";
import CustomerSelect from "../../components/customer-select/CustomerSelect";
import ProductsSelect from "../../components/products-select/ProductsSelect";
import ProductsSelectedTable from "../../components/products-selected/ProductsSelectedTable";
import invoicesActions from "./invoicesActions";
import styles from "./EditInvoice.module.css";
import routes from "../../configs/routes";

const INITIAL_STATE = {
  customer: "",
  product: "",
  cart: {
    productsSelectedIds: [],
    amount: {}
  },
  total: "",
  discount: ""
};

class EditInvoice extends Component {
  state = { ...INITIAL_STATE };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.cart.productsSelectedIds !==
        this.state.cart.productsSelectedIds ||
      prevState.discount !== this.state.discount
    ) {
      this.countTotalPrice("componentDidUpdate countTotalPrice");
    }
  }

  handleInput = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleAddProductToSelected = () => {
    const {
      product,
      cart: { productsSelectedIds }
    } = this.state;
    const { allProductsList } = this.props;
    const foundProduct = allProductsList.find(
      currProduct => currProduct.name === product
    );
    const ifExistAtSelected = productsSelectedIds.includes(foundProduct.id);

    if (!ifExistAtSelected) {
      const { id } = foundProduct;
      this.setState(prevState => ({
        cart: {
          productsSelectedIds: [...prevState.cart.productsSelectedIds, id],
          amount: { ...prevState.cart.amount, [id]: 1 }
        }
      }));
    }
    if (ifExistAtSelected) {
      return alert(
        "This product is already at list of selected, just change quantity at table below"
      );
    }
  };

  handleAddQuantityOfProducts = (id, qty) => {
    this.setState(prevState => ({
      ...prevState,
      cart: {
        productsSelectedIds: [...prevState.cart.productsSelectedIds],
        amount: { ...prevState.cart.amount, [id]: qty }
      }
    }));
  };

  countTotalPrice = () => {
    const { allProductsList } = this.props;
    const {
      cart: { amount, productsSelectedIds },
      discount
    } = this.state;

    let discountInPercent = discount !== "" ? discount / 100 : 0;

    const total = productsSelectedIds.reduce((accum, product) => {
      const found = allProductsList.find(curr => curr.id === product);
      accum += amount[product] * found.price;
      return accum;
    }, 0);

    const totalWithDiscount = total - total * discountInPercent;

    this.setState(prevState => ({
      ...prevState,
      total: totalWithDiscount.toFixed(2)
    }));
  };

  handleRemoveProductFromSelected = id => {
    const { [id]: _, ...restAmount } = this.state.cart.amount;
    const { productsSelectedIds } = this.state.cart;

    const filteredProductsSelectedIds = productsSelectedIds.filter(
      curr => curr !== id
    );

    this.setState(prevState => ({
      ...prevState,
      cart: {
        productsSelectedIds: [...filteredProductsSelectedIds],
        amount: { ...restAmount }
      }
    }));
  };

  handleSaveInvoice = () => {
    const { customersList, handleAddInvoice, history } = this.props;
    const { customer, discount, total } = this.state;
    const customerFound = customersList.find(
      currCustomer => currCustomer.name === customer
    );
    const { id: customer_id } = customerFound;
    const invoiceToSave = { discount, total, customer_id };
    handleAddInvoice(invoiceToSave);
    history.push(routes.INVOICES_LIST);
  };

  render() {
    const {
      cart: { productsSelectedIds, amount },
      total,
      discount
    } = this.state;
    //const { cart: { amount }, discount } = this.state;
    return (
      <div className={styles.holder}>
        <InputGroup style={{ width: "400px", marginBottom: "16px" }}>
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">Discount %</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            type="number"
            name="discount"
            value={discount}
            onChange={this.handleInput}
          />
        </InputGroup>
        <CustomerSelect handleItemChange={this.handleInput} />
        <div className={styles.addProductsRow}>
          <ProductsSelect handleItemChange={this.handleInput} />
          <Button
            variant="outline-secondary"
            type="button"
            size="sm"
            className={styles.addProductBtn}
            onClick={this.handleAddProductToSelected}
          >
            ADD PRODUCT
          </Button>
        </div>
        <ProductsSelectedTable
          productsSelectedListIds={productsSelectedIds}
          amount={amount}
          handleAddQuantity={this.handleAddQuantityOfProducts}
          handleRemoveProductFromSelected={this.handleRemoveProductFromSelected}
          total={total}
        />
        {productsSelectedIds && productsSelectedIds.length > 0 && (
          <div className={styles.saveInvoiceBtnRow}>
            <Button
              variant="outline-secondary"
              type="button"
              size="lg"
              onClick={this.handleSaveInvoice}
            >
              SAVE
            </Button>
          </div>
        )}
      </div>
    );
  }
}

const mstp = state => ({
  allProductsList: state.products,
  customersList: state.customers
});

const mdtp = {
  handleAddInvoice: invoicesActions.FETCH_INVOICES_ADD_START
};

export default connect(
  mstp,
  mdtp
)(EditInvoice);
