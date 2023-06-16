import "./styles.css";
import { Col, Form, Row, Container } from "react-bootstrap";
import React from "react";

function ShopHeader() {
  return (
    <Container fluid className="shop-header">
      <Row className=""></Row>
      <Row className="shop-heading">
        <Col lg={10}>
          <h2>Welcome to our shop.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime corrupti, placeat
            perferendis molestiae praesentium itaque dolorum aspernatur dolores iusto fugiat
            accusantium veniam eveniet similique consequatur explicabo autem nulla. Asperiores, non?
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
    </Container>
  );
}

export default ShopHeader;
