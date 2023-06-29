import { Col, Row, Image } from "react-bootstrap";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const MerSection = React.forwardRef((props, ref) => {
  const animationRef2 = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      animationRef2.current,
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
          trigger: animationRef2.current,
        },
      },
    );
  }, []);

  return (
    <>
      <Row className="about-section about-section-two p-0 justify-content-center align-items-center">
        <div className="animation-container" ref={animationRef2}>
          <Col xs={12} md={8} lg={6} className="align-self-center mb-4">
            <h3 className="mb-3">PROJECT ORGANIZATION - MER</h3>
            <p>
              Our primary objective was to outline the backend prerequisites prior to progressing.
              We created a list of the primary tasks and then meticulously constructed an entity
              relationship diagram. Within this diagram, we defined the fundamental associations
              among the following entities: User, Products, Orders, Styles, and Admins.
            </p>
          </Col>
          <Col className="d-flex image-container align-self-center justify-content-center p-0 mb-5 mx-4 col-12">
            <Image
              src="src/assets/img/MER-small.png"
              alt="MER"
              className="product-design small"
              fluid
            />
            <Image
              src="src/assets/img/MER-medium.png"
              alt="MER"
              className="product-design medium"
              fluid
            />
            <Image
              src="src/assets/img/MER-large.png"
              alt="MER"
              className="product-design large"
              fluid
            />
          </Col>
        </div>
      </Row>
    </>
  );
});

export default MerSection;
