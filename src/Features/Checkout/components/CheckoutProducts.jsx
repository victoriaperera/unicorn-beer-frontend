import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Select from "react-select";
import axios from "axios";

function CheckoutProducts({ product }) {
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div key={product.id} className="d-flex flex-row align-items-center mb-4">
      <div className="w-25 me-2 text-center">
        <img
          src={`${import.meta.env.VITE_BACK_URL}/img/${product.photo}`}
          alt={`${product.style.name} ${product.container.name}`}
          className="checkout-img"
        />
      </div>
      <div className="w-75 ps-2">
        <div className="d-flex flex-column checkout-product-details">
          <span>{product.name}</span>
          <span>
            Quantity: {product.quantity} x US$ {product.price}
          </span>
          <span>Subtotal: US$ {(product.price * product.quantity).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProducts;
