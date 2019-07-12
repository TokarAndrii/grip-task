import React from 'react';
import { Helmet } from "react-helmet";
import ProductsList from '../../domains/products/ProductsList';
import styled from 'styled-components';

const Products = ({ className }) =>
    <div className={className}>
        <Helmet>
            <title>Products title</title>
        </Helmet>
        <h1>Products list</h1>
        <ProductsList></ProductsList>
    </div>

export default styled(Products)`
  width: 90vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    margin: 24px 0;
  }
`;