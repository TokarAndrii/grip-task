import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import productsActions from "../../domains/products/productsActions";

class ProductsSelect extends Component {
    componentDidMount() {
        const { getProducts } = this.props;
        getProducts();
    }

    render() {
        const { productsList, handleItemChange, selected } = this.props;
        return (
            productsList &&
            productsList.length > 0 && (
                <Form.Group controlId="exampleForm.ControlSelect1" style={{ width: "400px" }}>
                    <Form.Control as="select" name="product" onChange={handleItemChange}>
                        <option value="">Select product:</option>
                        {productsList.map(product => (
                            <option key={product.id} value={product.name}
                                selected={product.name === selected ? true : false}>
                                {product.name}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group>
            )
        );
    }
}

const mstp = state => ({
    productsList: state.products
});

const mdtp = {
    getProducts: productsActions.FETCH_PRODUCTS_ALL_GET_START
};

export default connect(
    mstp,
    mdtp
)(ProductsSelect);
