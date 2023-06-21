import "./styles.css";
import React from "react";
import { useCheckImg } from "../../../../hook/useCheckImg";
import { useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity, removeItem } from "../cartSlice";

function CartProduct({ product }) {
  const dispatch = useDispatch();

  const photos = useCheckImg(product.style.photos);
  const main = photos.find(
    (photo) => photo.includes("Main") && photo.includes(product.container.name),
  );

  return (
    <div className="cart-product my-3">
      <div className="w-25 me-2 text-center">
        <img src={main} alt={`${product.name} img`} className="cart-img" />
      </div>
      <div className="w-75">
        <div className="d-flex justify-content-between mt-1">
          <span>{product.name}</span>
          <span className="ms-2">${product.price.toFixed(2)}</span>
        </div>
        <div className="d-flex justify-content-between mt-1">
          <div className="d-flex">
            <i
              className="bi bi-dash-circle"
              onClick={() =>
                product.quantity < 1
                  ? dispatch(removeItem(product.id))
                  : dispatch(decrementQuantity(product.id))
              }
            ></i>
            <span className="px-2 fw-bold">{product.quantity}</span>
            <i
              className="bi bi-plus-circle"
              onClick={() => dispatch(incrementQuantity(product.id))}
            ></i>
          </div>
          <i className="bi bi-trash3" onClick={() => dispatch(removeItem(product.id))}></i>
        </div>
        <div className="d-flex justify-content-between mt-1">
          <span className="fw-bold">Sub-total</span>
          <span className="ms-2 fw-bold">${(product.price * product.quantity).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
