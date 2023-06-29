import { Container } from "react-bootstrap";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import videoHome from "../../assets/videos/home_header_video.mp4";
import unicornLogo from "../../assets/icons/Unicorn-beer-white-logo.svg";

function HomeHeader() {
  const logoRef = useRef(null);
  useEffect(() => {
    const el = logoRef.current;
    gsap.fromTo(
      el,
      { scale: 0.5 },
      { duration: 1, scale: 1, ease: "expoScale(0.5, 1, power2.inOut)" },
    );
  }, []);
  return (
    <header>
      <div className="overlay"></div>
      <video playsInline autoPlay muted loop>
        <source src={videoHome} />
      </video>
      <Container className="h-100">
        <div className="d-flex h-100 text-center align-items-center">
          <div className="w-100 text-white">
            <img
              src={unicornLogo}
              alt="Unicorn Logo"
              className="header-logo w-sm-50 w-100"
              ref={logoRef}
            />
          </div>
        </div>
      </Container>
      <div className="divider-bottom">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" style={{ fill: "var(--white)" }}></path>
        </svg>
      </div>
    </header>
  );
}

export default HomeHeader;
