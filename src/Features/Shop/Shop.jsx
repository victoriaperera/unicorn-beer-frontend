import "./styles.css";
import ProductList from "./components/ProductList";
import { Container } from "react-bootstrap";
import ShopHeader from "./components/ShopHeader";

import React from "react";

function Shop() {
  return (
    <>
      <ShopHeader />
      <Container fluid>
        <ProductList />
      </Container>
    </>
  );
}

export default Shop;
