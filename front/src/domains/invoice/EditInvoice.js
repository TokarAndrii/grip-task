import React, { Component } from "react";
import { Button, } from "react-bootstrap";
import { connect } from 'react-redux';
import CustomerSelect from "../../components/customer-select/CustomerSelect";
import ProductsSelect from '../../components/products-select/ProductsSelect';
import ProductsSelectedTable from '../../components/products-selected/ProductsSelectedTable';
import styles from './EditInvoice.module.css';


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

  handleInput = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleAddProductToSelected = () => {
    const { product, cart: { productsSelectedIds } } = this.state;
    const { allProductsList } = this.props;
    const foundProduct = allProductsList.find(currProduct => currProduct.name === product);
    console.log("foundProduct", foundProduct);
    const ifExistAtSelected = productsSelectedIds.includes(foundProduct.id);
    console.log("ifExistAtSelected", ifExistAtSelected);

    if (!ifExistAtSelected) {
      const { id } = foundProduct;
      //const { cart } = this.state;
      this.setState(prevState => ({
        cart: {
          productsSelectedIds: [...prevState.cart.productsSelectedIds, id],
          amount: { ...prevState.cart.amount, [id]: 1 }
        }
      }))
    }
    if (ifExistAtSelected) {
      console.log('ifExistAtSelected');
      return alert("This product is already at list of selected, just change quantity at table below");
    }
  }

  handleAddQuantityOfProducts = (id, qty) => {
    console.log("handleAddQuantityOfProducts [id]: ", id);
    console.log("handleAddQuantityOfProducts [qty]: ", qty)
    this.setState(prevState => ({
      ...prevState,
      cart: {
        productsSelectedIds: [...prevState.cart.productsSelectedIds],
        amount: { ...prevState.cart.amount, [id]: qty }
      }
    }))
  }

  // handleAddProductToSelected = () => {
  //   console.log('handleAddProductToSelected');
  //   const { allProductsList } = this.props;
  //   const { product } = this.state;
  //   const { }
  //   const ifExistAtSelected = productsSelected.find(currProd => currProd.name === product);
  //   if (ifExistAtSelected) {
  //     console.log('ifExistAtSelected');
  //     alert("This product is already at list of selected, just change quantity at table below");
  //     return
  //   }
  //   const foundProduct = allProductsList.find(currProduct => currProduct.name === product);
  //   console.log("foundProduct", foundProduct);
  //   this.setState(prevState => ({ productsSelected: [...prevState.productsSelected, foundProduct] }))
  // }

  render() {
    const { cart: { productsSelectedIds } } = this.state;
    const { cart: { amount } } = this.state;
    return (
      <div className={styles.holder}>
        <CustomerSelect handleItemChange={this.handleInput} />
        <div className={styles.addProductsRow}>
          <ProductsSelect handleItemChange={this.handleInput}></ProductsSelect>
          <Button
            variant="outline-secondary"
            type="button" size="sm" className={styles.addProductBtn}
            onClick={this.handleAddProductToSelected}>
            ADD PRODUCT
              </Button>
        </div>
        <ProductsSelectedTable
          productsSelectedListIds={productsSelectedIds}
          amount={amount}
          handleAddQuantity={this.handleAddQuantityOfProducts}
        />
      </div>
    );
  }
}

const mstp = state => ({
  allProductsList: state.products,
})

export default connect(mstp)(EditInvoice);
