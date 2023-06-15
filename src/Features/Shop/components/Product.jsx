import "./styles.css";
import { Col, Container, Form, Row } from "react-bootstrap";

import React from "react";

function Product() {
  return (
    <>
      <Col md={6} lg={4} className="p-3 text-center">
        <h4>Beer name</h4>
        <img src="" alt="Product image" />
        <p>I'm a tasty beer.</p>
        <p>$ 19.99</p>
      </Col>
    </>
  );
}

export default Product;
