import { Col, Row } from "react-bootstrap";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import figmaLogo from "../../../assets/icons/figma_logo"

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
            <div className="iconTech">
              <i>
                <img
                  src="src/assets/icons/greensock_logo.png"
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
                  src="src/assets/icons/Trello.png"
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
                  src="src/assets/icons/Discord.png"
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
