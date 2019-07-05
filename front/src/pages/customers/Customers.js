import React from 'react';
import { Helmet } from "react-helmet";
import styled from 'styled-components';
import CustomersList from '../../domains/customers/CustomersList';

const Customers = ({ className }) =>
    <div className={className}>
        <Helmet>
            <title>Customers title</title>
        </Helmet>
        <div>
            <CustomersList></CustomersList>
        </div>
    </div>;


export default styled(Customers)`
    width: 90vw;
    display: flex;
    justify-content: center;
    align-items:center;
` ;