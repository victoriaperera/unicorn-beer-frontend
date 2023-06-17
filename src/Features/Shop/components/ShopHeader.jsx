import "./styles.css";
import { Col, Form, Row, Container } from "react-bootstrap";
import { useState } from "react";
import React from "react";

function ShopHeader() {
  //para poder filtrar las cervezas por estilos con los botones, pero falta el reducer
  const [filterStyle, setFilterStyle] = useState("");

  function handleFilterClick(style) {
    props.getBeersByStyle(style);
    setFilterStyle(style);
  }

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
                  className="rounded-pill product-search-bar"
                  aria-label="Search"
                />
              </Form>
            </Col>
          </Row>
          <Row>
            <Col className="mt-3">
              <button
                className="btn-shop btn-shop-scottish"
                onClick={() => handleFilterClick("Scottish")}
              >
                Scottish
              </button>
              <button
                className="btn-shop btn-shop-pilsener"
                onClick={() => handleFilterClick("Pilsener")}
              >
                Pilsener
              </button>
              <button
                className="btn-shop btn-shop-blonde"
                onClick={() => handleFilterClick("Blonde")}
              >
                Blonde
              </button>
              <button className="btn-shop btn-shop-apa" onClick={() => handleFilterClick("APA")}>
                APA
              </button>
              <button className="btn-shop btn-shop-zero" onClick={() => handleFilterClick("Zero")}>
                Zero
              </button>
              <button className="btn-shop btn-shop-ipa" onClick={() => handleFilterClick("IPA")}>
                IPA
              </button>
              <button
                className="btn-shop btn-shop-stout"
                onClick={() => handleFilterClick("Stout")}
              >
                Stout
              </button>
            </Col>
          </Row>
        </Row>
      </div>
    </Container>
  );
}

export default ShopHeader;
