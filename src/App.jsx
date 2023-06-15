import "./App.css";
import Verify from "./Common/Navbar/Verify/Verify";
import UnicornNavbar from "./Common/Navbar/UnicornNavbar";
import Home from "./Features/Home/Home";
import About from "./Features/About/About";
import Cart from "./Common/Navbar/Cart/Cart";
import Shop from "./Features/Shop/Shop";
import Contact from "./Features/Contact/Contact"
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Features/Auth/Login";

function App() {
  return (
    <>
      <UnicornNavbar />
      <Verify />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
