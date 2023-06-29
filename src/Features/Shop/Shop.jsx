import "./styles.css";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
        <ToastContainer
          position="bottom-left"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />
      </Container>
    </>
  );
}

export default Shop;
