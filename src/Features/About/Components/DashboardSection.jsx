import { Col, Row, Image } from "react-bootstrap";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const DashboardSection = React.forwardRef((props, ref) => {
  const animationRef4 = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      animationRef4.current,
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
          trigger: animationRef4.current,
        },
      },
    );
  }, []);

  return (
    <>
      <Row className="about-section about-section-four p-0 justify-content-center align-items-center ">
        <div className="animation-container" ref={animationRef4}>
          <Col xs={12} md={8} lg={6} className="align-self-center mb-4">
            <h3 className="mb-3">ADMIN DASHBOARD</h3>
            <p>
              In this e-commerce platform, we provide an admin panel dashboard where the
              administrator has the ability to delete, update, or create products, categories and
              users. Additionally, they can monitor the status of orders and make modifications as
              necessary.
            </p>
          </Col>
          <Col className="d-flex image-container align-self-center justify-content-center p-0 col-12">
            <Image
              src="src/assets/img/Admin_dashboard.png"
              alt="Admin dashboard"
              className="dashboard-img"
              fluid
            />
          </Col>
          <Col xs={12} md={8} lg={6} className="align-self-center mt-5">
            <h4>To access our admin dashboard, please follow these steps:</h4>
          </Col>
          <Col xs={12} sm={7} md={8} lg={4} className="align-self-center mt-3">
            <ol className="text-start">
              <li>
                Visit our{" "}
                <a href="/admin/login" className="admin-link">
                  admin login page.
                </a>
              </li>
              <li>Enter the email address "test@test.com" as your username.</li>
              <li>Input "123" as the password.</li>
              <li>Click on the login button or submit the form.</li>
            </ol>
          </Col>
        </div>
      </Row>
    </>
  );
});

export default DashboardSection;
