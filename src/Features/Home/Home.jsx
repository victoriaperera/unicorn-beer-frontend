import "./styles.css";
import HomeHeader from "./HomeHeader";
import axios from "axios";
import FeaturedProducts from "./Components/FeaturedProducts";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductList } from "../../redux/productSlice";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import BackToTopBtn from "../../Common/components/BackToTopBtn";
import Header from "../../Common/components/Header";
import Loader from "../../Common/components/Loader";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const pageTitle = "Our amazing beer";
  const products = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const res = await axios.get(`${import.meta.env.VITE_BACK_URL}/products`);

      const aux = res.data.filter((p) => p.container.name === "bottle");
      dispatch(setProductList(aux));

      setLoading(false);
    };
    getProducts();
  }, []);

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <>
      <div>
        <Header title={pageTitle} />
        <HomeHeader />
        <Container fluid className="text-center">
          <section id="our-beer-section">
            <Row className="white-row align-items-center justify-content-center">
              <Col>
                <h2 className="m-0 beers-heading">Unlock the magic in every sip</h2>
              </Col>
            </Row>
            {products.length > 0 &&
              products.map((product, i) => (
                <FeaturedProducts product={product} afterColor={products[i - 1]} key={product.id} />
              ))}
          </section>
          <BackToTopBtn />
        </Container>
      </div>
    </>
  );
}

export default Home;
