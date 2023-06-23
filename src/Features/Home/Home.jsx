import "./styles.css";
import HomeHeader from "./HomeHeader";
import axios from "axios";
import FeaturedProducts from "./Components/FeaturedProducts";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductList } from "../../redux/productSlice";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";
import BackToTopBtn from "../../Common/components/BackToTopBtn";
import Header from "../../Common/components/Header";
gsap.registerPlugin(ScrollTrigger);

function Home() {
  const pageTitle = "Our amazing beer";
  const products = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(`${import.meta.env.VITE_BACK_URL}/products`);

      const aux = res.data.filter((p) => p.container.name === "bottle");
      dispatch(setProductList(aux));
      const myText = new SplitType(".beers-heading");
      gsap.to(".char", {
        y: 0,
        stagger: 0.05,
        delay: 0.2,
        duration: 0.1,
        scrollTrigger: {
          trigger: ".char",
        },
      });
    };
    getProducts();
  }, []);

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
