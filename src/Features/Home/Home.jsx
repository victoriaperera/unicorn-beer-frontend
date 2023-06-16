import "./styles.css";
import { Container, Row, Col } from "react-bootstrap";
import HomeHeader from "./HomeHeader";
import UnicornNavbar from "../../Common/Navbar/UnicornNavbar";
import FeaturedProducts from "./Components/FeaturedProducts";

function Home() {
  return (
    <>
      <div>
        <HomeHeader />
        <Container fluid className="text-center">
          <Row className="white-row align-items-center justify-content-center">
            <Col>
              <h2 className="m-0">Our Beers</h2>
            </Col>
          </Row>
          <FeaturedProducts />
        </Container>
      </div>
    </>
  );
}

export default Home;
