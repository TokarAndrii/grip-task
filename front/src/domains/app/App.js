import React from "react";
import styled from "styled-components";
import { NavLink, Link, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import routes from "../../configs/routes";

import ProductsPage from "../../pages/products/Products";
import CustomersPage from "../../pages/customers/Customers";

function App({ className }) {
  return (
    <div>
      <Helmet>
        <title>App title</title>
      </Helmet>
      <div className={className}>
        <header>
          <div className="headerDiv">
            <Link to={routes.INDEX}>Grip</Link>
          </div>
          <NavLink activeStyle={{ color: "White" }} to={routes.PRODUCTS}>
            Products
          </NavLink>
          <NavLink activeStyle={{ color: "White" }} to={routes.CUSTOMERS}>
            Customers
          </NavLink>
        </header>
        <main>
          <Switch>
            <Route path={routes.PRODUCTS} component={ProductsPage} />
            <Route path={routes.CUSTOMERS} component={CustomersPage} />
          </Switch>
        </main>
      </div>
    </div>
  );
}

export default styled(App)`
  text-align: center;
  header {
    font-size: 2rem;
    background-color: lightgray;
    height: 10vh;
    padding: 0 10%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .headerDiv {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100px;
    margin-right: 20%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: black;
    font-weight: 600;
    margin-right: 48px;
  }

  a:not(:first-child):hover {
    color: blue;
  }

  main {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
