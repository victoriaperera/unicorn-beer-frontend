import "./styles.css";
import { Container, Row, Col } from "react-bootstrap";
import AboutHeader from "./Components/AboutHeader";
import TeamMemberCard from "./Components/TeamMemberCard";

import React from "react";

function About() {
  const admins = [
    { name: "Ivanna Sugliano" },
    { name: "Esteban Castañeira" },
    { name: "Lorena Rincón" },
    { name: "Nicolás Martínez Latorraca" },
    { name: "Victoria Perera" },
  ];
  return (
    <>
      <AboutHeader />
      <div className="container-fluid text-center">
        <Row className="white-row"></Row>
        <div className="row">
          <div className="col-12 col-lg-6 about-card about-card-one">
            <h3>TECHNOLOGIES</h3>
            <div className="iconsTechContainer mt-4 d-flex justify-content-around flex-wrap flex-xxl-nowrap">
              <div className="iconTech">
                <i>
                  <img
                    src="src/assets/icons/bootstrap_logo.png"
                    alt="bootrapp icon"
                    typeof="png/image"
                    className="tech-icon"
                  />
                </i>
                <small>Bootsrapp</small>
              </div>
              <div className="iconTech">
                <i>
                  <img
                    src="src/assets/icons/css_logo.png"
                    alt="css4 icon"
                    typeof="png/image"
                    className="tech-icon"
                  />
                </i>
                <small>CSS3</small>
              </div>
              <div className="iconTech">
                <i>
                  <img
                    src="src/assets/icons/figma_logo.png"
                    alt="figma icon"
                    typeof="png/image"
                    className="tech-icon"
                  />
                </i>
                <small>Figma</small>
              </div>
              <div className="iconTech">
                <i>
                  <img
                    src="src/assets/icons/github_logo.png"
                    alt="github icon"
                    typeof="png/image"
                    className="tech-icon"
                  />
                </i>
                <small>Github</small>
              </div>
              <div className="iconTech">
                <i>
                  <img
                    src="src/assets/icons/javascript_logo.png"
                    alt="javascript icon"
                    typeof="png/image"
                    className="tech-icon"
                  />
                </i>
                <small>JavaScript</small>
              </div>
              <div className="iconTech">
                <i>
                  <img
                    src="src/assets/icons/mongodb_logo.png"
                    alt="mongodb icon"
                    typeof="png/image"
                    className="tech-icon"
                  />
                </i>
                <small>MongoDB</small>
              </div>
              <div className="iconTech">
                <i>
                  <img
                    src="src/assets/icons/nodejs_logo.png"
                    alt="node icon"
                    typeof="png/image"
                    className="tech-icon"
                  />
                </i>
                <small>NodeJS</small>
              </div>
              <div className="iconTech">
                <i>
                  <img
                    src="src/assets/icons/react_logo.png"
                    alt="react icon"
                    typeof="png/image"
                    className="tech-icon"
                  />
                </i>
                <small>React</small>
              </div>
              <div className="iconTech">
                <i>
                  <img
                    src="src/assets/icons/redux_logo.png"
                    alt="redux icon"
                    typeof="png/image"
                    className="tech-icon"
                  />
                </i>
                <small>Redux</small>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 about-card about-card-two">
            <h3>PROJECT ORGANIZATION - MER</h3>
          </div>
          <div className="col-12 col-lg-6 about-card about-card-three">
            <h3>PRODUCT DESIGN</h3>
          </div>
          <div className="col-12 col-lg-6 about-card about-card-four">
            <h3>ADMIN DASHBOARD</h3>
          </div>
        </div>
      </div>
      <div className="container-fluid my-5 text-center">
        <div className="row">
          <h3 className="my-5">OUR TEAM</h3>
        </div>
        <div className="row my-5">
          {admins.map((admin) => (
            <TeamMemberCard admin={admin}></TeamMemberCard>
          ))}
        </div>
      </div>
    </>
  );
}

export default About;
