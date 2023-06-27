import "./styles.css";
import { Col } from "react-bootstrap";
import { useCheckImg } from "../../../hook/useCheckImg";
import { useSetGradientColor } from "../../../hook/useSetGradientColor";
import AddToCartBtn from "../../../Common/components/AddToCartBtn";
import { Link } from "react-router-dom";
import { gsap, Expo } from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function Product({ product }) {
  const bgColor = useSetGradientColor(product);
  const photos = useCheckImg(product.style.photos);
  const main = photos.filter(
    (photo) => photo.includes("Main") && photo.includes(product.container.name),
  );

  const imgRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      { y: "3%", opacity: 0 },
      {
        duration: 1.5,
        y: 0,
        opacity: 1,
        ease: Expo.easeOut,
        scrollTrigger: {
          trigger: imgRef.current,
          start: "center bottom",
          end: "center top",
        },
      },
    );
  }, []);

  return (
    <>
      <Col
        md={6}
        lg={4}
        className="d-flex flex-column justify-content-evenly text-center text-white product-card p-0"
        style={{ background: bgColor }}
      >
        <div ref={imgRef}>
          <Link to={`/products/${product.slug}`}>
            <img src={main} alt={`${product.name} image`} className="product-img" />
          </Link>
          <div>
            <h5 className="m-0 my-2">{product.name}</h5>
            <p className="fw-semibold m-0">$ {product.price.toFixed(2)}</p>
            <span className="addToCartBtn-shop">
              {product.stock > 0 ? (
                <AddToCartBtn product={product} counter={1} />
              ) : (
                <span className="text-white">Out of stock</span>
              )}
            </span>
          </div>
        </div>
      </Col>
    </>
  );
}

export default Product;
