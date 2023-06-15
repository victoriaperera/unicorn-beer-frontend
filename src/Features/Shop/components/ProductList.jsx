import "./styles.css";
import Product from "./Product";
import { Col, Container, Form, Row } from "react-bootstrap";

import React from "react";

function ProductList() {
  return (
    <>
      <Row>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </Row>
    </>
  );
}

export default ProductList;
