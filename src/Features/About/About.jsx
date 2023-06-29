import "./styles.css";
import AboutHeader from "./Components/AboutHeader";
import TeamMemberCard from "./Components/TeamMemberCard";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/all";
import { Col, Container, Row, Image } from "react-bootstrap";
import BackToTopBtn from "../../Common/components/BackToTopBtn";
import Header from "../../Common/components/Header";
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
    ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

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
      <div innerref={sectionAbout}>
        <AboutHeader />
      </div>
      <Container fluid className="text-center">
        <TechSection ref={sectionTech} />
        <MerSection ref={sectionMer} />
        <DesignSection ref={sectionDesign} />
        <DashboardSection ref={sectionAdmin} />
        <TeamSection ref={sectionTeam} />
      </Container>
    </>
  );
}

export default About;
