import "./styles.css";
import ProductList from "./components/ProductList";
import { Col, Container, Form, Row } from "react-bootstrap";

import React from "react";

function Shop() {
  return (
    <>
      <Container fluid>
        <Row className="p-3">
          <Col lg={10}></Col>
          <Col lg={2}>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search products..."
                className="me-2 rounded-pill"
                aria-label="Search"
              />
            </Form>
          </Col>
        </Row>
        <ProductList />
      </Container>
    </>
  );
}

export default Shop;
