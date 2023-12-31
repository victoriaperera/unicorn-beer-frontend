import "./styles.css";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { useSetColor } from "../../hook/useSetColor";
import ProductCarousel from "./components/ProductCarousel";
import ProductCard from "./components/ProductCard";
import RelatedProducts from "./components/RelatedProducts";

function Product() {
  const params = useParams();
  const products = useSelector((state) => state.shop.products);
  const product = products.find((p) => p.slug === params.id);

  const bgColor = useSetColor(product);

  return (
    <>
      <div style={{ backgroundColor: bgColor }}>
        <div
          className="container-fluid d-flex justify-content-center align-items-center text-white m-0 p-0"
          style={{ backgroundColor: bgColor }}
        >
          <div className="row d-flex justify-content-center product-row ">
            <ProductCarousel product={product} />
            <ProductCard product={product} />
            <RelatedProducts />
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
