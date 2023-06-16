import React from "react";

import "./styles.css";
import QuantitySelector from "./QuantitySelector";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import axios from "axios";

function CartProduct() {
  return (
    <div className="cart-product">
      <div className="">
        <img src="/src/assets/img/Scottish_bottle.png" alt="Product image" className="cart-img" />
      </div>
      <div className="">
        <p>Product Name</p>
        <p>$9.99</p>
        <div>Q SELECTOR</div>
      </div>
    </div>
  );
}

export default CartProduct;
