import { Container } from "react-bootstrap";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";

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
        <source src="/src/assets/videos/home_header_video.mp4" />
      </video>
      <Container className="h-100">
        <div className="d-flex h-100 text-center align-items-center">
          <div className="w-100 text-white">
            <img
              src="/src/assets/icons/Unicorn-beer-white-logo.svg"
              alt="Unicorn Logo"
              className="header-logo w-sm-50 w-100"
              ref={logoRef}
            />
            {/*<p className="lead mb-0">Unlock the magic in every sip</p>*/}
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

{
  /*
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="/src/assets/img/main_header_bg.jpeg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="/src/assets/img/main_header_bg.jpeg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/src/assets/img/main_header_bg.jpeg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>*/
}
