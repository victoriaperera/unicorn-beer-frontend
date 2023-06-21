import "./styles.css";
import { gsap } from "gsap";
import { useRef, useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function TeamMemberCard({ admin }) {
  const circle = useRef(null);
  const circleOne = useRef(null);
  const circleTwo = useRef(null);
  const circleThree = useRef(null);
  const circleFour = useRef(null);
  const circleFive = useRef(null);

  const [state, setState] = useState(false);

  const handleExpand = (event) => {
    gsap.to(event.target, {
      duration: 0.8,
      width: 250,
      height: 250,
      ease: "power3.out",
    });
    setState(true);
  };

  const handleShrink = (event) => {
    gsap.to(event.target, {
      duration: 0.8,
      width: 200,
      height: 200,
      ease: "power3.out",
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
      <div className="col mb-5" ref={circleOne}>
        <img
          src="/src/assets/icons/user-1.png"
          alt="User Avatar"
          className="img-team-member"
          onMouseEnter={handleExpand}
          onMouseLeave={handleShrink}
        />
        <h4 className="mt-4">Esteban Castañeira</h4>
        <p>Full Stack Developer Jr.</p>
        <div>
          <a href="#">
            <img
              src="src/assets/icons/linkedin_logo.png"
              alt="linkedin icon"
              typeof="png/image"
              className="team-member-icon me-2"
            />
          </a>
          <a href="#">
            <img
              src="src/assets/icons/github_logo.png"
              alt="github icon"
              typeof="png/image"
              className="team-member-icon"
            />
          </a>
        </div>
      </div>
      <div className="col mb-5" ref={circleTwo}>
        <img
          src="/src/assets/icons/user-2.png"
          alt="User Avatar"
          className="img-team-member"
          onMouseEnter={handleExpand}
          onMouseLeave={handleShrink}
        />
        <h4 className="mt-4">Ivanna Sugliano</h4>
        <p>Full Stack Developer Jr.</p>
        <div>
          <a href="#">
            <img
              src="src/assets/icons/linkedin_logo.png"
              alt="linkedin icon"
              typeof="png/image"
              className="team-member-icon me-2"
            />
          </a>
          <a href="#">
            <img
              src="src/assets/icons/github_logo.png"
              alt="github icon"
              typeof="png/image"
              className="team-member-icon"
            />
          </a>
        </div>
      </div>
      <div className="col mb-5" ref={circleThree}>
        <img
          src="/src/assets/icons/user-3.png"
          alt="User Avatar"
          className="img-team-member"
          onMouseEnter={handleExpand}
          onMouseLeave={handleShrink}
        />
        <h4 className="mt-4">Lorena Rincón</h4>
        <p>Full Stack Developer Jr.</p>
        <div>
          <a href="#">
            <img
              src="src/assets/icons/linkedin_logo.png"
              alt="linkedin icon"
              typeof="png/image"
              className="team-member-icon me-2"
            />
          </a>
          <a href="#">
            <img
              src="src/assets/icons/github_logo.png"
              alt="github icon"
              typeof="png/image"
              className="team-member-icon"
            />
          </a>
        </div>
      </div>
      <div className="col mb-5" ref={circleFour}>
        <img
          src="/src/assets/icons/user-4.png"
          alt="User Avatar"
          className="img-team-member"
          onMouseEnter={handleExpand}
          onMouseLeave={handleShrink}
        />
        <h4 className="mt-4">Nicolás Martínez</h4>
        <p>Full Stack Developer Jr.</p>
        <div>
          <a href="#">
            <img
              src="src/assets/icons/linkedin_logo.png"
              alt="linkedin icon"
              typeof="png/image"
              className="team-member-icon me-2"
            />
          </a>
          <a href="#">
            <img
              src="src/assets/icons/github_logo.png"
              alt="github icon"
              typeof="png/image"
              className="team-member-icon"
            />
          </a>
        </div>
      </div>
      <div className="col mb-5" ref={circleFive}>
        <img
          src="/src/assets/icons/user-5.png"
          alt="User Avatar"
          className="img-team-member"
          onMouseEnter={handleExpand}
          onMouseLeave={handleShrink}
        />
        <h4 className="mt-4">Victoria Perera</h4>
        <p>Full Stack Developer Jr.</p>
        <div>
          <a href="#">
            <img
              src="src/assets/icons/linkedin_logo.png"
              alt="linkedin icon"
              typeof="png/image"
              className="team-member-icon me-2"
            />
          </a>
          <a href="#">
            <img
              src="src/assets/icons/github_logo.png"
              alt="github icon"
              typeof="png/image"
              className="team-member-icon"
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default TeamMemberCard;
