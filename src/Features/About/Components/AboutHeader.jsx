import "./styles.css";
import { Col, Row, Container } from "react-bootstrap";

import React from "react";

function AboutHeader() {
  return (
    <Container fluid className="about-header p-0">
      <div className="overlay-cans">
        <div className="gradient-overlay"></div>
        <Row className="content ps-5">
          <Col md={6} lg={6} xl={5}>
            <h2>What is Unicorn Beer?</h2>
            <p>
              Unicorn Beer is an e-commerce app developed using the MERN stack as the final project
              of a Coding Bootcamp at Hack Academy, an educational institution that specializes in
              programming courses. The Bootcamp is an immersive and intensive full-time course that
              lasts for three months and requires a workload of 600 hours. Its goal is to prepare
              its students to be Junior Full Stack Developers.
              <hr className="border-0" />
              This final project aims to showcase the application of the diverse technologies
              learned throughout the Bootcamp. Unicorn Beer was developed over a period of three
              weeks by a team of five students, totaling approximately 700 hours of work.
              <hr className="border-0" />
              Unicorn beer is a fully functional app designed to be user-friendly and easy to
              navigate.
            </p>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default AboutHeader;
