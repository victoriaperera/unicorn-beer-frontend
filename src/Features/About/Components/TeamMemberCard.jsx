import "./styles.css";
import { Col } from "react-bootstrap";
import { gsap } from "gsap";
import React, { useRef, useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/all";
import estebanPic from "../../../assets/img/members/Tebi-card.png";
import noahPic from "../../../assets/img/members/Noah-card.png";
import lorenaPic from "../../../assets/img/members/Lore-card.png";
import nicolasPic from "../../../assets/img/members/Nico-card.png";
import victoriaPic from "../../../assets/img/members/Victoria-card.png";
import linkedinIcon from "../../../assets/icons/linkedin_logo.png";
import githubIcon from "../../../assets/icons/github_logo.png";

gsap.registerPlugin(ScrollTrigger);

function TeamMemberCard({ admin }) {
  const circleOne = useRef(null);
  const circleTwo = useRef(null);
  const circleThree = useRef(null);
  const circleFour = useRef(null);
  const circleFive = useRef(null);

  const [state, setState] = useState(false);

  const handleExpand = (event) => {
    gsap.to(event.target, {
      duration: 0.8,
      scale: 1.3,
      ease: "power2.out",
    });
    setState(true);
  };

  const handleShrink = (event) => {
    gsap.to(event.target, {
      duration: 0.8,
      scale: 1,
      ease: "power2.out",
    });
    setState(false);
  };

  useEffect(() => {
    const circles = [circleOne, circleTwo, circleThree, circleFour, circleFive];
    circles.forEach((circleRef, index) => {
      const circle = circleRef.current;
      gsap.fromTo(
        circle,
        {
          opacity: 0,
          y: 20,
        },
        {
          duration: 1,
          opacity: 1,
          y: 0,
          delay: index * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: circleRef.current,
          },
        },
      );
    });
  }, []);

  return (
    <>
      <Col className="mb-4" ref={circleOne}>
        <img
          src={estebanPic}
          alt="Esteban Castañeira"
          className="img-team-member"
          onMouseEnter={handleExpand}
          onMouseLeave={handleShrink}
        />
        <h4 className="mt-4">Esteban Castañeira</h4>
        <p>Full Stack Developer </p>
        <div>
          <a href="https://www.linkedin.com/in/estebancastaneira/" target="_blank">
            <img
              src={linkedinIcon}
              alt="linkedin icon"
              typeof="png/image"
              className="team-member-icon me-2"
              onMouseEnter={handleExpand}
              onMouseLeave={handleShrink}
            />
          </a>
          <a href="https://github.com/estebanCastaneira" target="_blank">
            <img
              src={githubIcon}
              alt="github icon"
              typeof="png/image"
              className="team-member-icon"
              onMouseEnter={handleExpand}
              onMouseLeave={handleShrink}
            />
          </a>
        </div>
      </Col>
      <Col className="mb-4" ref={circleTwo}>
        <img
          src={noahPic}
          alt="Noah Sugliano"
          className="img-team-member"
          onMouseEnter={handleExpand}
          onMouseLeave={handleShrink}
        />
        <h4 className="mt-4">Noah Sugliano</h4>
        <p>Full Stack Developer </p>
        <div>
          <a href="https://www.linkedin.com/in/noah-sugliano" target="_blank">
            <img
              src={linkedinIcon}
              alt="linkedin icon"
              typeof="png/image"
              className="team-member-icon me-2"
              onMouseEnter={handleExpand}
              onMouseLeave={handleShrink}
            />
          </a>
          <a href="https://github.com/Noah1711" target="blank">
            <img
              src={githubIcon}
              alt="github icon"
              typeof="png/image"
              className="team-member-icon"
              onMouseEnter={handleExpand}
              onMouseLeave={handleShrink}
            />
          </a>
        </div>
      </Col>
      <Col className="mb-4" ref={circleThree}>
        <img
          src={lorenaPic}
          alt="Lorena Rincon"
          className="img-team-member"
          onMouseEnter={handleExpand}
          onMouseLeave={handleShrink}
        />
        <h4 className="mt-4">Lorena Rincón</h4>
        <p>Full Stack Developer </p>
        <div>
          <a href="https://www.linkedin.com/in/lore-rincon/" target="_blank">
            <img
              src={linkedinIcon}
              alt="linkedin icon"
              typeof="png/image"
              className="team-member-icon me-2"
              onMouseEnter={handleExpand}
              onMouseLeave={handleShrink}
            />
          </a>
          <a href="https://github.com/lorenacrincon" target="_blank">
            <img
              src={githubIcon}
              alt="github icon"
              typeof="png/image"
              className="team-member-icon"
              onMouseEnter={handleExpand}
              onMouseLeave={handleShrink}
            />
          </a>
        </div>
      </Col>
      <Col className="mb-4 " ref={circleFour}>
        <img
          src={nicolasPic}
          alt="Nicolas Martinez"
          className="img-team-member"
          onMouseEnter={handleExpand}
          onMouseLeave={handleShrink}
        />
        <h4 className="mt-4">Nicolás Martínez</h4>
        <p>Full Stack Developer </p>
        <div>
          <a href="https://www.linkedin.com/in/nicolás-martínez-latorraca" target="_blank">
            <img
              src={linkedinIcon}
              alt="linkedin icon"
              typeof="png/image"
              className="team-member-icon me-2"
              onMouseEnter={handleExpand}
              onMouseLeave={handleShrink}
            />
          </a>
          <a href="https://github.com/Martinez-Latorraca" target="blank">
            <img
              src={githubIcon}
              alt="github icon"
              typeof="png/image"
              className="team-member-icon"
              onMouseEnter={handleExpand}
              onMouseLeave={handleShrink}
            />
          </a>
        </div>
      </Col>
      <Col className="mb-4 " ref={circleFive}>
        <img
          src={victoriaPic}
          alt="User Avatar"
          className="img-team-member"
          onMouseEnter={handleExpand}
          onMouseLeave={handleShrink}
        />
        <h4 className="mt-4">Victoria Perera</h4>
        <p>Full Stack Developer </p>
        <div>
          <a href="https://www.linkedin.com/in/victoria-perera" target="_blank">
            <img
              src={linkedinIcon}
              alt="linkedin icon"
              typeof="png/image"
              className="team-member-icon me-2"
              onMouseEnter={handleExpand}
              onMouseLeave={handleShrink}
            />
          </a>
          <a href="https://github.com/victoriaperera" target="blank">
            <img
              src={githubIcon}
              alt="github icon"
              typeof="png/image"
              className="team-member-icon"
              onMouseEnter={handleExpand}
              onMouseLeave={handleShrink}
            />
          </a>
        </div>
      </Col>
    </>
  );
}

export default TeamMemberCard;
