import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Table, Button, Form, } from "react-bootstrap";
import styles from './ProductsSelectedTable.module.css';

const INITIAL_STATE = {
    productNumeration: 1,
    productsSelectedList: []
}

class ProductsSelectedTable extends Component {
    state = { ...INITIAL_STATE }
    //total = productsSelectedList.reduce((accum, product) => accum + product.price, 0)

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.productsSelectedListIds !== this.props.productsSelectedListIds) {
            const { allProductsList, productsSelectedListIds } = this.props;
            const foundArray = allProductsList.filter(product => productsSelectedListIds.includes(product.id) ? product : null);
            console.log("foundArray", foundArray);
            this.setState({ productsSelectedList: [...foundArray] })
        }
    }

    handleInput = (e, id) => {
        const { target } = e;
        const { name, value } = target;
        console.log("name - ", name)
        console.log("value - ", value);
        const { handleAddQuantity } = this.props;
        console.log(id, ' - id')
        handleAddQuantity(name, value)
    }
    render() {
        const { handleRemoveProductFromSelected, handleAddQuantity, amount, } = this.props;
        let { productNumeration, productsSelectedList } = this.state
        return (
            <div >
                {productsSelectedList && productsSelectedList.length > 0 && (
                    <Table bordered hover className={styles.table}>
                        <thead>
                            <tr>
                                <th className={styles.tableItem}>#</th>
                                <th className={styles.tableItem}>Name</th>
                                <th className={styles.tableItem}>Price</th>
                                <th className={styles.tableItem}>Qty</th>
                                <th className={styles.tableItem}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productsSelectedList.map(product => (
                                <tr key={product.id}>
                                    <td className={styles.tableItem}>{productNumeration += 1}</td>
                                    <td className={styles.tableItem}>{product.name}</td>
                                    <td className={styles.tableItem}>{product.price}</td>
                                    <td className={styles.tableItem}>
                                        <Form.Control
                                            type="number"
                                            name={product.id}
                                            value={amount[product.id]}
                                            onChange={this.handleInput}
                                        />
                                    </td>
                                    <td className={styles.tableItem}>
                                        <Button
                                            variant="outline-secondary"
                                            type="button"
                                            size="sm"
                                            onClick={handleRemoveProductFromSelected}>
                                            REMOVE
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className="total">Total:</td>
                            </tr>
                        </tbody>
                    </Table>
                )}
            </div>

        )

    }
}


const mstp = state => ({
    allProductsList: state.products,
})

export default connect(mstp)(ProductsSelectedTable) 