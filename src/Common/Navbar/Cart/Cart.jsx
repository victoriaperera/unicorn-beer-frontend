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
        <img src="/src/assets/img/Scottish_bottle.png" alt="Product image" />
      </Offcanvas.Body>
    </>
  );
}

export default Cart;
