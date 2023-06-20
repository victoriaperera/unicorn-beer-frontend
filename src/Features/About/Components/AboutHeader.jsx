import "./styles.css";
import { Col, Row, Container } from "react-bootstrap";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";

import React from "react";

function AboutHeader() {
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
        y: 20,
      },
      {
        duration: 1,
        opacity: 1,
        y: 0,
        ease: "power2.out",
        delay: 1,
      },
    );
  }, []);

  return (
    <Container fluid className="about-header p-0">
      <div className="overlay-cans">
        <div className="gradient-overlay"></div>
        <Row className="content ps-5">
          <Col md={6} lg={6} xl={5}>
            <h2 ref={titleRef}>What is Unicorn Beer?</h2>
            <div ref={textRef}>
              <p>
                Unicorn Beer is an e-commerce app developed using the MERN stack as the final
                project of a Coding Bootcamp at Hack Academy, an educational institution that
                specializes in programming courses. The Bootcamp is an immersive and intensive
                full-time course that lasts for three months and requires a workload of 600 hours.
                Its goal is to prepare its students to be Junior Full Stack Developers.
              </p>
              <p>
                This final project aims to showcase the application of the diverse technologies
                learned throughout the Bootcamp. Unicorn Beer was developed over a period of three
                weeks by a team of five students, totaling approximately 700 hours of work.
              </p>
              <p>
                Unicorn beer is a fully functional app designed to be user-friendly and easy to
                navigate.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default AboutHeader;
