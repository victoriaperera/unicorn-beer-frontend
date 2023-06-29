import { Col, Row } from "react-bootstrap";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import figmaLogo from "../../../assets/icons/figma_logo";
import cssLogo from "../../../assets/icons/css_logo";
import bootstrapLogo from "../../../assets/icons/bootstrap_logo";
import githubLogo from "../../../assets/icons/github_logo"
import javascriptLogo from "../../../assets/icons/javascript_logo"
import mongodbLogo from "../../../assets/icons/mongodb_logo";
import nodejsLogo from "../../../assets/icons/nodejs_logo";
import reactLogo from "../../../assets/icons/react_logo";
import reduxLogo from "../../../assets/icons/redux_logo";
import greenSockLogo from "../../../assets/icons/greensock_logo";
import trelloLogo from "../../../assets/icons/trello_logo";
import discrodLogo from "../../../assets/icons/discord_logo";

const TechSection = React.forwardRef((props, ref) => {
  const animationRef1 = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      animationRef1.current,
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
          trigger: animationRef1.current,
        },
      },
    );
  }, []);

  return (
    <>
      <Row className="about-section about-section-one p-0 justify-content-center align-items-center ">
        <div className="animation-container" ref={animationRef1}>
          <Col xs={12} md={8} lg={6} className="align-self-center mb-2">
            <h3 className="mb-3">TECHNOLOGIES & TOOLS</h3>
            <p>
              Throughout the coding bootcamp, we delved into a wide range of technologies
              encompassing both backend and front end development. We also gained hands-on
              experience with databases and leveraged practical tools to optimize our workflow.
            </p>
            <p>
              To ensure efficient task allocation within our team, we utilized Trello as our project
              management tool. The project was divided into three sprints, with Github serving as
              our primary collaboration platform. Discord played a crucial role in facilitating
              seamless communication throughout the development process.
            </p>
            <p>
              For this project, we handpicked the following set of tools to boost our productivity.
            </p>
          </Col>
          <Col
            xs={12}
            sm={10}
            md={8}
            xl={6}
            className="d-flex justify-content-center align-self-center flex-wrap gap-2 m-0"
          >
            <div className="iconTech d-flex">
              <i>
                <img
                  src={bootstrapLogo}
                  alt="bootsrap icon"
                  typeof="png/image"
                  className="tech-icon"
                />
              </i>
              <small>Bootsrapp</small>
            </div>
            <div className="iconTech">
              <i>
                <img
                  src={cssLogo}
                  alt="css3 icon"
                  typeof="png/image"
                  className="tech-icon"
                />
              </i>
              <small>CSS3</small>
            </div>
            <div className="iconTech">
              <i>
                <img
                  src={figmaLogo}
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
                  src={githubLogo}
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
                  src={javascriptLogo}
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
                  src={mongodbLogo}
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
                  src={nodejsLogo}
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
                  src={reactLogo}
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
                  src={reduxLogo}
                  alt="redux icon"
                  typeof="png/image"
                  className="tech-icon"
                />
              </i>
              <small>Redux</small>
            </div>
            <div className="iconTech">
              <i>
                <img
                  src={greenSockLogo}
                  alt="greensock icon"
                  typeof="png/image"
                  className="tech-icon"
                />
              </i>
              <small>Green Sock</small>
            </div>
            <div className="iconTech">
              <i>
                <img
                  src={trelloLogo}
                  alt="Trello icon"
                  typeof="png/image"
                  className="tech-icon"
                />
              </i>
              <small>Trello</small>
            </div>
            <div className="iconTech">
              <i>
                <img
                  src={discrodLogo}
                  alt="Discord icon"
                  typeof="png/image"
                  className="tech-icon"
                />
              </i>
              <small>Discord</small>
            </div>
          </Col>
        </div>
      </Row>
    </>
  );
});

export default TechSection;
