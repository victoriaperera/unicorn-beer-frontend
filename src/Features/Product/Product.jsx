import "./styles.css";
import AddToCardBtn from "../../Common/components/AddToCardBtn";
import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";

import axios from "axios";

import React from "react";

function Product() {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const res = await axios.get("http://localhost:3000/products");
  //     setProducts(res.data);
  //   };
  //   getProducts();
  // }, []);

  // const selectedProduct = products.length > 0 ? products[0] : {};
  // console.log(selectedProduct);
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div className="container-fluid product-view-bg">
      <div className="row">
        <div className="col-12 col-md-6 product-view-img">
          <Carousel
            variant="dark"
            activeIndex={activeIndex}
            onSelect={handleSelect}
            interval={null}
          >
            <Carousel.Item>
              <img className="d-block w-100" src="/src/assets/img/IPA-1.png" alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src="/src/assets/img/IPA-2.png" alt="Second slide" />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col-12 col-md-6 align-self-center px-5">
          <div>
            <h2 className="h4 pb-2">
              IPA Bottle 16.91 Oz
              <span className="badge rounded-pill text-bg-warning fs-6 ms-3">NEW</span>
            </h2>
            <p className="lh-lg">Some beer description here.</p>
            <hr />
            <p className="fs-3 fw-bold">$9.99</p>
          </div>
          <div className="addToCartBtn-product">
            <AddToCardBtn />
          </div>
          <div className="d-flex align-items-center pt-2">
            <i className="bi bi-truck fs-5 text-white me-2"></i>
            <p className="m-0">Delivery available.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
