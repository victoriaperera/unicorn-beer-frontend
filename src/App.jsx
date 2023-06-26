import "./App.css";
import Verify from "./Common/Navbar/Verify/Verify";
import UnicornNavbar from "./Common/Navbar/UnicornNavbar";
import Footer from "./Common/Footer/Footer";
import Home from "./Features/Home/Home";
import About from "./Features/About/About";
import Cart from "./Common/Navbar/Cart/Cart";
import Shop from "./Features/Shop/Shop";
import { Routes, Route, useLocation } from "react-router-dom";

import Login from "./Features/Auth/Login";
import SignUp from "./Features/Auth/Singup";
import UserAccount from "./Features/Auth/UserAccount";
import Product from "./Features/Product/Product";
import Checkout from "./Features/Checkout/Checkout";
import Contact from "./Features/Contact/Contact";
import AdminLogin from "./Features/Auth/adminLogin";
import Admin from "./Features/Dashboard/Admin";
import Err404 from "./Features/err404/err404";

function App() {
  const { pathname: currentPage } = useLocation();
  const pagesWONavbars = ["/admin"];
  const RenderVerify = !currentPage.includes("/admin");

  return (
    <>
      {RenderVerify && <Verify />}
      {!pagesWONavbars.includes(currentPage) && <UnicornNavbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<UserAccount />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<Err404 />} />
      </Routes>
      {!pagesWONavbars.includes(currentPage) && <Footer />}
    </>
  );
}

export default App;
