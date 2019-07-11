import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import EditInvoice from "../../domains/invoice/EditInvoice";

const EditInvoicePage = ({ className, history }) => {
  return (
    <div className={className}>
      <Helmet>
        <title>Edit invoice title</title>
      </Helmet>
      <h1>Add invoice</h1>
      <EditInvoice history={history} />
    </div>
  );
};

export default styled(EditInvoicePage)`
  width: 90vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    margin: 24px 0;
  }
`;
