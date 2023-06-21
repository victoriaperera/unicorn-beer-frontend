import "./styles.css";
import CartProduct from "./components/CartProduct";
import CartFooter from "./components/CartFooter";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch, useSelector } from "react-redux";
import React from "react";

function Cart({ handleClose }) {
  const cart = useSelector((state) => state.cart.products);
  const user = useSelector((state) => state.user);

  return (
    <>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="cart-body">
        <div className="scrollable">
          {cart.length > 0 &&
            cart.map((product) => <CartProduct product={product} key={product.product.id} />)}
        </div>
        <CartFooter handleClose={handleClose} />
      </Offcanvas.Body>
    </>
  );
}

export default Cart;
