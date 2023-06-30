import React from "react";
import BuyNowBtn from "../../../Common/components/BuyNowBtn";
import { useSelector } from "react-redux";
import { useCheckImg } from "../../../hook/useCheckImg";

function RelatedProducts() {
  const products = useSelector((state) => state.shop.products);
  const productsRandom = [];

  for (let i = 0; i < 4; i++) {
    const indexRandom = Math.floor(Math.random() * products.length);
    const productRandom = products[indexRandom];
    productsRandom.push(productRandom);
  }
  return (
    productsRandom && (
      <>
        <div className="col-10 col-sm-8 col-lg-10 col-xl-8 text-center mt-5 border-bottom m-0">
          <h2>You may also like</h2>
        </div>
        <div className="row d-flex align-items-center justify-content-center mt-4 gap-3 mx-0 p-0">
          {productsRandom.map((product, index) => {
            const photo = product.style.photos.filter(
              (photo) => photo.includes("Main") && photo.includes(product.container.name),
            );
            {
            }
            return (
              <div key={index} className="col-10 col-sm-7 col-md-5 col-lg-2 text-center p-0">
                <img src={useCheckImg(photo)} className="related-product" alt={product.name} />
                <div className="my-3">
                  <h4>{product.name}</h4>
                  <BuyNowBtn />
                </div>
              </div>
            );
          })}
        </div>
      </>
    )
  );
}

export default RelatedProducts;
