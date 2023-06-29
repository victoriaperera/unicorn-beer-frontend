import React, { useRef, useEffect } from "react";
import { Col, Row, Image } from "react-bootstrap";
import { gsap } from "gsap";

const DesignSection = React.forwardRef((props, ref) => {
  const animationRef3 = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      animationRef3.current,
      {
        opacity: 0,
        y: 40,
      },
      {
        duration: 3,
        opacity: 1,
        y: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: animationRef3.current,
        },
      },
    );
  }, []);

  return (
    <>
      <Row className="about-section about-section-three p-0 justify-content-center align-items-center ">
        <div className="animation-container" ref={animationRef3}>
          <Col xs={12} md={8} lg={6} className="align-self-center mb-4">
            <h3 className="mb-3">PRODUCT DESIGN</h3>

            <p>
              Drawing inspiration from websites like Mastra and Heineken, we not only defined our
              product's name, explored various beer styles, and curated a captivating color palette,
              but also took the initiative to design and create our own brand. This involved
              crafting a unique logo and designing eye-catching packaging to showcase our commitment
              to excellence.
            </p>
          </Col>
          <Col className="d-flex image-container align-self-center justify-content-center p-0 col-12">
            <Image
              src="src/assets/img/product-design-sm.png"
              alt="Product design"
              className="product-design small"
              fluid
            />
            <Image
              src="src/assets/img/product-design-md.png"
              alt="Product design"
              className="product-design medium"
              fluid
            />
            <Image
              src="src/assets/img/product-design-lg.png"
              alt="Product design"
              className="product-design large"
              fluid
            />
          </Col>
          <Col className="d-flex image-container align-self-center justify-content-center p-0 col-12">
            <Image
              src="src/assets/img/Bottle-about-us.png"
              alt="Ipa Bottle"
              className="design-img p-4"
              fluid
            />
          </Col>
        </div>
      </Row>
    </>
  );
});

export default DesignSection;
