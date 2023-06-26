import "./styles.css";
import { useCheckImg } from "../../../hook/useCheckImg";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";

function CheckoutProduct({ product }) {
  const photos = useCheckImg(product.style.photos);
  const main = photos.find(
    (photo) => photo.includes("Main") && photo.includes(product.container.name),
  );
  return (
    <div key={product.id} className="d-flex flex-row align-items-center mb-4">
      <div className="w-50 me-2 text-center">
        <img src={main} alt={`${product.name} img`} className="checkout-img" />
      </div>
      <div className="w-50 ps-2">
        <div className="d-flex flex-column checkout-product-details">
          <span className="fw-bold">{product.name}</span>
          <span>
            <span className="fw-bold text-orange">{product.quantity}</span> x US$ {product.price}
          </span>
          <span>Subtotal: US$ {(product.price * product.quantity).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
