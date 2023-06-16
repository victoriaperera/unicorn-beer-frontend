import { Row, Col, Button } from "react-bootstrap";
import AddToCardBtn from "../../../Common/components/AddToCardBtn";

function FeaturedProducts() {
  return (
    <>
      <section>
        <Row className="scottish-row align-items-center justify-content-center text-white py-5 product-divider">
          <div className="divider-top-RED p-0">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="RED-fill"></path>
            </svg>
          </div>
          <Col xs={12} sm={8} md={4} lg={3} xxl={3} className="p-0 px-4 pt-5">
            <img
              src="/src/assets/icons/Scottish_logo.svg"
              alt="Scottish logo"
              className="beer-logo mb-3"
            />
            <p className="product-text">
              A unique and flavorful amber or brown beer with a malty character and caramel notes.
              Balancing sweetness and bitterness, it offers a medium to full body with a prominent
              malt profile and subtle hints of toffee and nuts. Perfect for those seeking intense
              and full-bodied beer experiences.
            </p>
            <img
              src="/src/assets/icons/containers-06.svg"
              alt="beer containers"
              className="beer-containers pb-3 pb-md-0"
            />
          </Col>
          <Col xs={12} sm={8} md={4} lg={4} xxl={3} className="p-0 py-5">
            <img
              src="/src/assets/img/Scottish_bottle.png"
              alt="Scottish Bottle"
              className="home-product-img img-fluid"
            />
          </Col>
          <Col xs={12} sm={8} md={4} lg={3} xxl={3} className="py-3">
            <p>VOL.</p>
            <h4 className="fw-bolder fs-1">4.4%</h4>
            <p>AMBER</p>
            <Button variant="outline-light mb-5" size="lg" className="rounded-pill">
              Buy Now
            </Button>
          </Col>
          <div className="divider-bottom-VIOLET p-0">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="VIOLET-fill"></path>
            </svg>
          </div>
        </Row>
      </section>
      <section>
        <Row className="ipa-row align-items-center justify-content-center text-white py-5 ">
          <Col xs={12} sm={8} md={4} lg={3} xxl={3} className="p-0 px-4">
            <img src="/src/assets/icons/IPA_logo.svg" alt="IPA logo" className="beer-logo mb-3" />
            <p className="product-text">
              An exceptional India Pale Ale with a golden color and captivating aroma of citrus and
              tropical fruits. It perfectly balances hop bitterness and malt sweetness, offering a
              refreshing and invigorating flavor with notes of grapefruit, pine, and resin. A bold
              and vibrant beer journey.
            </p>
            <img
              src="/src/assets/icons/containers-06.svg"
              alt="beer containers"
              className="beer-containers pb-3 pb-md-0"
            />
          </Col>
          <Col xs={12} sm={8} md={4} lg={4} xxl={3} className="p-0">
            <img
              src="/src/assets/img/IPA_bottle.png"
              alt="IPA Bottle"
              className="home-product-img img-fluid"
            />
          </Col>
          <Col xs={12} sm={8} md={4} lg={3} xxl={3} className="py-3">
            <p>VOL.</p>
            <h4 className="fw-bolder fs-1">5%</h4>
            <p>CITRUS</p>
            <Button variant="outline-light mb-5" size="lg" className="rounded-pill">
              Buy Now
            </Button>
          </Col>
        </Row>
      </section>
    </>
  );
}

export default FeaturedProducts;
