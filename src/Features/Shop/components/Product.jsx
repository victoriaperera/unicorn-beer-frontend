import "./styles.css";
import { Col } from "react-bootstrap";

import React from "react";

function Product({ product }) {
  return (
    <>
      <Col md={6} lg={4} className="p-3 text-center product-card">
        <img
          src={product.img}
          alt="Product image"
          className="product-img m-3"
        />
        <h4>{product.name}</h4>
        <p>Some really great beer description.</p>
        <p className="fw-semibold">$ 19.99</p>
      </Col>
    </>
  );
}

export default Product;
