import "./styles.css";
import AboutHeader from "./Components/AboutHeader";
import TeamMemberCard from "./Components/TeamMemberCard";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function About() {
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
  const merRef = useRef(null);
  const productRef = useRef(null);

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
      <div className="about-nav-container">
        <nav className="about-nav">
          <button className="nav-btn nav-btn-1" onClick={() => scrollToSection(sectionAbout)}>
            About
          </button>
          <button className="nav-btn nav-btn-2" onClick={() => scrollToSection(sectionTech)}>
            Technology
          </button>
          <button className="nav-btn nav-btn-3" onClick={() => scrollToSection(sectionMer)}>
            Mer
          </button>
          <button className="nav-btn nav-btn-4" onClick={() => scrollToSection(sectionDesign)}>
            Design
          </button>
          <button className="nav-btn nav-btn-5" onClick={() => scrollToSection(sectionAdmin)}>
            Admin
          </button>
          <button className="nav-btn nav-btn-6" onClick={() => scrollToSection(sectionTeam)}>
            Team
          </button>
        </nav>
      </div>
      <div ref={sectionAbout}>
        <AboutHeader />
      </div>
      <div className="container-fluid text-center">
        <div className="row d-flex">
          <div className="col-12 about-section about-section-one" ref={sectionTech}>
            <h3>TECHNOLOGIES & TOOLS USED</h3>
            <div
              className="iconsTechContainer mt-4 d-flex justify-content-around flex-wrap"
              ref={logoRef}
            >
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
            </div>
          </div>
          <div className="col-12 about-section about-section-two" ref={sectionMer}>
            <h3>PROJECT ORGANIZATION - MER</h3>
            <div className="py-5">
              <img src="src/assets/img/Proyecto-final-MER.png" alt="" className="mer-img" />
            </div>
          </div>
          <div className="col-12 about-section about-section-three" ref={sectionDesign}>
            <h3>PRODUCT DESIGN</h3>
            <div className="">
              <img src="src/assets/img/Proyecto-final-endpoints.png" alt="" className="arq-img" />
            </div>
          </div>
          <div className="col-12 about-section about-section-four" ref={sectionAdmin}>
            <h3>ADMIN DASHBOARD</h3>
          </div>
          <div className="col-12 about-section about-section-team" ref={sectionTeam}>
            <h3>OUR TEAM</h3>
            <div className="row my-5">
              <TeamMemberCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
