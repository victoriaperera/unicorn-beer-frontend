import "./styles.css";
import "react-toastify/dist/ReactToastify.css";
import { Container } from "react-bootstrap";
import ProductList from "./components/ProductList";
import ShopHeader from "./components/ShopHeader";
import BackToTopBtn from "../../Common/components/BackToTopBtn";
import PageTitle from "../../Common/components/PageTitle";

function Shop() {
  const pageTitle = "Our Shop";

  return (
    <>
      <PageTitle title={pageTitle} />
      <ShopHeader />
      <Container fluid>
        <ProductList />
        <BackToTopBtn />
      </Container>
    </>
  );
}

export default Shop;
