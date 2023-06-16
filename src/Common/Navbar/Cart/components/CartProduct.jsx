import React from "react";

import "./styles.css";
import { useCheckImg } from "../../../../hook/useCheckImg";

function CartProduct({ product }) {
  const img = useCheckImg(product.photos);

  return (
    <div className="cart-product">
      <div className="">
        <img src={img[0]} alt="Product image" className="cart-img" />
      </div>
      <div className="">
        <p>{product.name}</p>
        <p>${product.price}</p>
      </div>
    </div>
  );
}

export default CartProduct;
