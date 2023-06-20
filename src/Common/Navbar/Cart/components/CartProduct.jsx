import React from "react";

import "./styles.css";
import { useCheckImg } from "../../../../hook/useCheckImg";

function CartProduct({ product }) {
  console.log(product.container);
  const photos = useCheckImg(product.style.photos);
  const main = photos.filter((photo) => photo.includes("Main") && photo.includes("bottle"));
  const containerVolume = if (product.container === "keg") {
    
  }(product.container.volume * 1000 * 0.033814).toFixed(2);

  return (
    <div className="cart-product my-3">
      <div className="">
        <img src={main} alt="Product image" className="cart-img" />
      </div>
      <div>
        <div className="mt-2 d-flex justify-content-between">
          <p>{product.style.name}</p>
          <p>{product.container.name}</p>
          <p>{volumeInOz}</p>
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
