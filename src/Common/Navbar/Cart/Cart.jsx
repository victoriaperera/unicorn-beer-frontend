import "./styles.css";
import Offcanvas from "react-bootstrap/Offcanvas";

import React from "react";

function Cart() {
  return (
    <>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className="row mb-4">
          <div className="col">
            <img
              src="/src/assets/img/Scottish_bottle.png"
              alt="Product image"
              className="cart-img"
            />
          </div>
          <div className="col">
            <p>Product Name</p>
          </div>
          <div className="col">$9.99</div>
        </div>
        <div className="row mb-4">
          <div className="col">
            <img
              src="/src/assets/img/Scottish_bottle.png"
              alt="Product image"
              className="cart-img"
            />
          </div>
          <div className="col">
            <p>Product Name</p>
          </div>
          <div className="col">$9.99</div>
        </div>
        <div className="row mb-4">
          <div className="col">
            <img
              src="/src/assets/img/Scottish_bottle.png"
              alt="Product image"
              className="cart-img"
            />
          </div>
          <div className="col">
            <p>Product Name</p>
          </div>
          <div className="col">$9.99</div>
        </div>
        <div className="row">
          <p className="fw-bold">Order total: $...</p>
        </div>
      </Offcanvas.Body>
    </>
  );
}

export default Cart;
