import "./styles.css";
import CartProduct from "./components/CartProduct";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { setTotal } from "./cartSlice";

function Cart({ show, handleClose }) {
  const cart = useSelector((state) => state.cart.products);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const calculateTotal = () => {
    let total = 0;
    if (Array.isArray(cart)) {
      cart.forEach((product) => {
        total += product.price * product.quantity;
      });
      dispatch(setTotal({ totalAmount: total.toFixed(2) }));
      return total.toFixed(2);
    }
    return total;
  };

  return (
    <>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="cart-body">
        <div className="scrollable">
          {cart.length > 0 &&
            cart.map((product) => <CartProduct product={product} key={product.id} />)}
        </div>

        <div className="cart-footer border-top">
          <div>
            <p className="fw-bold">Order total: ${calculateTotal()}</p>
          </div>

          <Link
            className="btn rounded-pill bg-black fw-medium text-white"
            to={user ? "/checkout" : "/login"}
            onClick={handleClose}
          >
            Checkout
          </Link>
        </div>
      </Offcanvas.Body>
    </>
  );
}

export default Cart;
