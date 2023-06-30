import "./styles.css";
import { Col, Row, Container } from "react-bootstrap";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";

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
                full-time course that lasts for three months and takes a total of 600 hours. Its
                goal is to prepare its students to be Full Stack Developers.
              </p>
              <p>
                This final project aims to showcase the application of the diverse technologies
                learned throughout the Bootcamp.
              </p>
              <p>
                The web app was developed over a period of three weeks by a team of five students,
                totaling approximately 150 hours of work per student. It is a fully functional app
                designed to be user-friendly and easy to navigate.
              </p>
              <p>
                In this section, you can explore the behind-the-scenes journey of creating Unicorn
                Beer and gain a comprehensive understanding of the development process behind our
                e-commerce app.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default AboutHeader;
