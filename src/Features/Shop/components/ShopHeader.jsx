import "./styles.css";
import { Col, Form, Row, Container } from "react-bootstrap";
import React from "react";
import ProductFilter from "./ProductFilter";

function ShopHeader() {
  return (
    <Container fluid className="shop-header p-0">
      <div className="overlay-bottles">
        <div className="gradient-overlay"></div>
        <div className="container-fluid w-50 ms-0 d-flex flex-column content-header ps-5">
          <h2 className="mt-auto">Welcome to our shop.</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur magnam velit
            exercitationem aut, cupiditate sunt eum distinctio nisi, fugiat laudantium, odit
          </p>
          <div className="mt-auto">
            <Form>
              <Form.Control
                type="search"
                placeholder="Search products..."
                className="rounded-pill"
                aria-label="Search"
              />
            </Form>
            <ProductFilter></ProductFilter>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ShopHeader;
