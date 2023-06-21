import "./styles.css";
import ProductCarousel from "./components/ProductCarousel";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import ProductCard from "./components/ProductCard";

function Product() {
  const params = useParams();
  const products = useSelector((state) => state.shop.products);
  const product = products.find((p) => p.slug === params.id);

  return (
    <div className="container-fluid product-view-bg">
      <div className="row">
        <ProductCarousel product={product} />
        <ProductCard product={product} />
      </div>
    </div>
  );
}

export default Product;
