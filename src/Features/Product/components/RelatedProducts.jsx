import React from "react";
import BuyNowBtn from "../../../Common/components/BuyNowBtn";

function RelatedProducts() {
  return (
    <>
      <div className="col-10 col-sm-8 col-lg-10 col-xl-8 text-center mt-5 border-bottom m-0">
        <h2>You may also like</h2>
      </div>
      <div className="row d-flex align-items-center justify-content-center mt-4 gap-3 mx-0 p-0">
        <div className="col-10 col-sm-7 col-md-5 col-lg-2  text-center p-0">
          <img src="/src/assets/img/Scottish-1.png" className="related-product" alt="" />
          <div className="my-3">
            <h4>Product name</h4>
            <BuyNowBtn />
          </div>
        </div>
        <div className="col-10 col-sm-7 col-md-5 col-lg-2 text-center p-0">
          <img src="/src/assets/img/Scottish-1.png" className="related-product" alt="" />
          <div className="my-3">
            <h4>Product name</h4>
            <BuyNowBtn />
          </div>
        </div>
        <div className="col-10 col-sm-7 col-md-5 col-lg-2  text-center p-0">
          <img src="/src/assets/img/Scottish-1.png" className="related-product" alt="" />
          <div className="my-3">
            <h4>Product name</h4>
            <BuyNowBtn />
          </div>
        </div>
        <div className="col-10 col-sm-7 col-md-5 col-lg-2  text-center p-0">
          <img src="/src/assets/img/Scottish-1.png" className="related-product" alt="" />
          <div className="my-3">
            <h4>Product name</h4>
            <BuyNowBtn />
          </div>
        </div>
      </div>
    </>
  );
}

export default RelatedProducts;
