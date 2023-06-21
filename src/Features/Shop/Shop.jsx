import "./styles.css";
import { Container } from "react-bootstrap";
import ProductList from "./components/ProductList";
import ShopHeader from "./components/ShopHeader";
import BackToTopBtn from "../../Common/components/BackToTopBtn";

function Shop() {
  return (
    <>
      <ShopHeader />
      <Container fluid>
        <ProductList />
        <BackToTopBtn />
      </Container>
    </>
  );
}

export default Shop;
