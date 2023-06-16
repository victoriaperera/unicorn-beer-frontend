import "./styles.css";
import QuantitySelector from "./components/QuantitySelector";
import CartProduct from "./components/CartProduct";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import axios from "axios";

import React from "react";

function Cart() {
  return (
    <>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="cart-body">
        <div className="cart-product-list">
          <CartProduct />
        </div>

        <div className="cart-footer">
          <div>
            <p className="fw-bold">Order total: $...</p>
          </div>

          <Link className="btn rounded-pill bg-black fw-medium text-white" to="">
            Checkout
          </Link>
        </div>
      </Offcanvas.Body>
    </>
  );
}

export default Cart;
