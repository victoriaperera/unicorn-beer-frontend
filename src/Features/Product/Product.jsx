import "./styles.css";
import ProductCarousel from "./components/ProductCarousel";
import ProductCard from "./components/ProductCard";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { useSetColor } from "../../hook/useSetColor";
import React from "react";

function Product() {
  const params = useParams();
  const products = useSelector((state) => state.shop.products);
  const product = products.find((p) => p.slug === params.id);

  const bgColor = useSetColor(product);

  return (
    <div style={{ backgroundColor: bgColor }}>
      <div className="container d-flex justify-content-center align-items-center product-view-bg" style={{ backgroundColor: bgColor }}>
        <div className="row">
          <ProductCarousel product={product} />
          <ProductCard product={product} />
        </div>
      </div>
    </div>
  );
}

export default Product;
