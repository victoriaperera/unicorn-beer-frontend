import "./styles.css";
import AboutHeader from "./Components/AboutHeader";
import TeamMemberCard from "./Components/TeamMemberCard";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/all";
import { Col, Container, Row } from "react-bootstrap";
import BackToTopBtn from "../../Common/components/BackToTopBtn";
import Header from "../../Common/components/Header";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const pageTitle = "About this project";
  const sectionTech = useRef(null);
  const sectionMer = useRef(null);
  const sectionDesign = useRef(null);
  const sectionAdmin = useRef(null);
  const sectionTeam = useRef(null);
  const sectionAbout = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const logoRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      logoRef.current,
      {
        opacity: 0,
        y: 40,
      },
      {
        duration: 2,
        opacity: 1,
        y: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: logoRef.current,
        },
      },
    );
  }, []);

  return (
    <>
      <Header title={pageTitle} />
      <div className="about-nav-container me-3">
        <nav className="about-nav">
          <button
            className="nav-btn nav-btn-1"
            onClick={() => scrollToSection(sectionAbout)}
          ></button>
          <button
            className="nav-btn nav-btn-2"
            onClick={() => scrollToSection(sectionTech)}
          ></button>
          <button
            className="nav-btn nav-btn-3"
            onClick={() => scrollToSection(sectionMer)}
          ></button>
          <button
            className="nav-btn nav-btn-4"
            onClick={() => scrollToSection(sectionDesign)}
          ></button>
          <button
            className="nav-btn nav-btn-5"
            onClick={() => scrollToSection(sectionAdmin)}
          ></button>
          <button
            className="nav-btn nav-btn-6"
            onClick={() => scrollToSection(sectionTeam)}
          ></button>
        </nav>
      </div>
      <BackToTopBtn />
      <div ref={sectionAbout}>
        <AboutHeader />
      </div>
      <Container fluid className="text-center ">
        <Row
          className="about-section about-section-one p-0 justify-content-center align-items-center "
          ref={sectionTech}
        >
          <Col xs={12} md={8} className="align-self-end mb-4">
            <h3 className="mb-5">TECHNOLOGIES & TOOLS</h3>
            <p>
              Throughout the coding bootcamp, we delved into a wide range of technologies
              encompassing both backend and front end development. We also gained hands-on
              experience with databases and leveraged practical tools to optimize our workflow.
            </p>
            <p>
              For this project, we handpicked the following set of tools to boost our productivity.
            </p>
          </Col>
          <Col
            xs={12}
            sm={10}
            md={8}
            className="d-flex justify-content-center align-self-start flex-wrap gap-2 w-100 m-0"
            ref={logoRef}
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
          </Col>
        </Row>
        <Row className="align-items-center justify-content-center ">
          <Col className="col-12 about-section about-section-two" ref={sectionMer}>
            <h3>PROJECT ORGANIZATION - MER</h3>
            <div className="py-5">
              <img src="src/assets/img/Proyecto-final-MER.png" alt="" className="mer-img" />
            </div>
          </Col>
        </Row>
        <Row
          className="about-section about-section-three p-0 justify-content-center align-items-center "
          ref={sectionDesign}
        >
          <Col xs={12} md={8} className="align-self-end mb-4">
            <h3 className="mb-5">PRODUCT DESIGN</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti iure perspiciatis
              ducimus porro cupiditate. Nobis, nulla repudiandae dolores ex ducimus recusandae quos
              mollitia sit soluta similique quod magnam. Dolor, voluptates!
            </p>
          </Col>
          <Col className="d-flex image-container align-self-start justify-content-center p-0">
            <img
              src="src/assets/img/product-design-sm.png"
              alt="Product design"
              className="product-design small"
              fluid
            />
            <img
              src="src/assets/img/product-design-md.png"
              alt="Product design"
              className="product-design medium"
              fluid
            />
            <img
              src="src/assets/img/product-design-lg.png"
              alt="Product design"
              className="product-design large"
              fluid
            />
          </Col>
        </Row>
        <Row>
          <Col className="col-12 about-section about-section-four p-2" ref={sectionAdmin}>
            <h3>ADMIN DASHBOARD</h3>
          </Col>
        </Row>
        <Row
          className="about-section about-section-team p-0 justify-content-center align-items-center "
          ref={sectionTeam}
        >
          <Col className="avatar-container py-5 ">
            <h3 className="mb-4">OUR TEAM</h3>
            <Row className="circle-avatar ">
              <TeamMemberCard />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
