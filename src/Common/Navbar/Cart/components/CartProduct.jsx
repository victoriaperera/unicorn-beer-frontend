import React from "react";

import "./styles.css";
import { useCheckImg } from "../../../../hook/useCheckImg";

function CartProduct({ product }) {
  const photos = useCheckImg(product.style.photos);
  const main = photos.filter((photo) => photo.includes("Main") && photo.includes("bottle"));

  return (
    <div className="cart-product my-3">
      <div className="">
        <img src={main} alt="Product image" className="cart-img" />
      </div>
      <div>
        <div className="mt-2 d-flex justify-content-between">
          <p>{product.name}</p>
          <p className="ms-2">${product.price}</p>
        </div>
        <div className="mt-2 d-flex justify-content-between">
          <p className="fw-bold">{product.quantity}</p>
          <p className="ms-2 fw-bold">${product.price * product.quantity}</p>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
