import { useEffect, useState } from "react";
import arrow from "../../assets/icons/arrow-up-circle.svg";

function BackToTopBtn() {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1000) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {backToTop && (
        <a>
          <img className="go-top" src={arrow} alt="Back to top" onClick={scrollUp} />
        </a>
      )}
    </>
  );
}

export default BackToTopBtn;
