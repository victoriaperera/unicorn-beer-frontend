import "./styles.css";
import { Col, Form, Row, Container } from "react-bootstrap";
import React from "react";

function ShopHeader() {
  return (
    <Container fluid className="shop-header p-0">
      <div className="overlay">
        <div className="gradient-overlay"></div>
        <Row className="content">
          <Col>
            <h2>Welcome to our shop.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime corrupti, placeat
              perferendis molestiae praesentium itaque dolorum aspernatur dolores iusto fugiat
              accusantium veniam eveniet similique consequatur explicabo autem nulla. Asperiores,
              non?
            </p>
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
      </div>
    </Container>
  );
}

export default ShopHeader;
