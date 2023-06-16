import "./styles.css";
import AddToCardBtn from "../../Common/components/AddToCardBtn";
import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Col, Row, Container } from "react-bootstrap";
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
    <div className="container">
      <div className="row">
        <div className="col">
          <Carousel
            variant="dark"
            activeIndex={activeIndex}
            onSelect={handleSelect}
            interval={null}
          >
            <Carousel.Item>
              <img
                className="d-block product-view-img"
                src="/src/assets/img/Scottish_bottle.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block product-view-img"
                src="/src/assets/img/IPA_bottle.png"
                alt="Second slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col">
          <h2>Beer name</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptatum placeat
            incidunt illo sunt maiores. A modi sequi reprehenderit ad vel repudiandae nesciunt
            itaque, inventore incidunt deleniti neque deserunt ullam.
          </p>
          <div className="addToCartBtn-product">
            <AddToCardBtn />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
