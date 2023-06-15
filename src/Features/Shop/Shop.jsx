import "./styles.css";
import ProductList from "./components/ProductList";
import { Col, Container, Form, Row } from "react-bootstrap";

import React from "react";

function Shop() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg={10}></Col>
          <Col lg={2}>
            <Form className="d-flex mt-3">
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
