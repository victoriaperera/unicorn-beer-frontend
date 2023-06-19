import "./styles.css";
import CartProduct from "./components/CartProduct";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Cart() {
  const cart = useSelector((state) => state.cart);

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

        <div className="cart-footer">
          <div>
            <p className="fw-bold">Order total: $...</p>
          </div>

          <Link className="btn rounded-pill bg-black fw-medium text-white" to="/checkout">
            Checkout
          </Link>
        </div>
      </Offcanvas.Body>
    </>
  );
}

export default Cart;
