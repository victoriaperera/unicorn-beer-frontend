import "./styles.css";
import AddToCardBtn from "../../Common/components/AddToCardBtn";
import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { useCheckImg } from "../../hook/useCheckImg";

function Product() {
  const [activeIndex, setActiveIndex] = useState(0);
  const params = useParams();
  const products = useSelector((state) => state.shop.products);
  const product = products.find((p) => p.slug === params.id);
  const imgs = product.style.photos.filter(
    (img) =>
      img.includes(`${product.container.name}-1`) || img.includes(`${product.container.name}-2`),
  );

  const photos = useCheckImg(imgs);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div className="container-fluid product-view-bg">
      <div className="row">
        <div className="col-12 col-md-5 product-view-img">
          <Carousel
            variant="dark"
            activeIndex={activeIndex}
            onSelect={handleSelect}
            interval={null}
          >
            {photos.map((photo, index) => (
              <Carousel.Item key={index}>
                <img className="d-block w-100" src={photo} alt="First slide" />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="col-12 col-md-7 align-self-center px-5 product-view-text">
          <div>
            <h2 className="pb-2">
              {product.name}
              <span className="badge rounded-pill text-bg-warning fs-6 ms-3">NEW</span>
            </h2>
            <p className="lh-lg">{product.style.description}</p>
            <hr />
          </div>
          <div className="pb-3">
            <p className="fs-2 fw-bold">${product.price}</p>
            <AddToCardBtn />
          </div>
          <div className="d-flex align-items-center pt-2">
            <i className="bi bi-truck fs-4 text-black me-2"></i>
            <p className="m-0">Delivery available.</p>
            {/* TODO: condicional con el stock */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
