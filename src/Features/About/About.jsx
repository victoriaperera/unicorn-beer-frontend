import "./styles.css";
import AboutHeader from "./Components/AboutHeader";
import { gsap } from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { Container } from "react-bootstrap";
import BackToTopBtn from "../../Common/components/BackToTopBtn";
import PageTitle from "../../Common/components/PageTitle";
import TechSection from "./Components/TechSection";
import MerSection from "./Components/MerSection";
import DesignSection from "./Components/DesignSection";
import TeamSection from "./Components/TeamSection";
import DashboardSection from "./Components/DashboardSection";

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

  return (
    <>
      <PageTitle title={pageTitle} />
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
        <div ref={sectionTech}>
          <TechSection />
        </div>
        <div ref={sectionMer}>
          <MerSection />
        </div>
        <div ref={sectionDesign}>
          <DesignSection />
        </div>
        <div ref={sectionAdmin}>
          <DashboardSection />
        </div>
        <div ref={sectionTeam}>
          <TeamSection />
        </div>
      </Container>
    </>
  );
}

export default About;
