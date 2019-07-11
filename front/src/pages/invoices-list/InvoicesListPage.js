import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { Link } from "react-router-dom";
import routes from "../../configs/routes";
import InvoicesList from "../../domains/invoice/InvoicesList";

const InvoicesListPage = ({ className }) => (
  <div className={className}>
    <Helmet>
      <title>Products title</title>
    </Helmet>
    <h1>Invoices list</h1>
    <div className="linkHolder">
      <Link to={routes.EDIT_INVOICE}>Add invoice</Link>
    </div>
    <InvoicesList />
  </div>
);

export default styled(InvoicesListPage)`
  h1 {
    margin: 24px 0;
  }

  .linkHolder {
    width: 1000px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 32px;
  }

  a {
    color: #6c757d;
  }
`;
