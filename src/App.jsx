import "./App.css";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import Verify from "./Common/Navbar/Verify/Verify";
import UnicornNavbar from "./Common/Navbar/UnicornNavbar";
import Footer from "./Common/Footer/Footer";
import Home from "./Features/Home/Home";
import About from "./Features/About/About";

import Shop from "./Features/Shop/Shop";
import Login from "./Features/Auth/Login";
import SignUp from "./Features/Auth/Singup";
import UserAccount from "./Features/Auth/UserAccount";
import Product from "./Features/Product/Product";
import Checkout from "./Features/Checkout/Checkout";
import Contact from "./Features/Contact/Contact";
import AdminLogin from "./Features/Auth/adminLogin";
import Admin from "./Features/Dashboard/Admin";
import Err404 from "./Features/err404/err404";
import ForgotPassword from "./Features/Auth/ForgotPassword";
import RequestPassChange from "./Features/Auth/RequestPassChange";
import { useSelector } from "react-redux";

function App() {
  const { pathname: currentPage } = useLocation();
  const pagesWONavbars = ["/admin"];
  const RenderVerify = !currentPage.includes("/admin");
  const admin = useSelector((state) => state.admin.token);
  const user = useSelector((state) => state.user);

  return (
    <>
      {RenderVerify && <Verify />}
      {!pagesWONavbars.includes(currentPage) && <UnicornNavbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/account/:slug"
          element={user && user.token ? <UserAccount /> : <Navigate to="/login" replace={true} />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={admin && admin.token ? <Admin /> : <Navigate to="/admin/login" replace={true} />}
        />
        <Route path="*" element={<Err404 />} />
        <Route path="/reset-password" element={<RequestPassChange />} />
        <Route path="/forgotpassword/:id" element={<ForgotPassword></ForgotPassword>}></Route>
      </Routes>
      {!pagesWONavbars.includes(currentPage) && <Footer />}
    </>
  );
}

export default App;
