import "../styles.css";
import Carousel from "react-bootstrap/Carousel";
import { useCheckImg } from "../../../hook/useCheckImg";
import { useState } from "react";

function ProductCarousel({ product }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  const imgs = product.style.photos.filter(
    (img) =>
      img.includes(`${product.container.name}-1`) || img.includes(`${product.container.name}-2`),
  );

  const photos = useCheckImg(imgs);

  return (
    <div className="col-10 col-sm-8 col-lg-5 col-xl-4 p-0 ">
      <Carousel variant="dark" activeIndex={activeIndex} onSelect={handleSelect} interval={null}>
        {photos.map((photo, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100 align-self-center mb-3" src={photo} alt="First slide" />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default ProductCarousel;
