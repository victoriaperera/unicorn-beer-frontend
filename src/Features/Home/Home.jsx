import "./styles.css";
import HomeHeader from "./HomeHeader";
import axios from "axios";
import FeaturedProducts from "./Components/FeaturedProducts";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductList } from "../../redux/productSlice";

function Home() {
  const products = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(`${import.meta.env.VITE_BACK_URL}/products`);

      const aux = res.data.filter((p) => p.container.name === "bottle");
      dispatch(setProductList(aux));
    };
    getProducts();
  }, []);

  return (
    <>
      <div>
        <HomeHeader />
        <Container fluid className="text-center">
          <section id="our-beer-section">
            <Row className="white-row align-items-center justify-content-center">
              <Col>
                <h2 className="m-0 beers-heading">Our Beers</h2>
              </Col>
            </Row>
            {products.length > 0 &&
              products.map((product, i) => (
                <FeaturedProducts product={product} afterColor={products[i - 1]} key={product.id} />
              ))}
          </section>
        </Container>
      </div>
    </>
  );
}

export default Home;
