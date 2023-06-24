import "./styles.css";
import { Container, Row, Col } from "react-bootstrap";
import ProductFilter from "./ProductFilter";
import SearchInput from "./SearchInput";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";

function ShopHeader({ productRef }) {
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        scale: 0.5,
      },
      {
        duration: 1,
        scale: 1,
        opacity: 1,
        ease: "power2.out",
      },
    );

    gsap.fromTo(
      textRef.current,
      {
        opacity: 0,
        x: -20,
      },
      {
        duration: 1,
        opacity: 1,
        x: 0,
        ease: "power2.out",
        delay: 1,
      },
    );
  }, []);

  return (
    <Container fluid className="shop-header p-0">
      <div className="overlay-bottles">
        <div className="gradient-overlay"></div>
        <Row className="content-header ps-5 w-100">
          <Col className="d-flex flex-column">
            <div className="content ps-5">
              <h2 ref={titleRef}>Welcome to our shop.</h2>
              <p className="fs-5" ref={textRef}>
                Explore the Magic of Unicorn Beer; where Craftsmanship Awaits
              </p>
            </div>
            <div className="mt-auto">
              <SearchInput productRef={productRef} />
              <ProductFilter productRef={productRef} />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default ShopHeader;
