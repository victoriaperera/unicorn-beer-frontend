import "./styles.css";
import { Col } from "react-bootstrap";
import { useCheckImg } from "../../../hook/useCheckImg";
import { useSetProductColor } from "../../../hook/useSetProductColor";
import AddToCardBtn from "../../../Common/components/AddToCardBtn";
import { Link } from "react-router-dom";

function Product({ product }) {
  const photos = useCheckImg(product.photos);
  const bgColor = useSetProductColor(product.style.name);

  return (
    <>
      <Col
        md={6}
        lg={4}
        className="d-flex flex-column justify-content-evenly text-center text-white product-card p-0"
        style={{ backgroundColor: bgColor }}
      >
        <Link to="/product">
          <img src={photos[0]} alt={`${product.name} image`} className="product-img" />
        </Link>
        <div>
          <h5>{product.name}</h5>
          <p className="fw-semibold mb-2">$ 19.99</p>
          <span className="addToCartBtn-shop">
            <AddToCardBtn product={product} />
          </span>
        </div>
      </Col>
    </>
  );
}

export default Product;
