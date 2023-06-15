import { useState } from "react";
import "./App.css";
import Verify from "./Common/Navbar/Verify/Verify";
import UnicornNavbar from "./Common/Navbar/UnicornNavbar";
import Home from "./Features/Home/Home";
import About from "./Features/About/About";
import Cart from "./Common/Navbar/Cart/Cart";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <UnicornNavbar />
      <Verify/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
