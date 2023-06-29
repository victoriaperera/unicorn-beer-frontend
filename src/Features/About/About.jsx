import "./styles.css";
import AboutHeader from "./Components/AboutHeader";
import TeamMemberCard from "./Components/TeamMemberCard";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/all";
import { Col, Container, Row, Image } from "react-bootstrap";
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
    ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const animationRef1 = useRef(null);
  const animationRef2 = useRef(null);
  const animationRef3 = useRef(null);
  const animationRef4 = useRef(null);

  useEffect(() => {
    const refs = [animationRef1, animationRef2, animationRef3, animationRef4];

    refs.forEach((ref) => {
      gsap.fromTo(
        ref.current,
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
            trigger: ref.current,
          },
        },
      );
    });
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
      <Container fluid className="text-center">
        <Row
          className="about-section about-section-one p-0 justify-content-center align-items-center "
          ref={sectionTech}
        >
          <div className="animation-container" ref={animationRef1}>
            <Col xs={12} md={8} lg={6} className="align-self-center mb-2">
              <h3 className="mb-3">TECHNOLOGIES & TOOLS</h3>
              <p>
                Throughout the coding bootcamp, we delved into a wide range of technologies
                encompassing both backend and front end development. We also gained hands-on
                experience with databases and leveraged practical tools to optimize our workflow.
              </p>
              <p>
                To ensure efficient task allocation within our team, we utilized Trello as our
                project management tool. The project was divided into three sprints, with Github
                serving as our primary collaboration platform. Discord played a crucial role in
                facilitating seamless communication throughout the development process.
              </p>
              <p>
                For this project, we handpicked the following set of tools to boost our
                productivity.
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
        <Row
          className="about-section about-section-two p-0 justify-content-center align-items-center"
          ref={sectionMer}
        >
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
        <Row
          className="about-section about-section-three p-0 justify-content-center align-items-center "
          ref={sectionDesign}
        >
          <div className="animation-container" ref={animationRef3}>
            <Col xs={12} md={8} lg={6} className="align-self-center mb-4">
              <h3 className="mb-3">PRODUCT DESIGN</h3>

              <p>
                Drawing inspiration from websites like Mastra and Heineken, we not only defined our
                product's name, explored various beer styles, and curated a captivating color
                palette, but also took the initiative to design and create our own brand. This
                involved crafting a unique logo and designing eye-catching packaging to showcase our
                commitment to excellence.
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
        <Row
          className="about-section about-section-four p-0 justify-content-center align-items-center "
          ref={sectionAdmin}
        >
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
