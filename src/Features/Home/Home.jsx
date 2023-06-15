import "./styles.css";
import { Container, Row, Col } from "react-bootstrap";
import HomeHeader from "./HomeHeader";
import FeaturedProducts from "./Components/FeaturedProducts";

function Home() {
  return (
    <>
      <HomeHeader />
      <Container fluid className="text-center">
        <Row className="white-row align-items-center justify-content-center">
          <Col>
            <h2 className="m-0">Our Beers</h2>
          </Col>
        </Row>
        <FeaturedProducts />
      </Container>
    </>
  );
}

export default Home;
