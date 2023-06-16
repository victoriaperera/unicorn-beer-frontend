import "./styles.css";
import { Col, Form, Row, Container } from "react-bootstrap";
import React from "react";

function ShopHeader() {
  return (
    <Container fluid className="shop-header p-0">
      <div className="overlay-bottles">
        <div className="gradient-overlay"></div>
        <Row className="content ps-5">
          <Col sm={6}>
            <h2>Welcome to our shop.</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur magnam velit
              exercitationem aut, cupiditate sunt eum distinctio nisi, fugiat laudantium, odit
            </p>
          </Col>
          <Row>
            <Col sm={6} lg={6}>
              <Form>
                <Form.Control
                  type="search"
                  placeholder="Search products..."
                  className="rounded-pill"
                  aria-label="Search"
                />
              </Form>
            </Col>
          </Row>
        </Row>
      </div>
    </Container>
  );
}

export default ShopHeader;
