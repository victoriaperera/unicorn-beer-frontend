import "./styles.css";
import React from "react";
import { useCheckImg } from "../../../../hook/useCheckImg";
import { useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity, removeItem } from "../cartSlice";

function CartProduct({ product }) {
  const dispatch = useDispatch();

  const photos = useCheckImg(product.style.photos);
  const main = photos.filter((photo) => photo.includes("Main") && photo.includes("bottle"));

  return (
    <div className="cart-product my-3">
      <div className="w-25 me-3 text-center">
        <img src={main} alt={`${product.name} img`} className="cart-img" />
      </div>
      <div className="w-75">
        <div className="mt-2 d-flex justify-content-between">
          <span>{product.name}</span>
          <span className="ms-2">${product.price}</span>
        </div>
        <div className="mt-2 d-flex justify-content-between">
          <div className="d-flex">
            <i
              className="bi bi-dash-circle"
              onClick={() => dispatch(decrementQuantity(product.id))}
            ></i>
            <span className="px-2 fw-bold">{product.quantity}</span>
            <i
              className="bi bi-plus-circle"
              onClick={() => dispatch(incrementQuantity(product.id))}
            ></i>
          </div>
          <span className="ms-2 fw-bold">${product.price * product.quantity}</span>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
