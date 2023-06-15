import "./styles.css";

import React from "react";

import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

function Cart() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
