import "./styles.css";
import { Col } from "react-bootstrap";

import React from "react";
import { useCheckImg } from "../../../hook/useCheckImg";
import { useSetProductColor } from "../../../hook/useSetProductColor";

function Product({ product }) {
  const photos = useCheckImg(product.photos);
  const bgColor = useSetProductColor(product.style.name);

  return (
    <>
      <Col
        md={6}
        lg={4}
        className="p-3 text-center product-card"
        style={{  }}
      >
        <img src={photos[0]} alt="Product image" className="product-img m-3" />
        <h4>{product.name}</h4>
        <p>Some really great beer description.</p>
        <p className="fw-semibold">$ 19.99</p>
      </Col>
    </>
  );
}

export default Product;
