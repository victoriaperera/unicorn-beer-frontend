import "./styles.css";
import { Container } from "react-bootstrap";
import ProductList from "./components/ProductList";
import ShopHeader from "./components/ShopHeader";

function Shop() {
  return (
    <>
      <ShopHeader />
      <Container fluid>
        <ProductList />
      </Container>
    </>
  );
}

export default Shop;
