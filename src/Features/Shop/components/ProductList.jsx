import "./styles.css";
import Product from "./Product";
import { Col, Container, Form, Row } from "react-bootstrap";

import React from "react";

function ProductList() {
  const products = [
    { name: "IPA", style: "IPA", img: "/src/assets/img/IPA_bottle.png" },
    {
      name: "Scottish",
      style: "Scottish",
      img: "/src/assets/img/Scottish_bottle.png",
    },
  ];
  return (
    <>
      <Row className="pt-3">
        {products.map((product, index) => (
          <Product product={product} key={index}></Product>
        ))}
      </Row>
    </>
  );
}

export default ProductList;
