import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Table } from "react-bootstrap";
import productsActions from './productsActions';
import styles from './ProductsList.module.css';

const ProductsList = ({ products, getProducts }) => {
    let [productesNumeration] = useState(0);
    useEffect(() => {
        getProducts()
    }, [getProducts])

    return (
        products && products.length > 0 && (
            <div className={styles.holder}>
                <Table bordered hover className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.tableItem}>#</th>
                            <th className={styles.tableItem}>Name</th>
                            <th className={styles.tableItem}>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product.id}>
                                <td className={styles.tableItem}>{(productesNumeration += 1)}</td>
                                <td className={styles.tableItem}>{product.name}</td>
                                <td className={styles.tableItem}>{product.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        )
    )
};

const mstp = state => ({
    products: state.products,
});

const mdtp = {
    getProducts: productsActions.FETCH_PRODUCTS_ALL_GET_START
}


export default connect(mstp, mdtp)(ProductsList);