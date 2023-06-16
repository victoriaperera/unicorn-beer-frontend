import "./App.css";
import Verify from "./Common/Navbar/Verify/Verify";
import UnicornNavbar from "./Common/Navbar/UnicornNavbar";
import Footer from "./Common/Footer/Footer";
import Home from "./Features/Home/Home";
import About from "./Features/About/About";
import Cart from "./Common/Navbar/Cart/Cart";
import Shop from "./Features/Shop/Shop";
import Contact from "./Features/Contact/Contact";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./Features/Auth/Login";
import Product from "./Features/Product/Product";
import Dashboard from "./Features/Dashboard/Dashboard";
import { useDispatch } from "react-redux";
import { toggleNavs } from "./Features/Dashboard/adminSlice";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname.includes("board")) dispatch(toggleNavs());
  }, [location.pathname]);

  return (
    <>
      <Verify />
      <UnicornNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/board" element={<Dashboard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
