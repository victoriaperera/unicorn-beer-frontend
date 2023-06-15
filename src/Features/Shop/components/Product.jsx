import "./styles.css";
import { Col } from "react-bootstrap";

import { useCheckImg } from "../../../hook/useCheckImg";
import { useSetProductColor } from "../../../hook/useSetProductColor";
import AddToCardBtn from "../../../Common/components/AddToCardBtn";

function Product({ product }) {
  const photos = useCheckImg(product.photos);
  const bgColor = useSetProductColor(product.style.name);

  return (
    <>
      <Col
        md={6}
        lg={4}
        className="d-flex flex-column justify-content-center align-items-center p-3 text-center text-white product-card"
        style={{ backgroundColor: bgColor }}
      >
        <img src={photos[0]} alt={`${product.name} image`} className="m-3 product-img" />
        <h5>{product.name}</h5>
        <p className="fw-semibold">$ 19.99</p>
        <span className="addToCartBtn-shop">
          <AddToCardBtn />
        </span>
      </Col>
    </>
  );
}

export default Product;
