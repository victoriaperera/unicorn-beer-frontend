import "./styles.css";
import { Container } from "react-bootstrap";
import ProductList from "./components/ProductList";
import ShopHeader from "./components/ShopHeader";
import BackToTopBtn from "../../Common/components/BackToTopBtn";
import Header from "../../Common/components/Header";

function Shop() {
  const pageTitle = "Our Shop";
  return (
    <>
      <Header title={pageTitle} />
      <ShopHeader />
      <Container fluid>
        <ProductList />
        <BackToTopBtn />
      </Container>
    </>
  );
}

export default Shop;
