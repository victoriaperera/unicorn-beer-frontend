import { useEffect, useState } from "react";

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
          <img
            className="goTop"
            src="src/assets/icons/arrow-up-circle.svg"
            alt="Back to top"
            onClick={scrollUp}
          />
        </a>
      )}
    </>
  );
}

export default BackToTopBtn;
