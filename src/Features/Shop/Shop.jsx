import "./styles.css";
import { Container } from "react-bootstrap";
import ProductList from "./components/ProductList";
import ShopHeader from "./components/ShopHeader";
import BackToTopBtn from "../../Common/components/BackToTopBtn";
import Header from "../../Common/components/Header";
import { useRef } from "react";

function Shop() {
  const pageTitle = "Our Shop";
  const productRef = useRef(null);

  return (
    <>
      <Header title={pageTitle} />
      <ShopHeader productRef={productRef} />
      <Container fluid>
        <ProductList ref={productRef} />
        <BackToTopBtn />
      </Container>
    </>
  );
}

export default Shop;
