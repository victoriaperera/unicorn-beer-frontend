import "./styles.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import HomeHeader from "./HomeHeader";
import FeaturedProducts from "./Components/FeaturedProducts";

function Home() {
  return (
    <>
      <HomeHeader />
      <Container fluid className="text-center">
        <Row className="py-3">
          <Col>
            <h2>Our Beers</h2>
          </Col>
        </Row>
        <FeaturedProducts />
      </Container>
    </>
  );
}

export default Home;
