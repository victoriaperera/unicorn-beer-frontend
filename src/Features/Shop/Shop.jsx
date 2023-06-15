import "./styles.css";
import ProductList from "./components/ProductList";
import { Col, Container, Form, Row } from "react-bootstrap";

import React from "react";

function Shop() {
  return (
    <>
      <header className="shop-header">
        <Row className="d-flex shop-heading">
          <Col lg={10}>
            <h2>Welcome to our shop.</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur iure, suscipit
              commodi in saepe aspernatur aperiam, quo quidem, dolor ab neque natus necessitatibus
              quae odio ex libero minima iusto eius?
            </p>
          </Col>
          <Col lg={2} className="align-self-end">
            <Form>
              <Form.Control
                type="search"
                placeholder="Search products..."
                className="me-2 rounded-pill"
                aria-label="Search"
              />
            </Form>
          </Col>
        </Row>
      </header>
      <Container fluid>
        <ProductList />
      </Container>
    </>
  );
}

export default Shop;
