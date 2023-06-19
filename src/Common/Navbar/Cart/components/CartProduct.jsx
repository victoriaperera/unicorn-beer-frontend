import React from "react";

import "./styles.css";
import { useCheckImg } from "../../../../hook/useCheckImg";

function CartProduct({ product }) {
  const img = useCheckImg(product.photos);

  return (
    <div className="cart-product my-3">
      <div className="">
        <img src={img[0]} alt="Product image" className="cart-img" />
      </div>
      <div>
        <div className="mt-2">
          <span>{product.name}</span>
          <span className="ms-2">${product.price}</span>
        </div>
        <div className="mt-2">
          <span className="fw-bold">{product.quantity}</span>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;