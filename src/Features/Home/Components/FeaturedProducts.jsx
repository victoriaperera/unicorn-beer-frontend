import { useSetColor } from "../../../hook/useSetColor";
import { useCheckImg } from "../../../hook/useCheckImg";
import { Row, Col } from "react-bootstrap";
import { useRef, useEffect } from "react";
import { gsap, Expo } from "gsap";
import { ScrollTrigger } from "gsap/all";
import BuyNowBtn from "../../../Common/components/BuyNowBtn";

gsap.registerPlugin(ScrollTrigger);

function FeaturedProducts({ product, afterColor }) {
  const color = useSetColor(product);
  const topDividerColor = useSetColor(afterColor);
  const photos = useCheckImg(product.style.photos);
  const logo = photos.filter((photo) => photo.includes("logo"));
  const main = photos.filter((photo) => photo.includes("Main") && photo.includes("bottle"));

  const imgRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      { scale: 0.5, opacity: 0 },
      {
        duration: 2,
        scale: 1,
        opacity: 1,
        ease: Expo.easeOut,
        scrollTrigger: {
          trigger: imgRef.current,
          start: "center bottom",
          end: "center top",
        },
      },
    );
    gsap.fromTo(
      leftRef.current,
      { x: "20%", opacity: 0 },
      {
        duration: 2,
        x: 0,
        opacity: 1,
        delay: 0.3,
        ease: Expo.easeOut,
        scrollTrigger: {
          trigger: leftRef.current,
          start: "center bottom",
          end: "center top",
        },
      },
    );
    gsap.fromTo(
      rightRef.current,
      { x: "-20%", opacity: 0 },
      {
        duration: 2,
        x: 0,
        opacity: 1,
        delay: 0.3,
        ease: Expo.easeOut,
        scrollTrigger: {
          trigger: rightRef.current,
          start: "center bottom",
          end: "center top",
        },
      },
    );
  }, []);

  return (
    <>
      <section className={`${product.style.name}-section`}>
        <Row
          className=" align-items-center justify-content-center text-white py-5 product-divider"
          style={{ backgroundColor: color }}
        >
          <div className="divider-top p-0">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                style={{ fill: topDividerColor }}
              ></path>
            </svg>
          </div>
          <Col xs={12} sm={8} md={4} lg={3} xxl={3} className="p-0 px-4 pt-5" ref={leftRef}>
            <img src={logo} alt={`${product.style.name} logo`} className="beer-logo mb-3" />
            <p className="product-text">{product.style.description}</p>
            <img
              src="/src/assets/icons/containers-06.svg"
              alt="beer containers"
              className="beer-containers pb-3 pb-md-0"
            />
          </Col>
          <Col xs={12} sm={8} md={4} lg={4} xxl={3} className="p-0 py-5">
            <img
              src={main}
              alt={`${product.style.name} ${product.container.name}`}
              className="home-product-img img-fluid"
              ref={imgRef}
            />
          </Col>
          <Col xs={12} sm={8} md={4} lg={3} xxl={3} className="py-3" ref={rightRef}>
            <p>VOL.</p>
            <h4 className="fw-bolder fs-1">{product.style.abv}%</h4>
            <BuyNowBtn product={product}></BuyNowBtn>
          </Col>
          <div className="divider-bottom p-0">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" style={{ fill: color }}></path>
            </svg>
          </div>
        </Row>
      </section>
    </>
  );
}

export default FeaturedProducts;
