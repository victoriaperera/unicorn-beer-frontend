import "./styles.css";
import QuantitySelector from "./components/QuantitySelector";
import { useState, useEffect } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import axios from "axios";

import React from "react";

function Cart() {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    async function fetchQuantity() {
      try {
        const response = await axios.get("/quantity");
        const data = response.data;
        setQuantity(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchQuantity();
  }, []);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };
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
          <QuantitySelector value={quantity} onChange={handleQuantityChange} min={1} max={10} />
        </div>

        <div className="row">
          <p className="fw-bold">Order total: $...</p>
        </div>
      </Offcanvas.Body>
    </>
  );
}

export default Cart;
