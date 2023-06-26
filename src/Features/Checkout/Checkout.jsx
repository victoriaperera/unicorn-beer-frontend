import "./styles.css";
import CheckoutProducts from "./components/CheckoutProducts";
import OrderModal from "./components/OrderModal";
import { Alert, Badge, Button, Container, Col, ListGroup, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Select from "react-select";
import axios from "axios";
import { clearCart } from "../../Common/Navbar/Cart/cartSlice";
import { capitalizeFirstLetter } from "../../hook/capitalizeFirstLetter";

function Checkout() {
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [paymentMethod, setPaymentMet] = useState();
  const [deliveryDate, setDeliveryDate] = useState();

  const [alertText, setAlertText] = useState("");
  const [alertToggle, setAlertToggle] = useState(null);
  const [show, setShow] = useState(false);

  const paymentOptions = [
    { value: "Visa", label: "Visa", image: "src/assets/icons/icons8-tarjeta-visa-48.png" },
    {
      value: "Mastercard",
      label: "Master Card",
      image: "src/assets/icons/icons8-mastercard-48.png",
    },
    { value: "Paypal", label: "PayPal", image: "src/assets/icons/icons8-paypal-48.png" },
  ];

  const customStylesPM = {
    option: (provided, state) => ({
      ...provided,
      color: "black",
      background: `url(${state.data.image}) no-repeat center left`,
      paddingLeft: "50px",
    }),
  };

  const deliveryOptions = [];

  var today = new Date();

  for (var i = 0; i < 5; i++) {
    var date = new Date(today.getTime() + 1 * 24 * 60 * 60 * 1000);
    deliveryOptions.push({
      value: date,
      label: `${date.toLocaleDateString("en-US", { weekday: "long" })}, ${date.toLocaleDateString(
        "en-US",
        { month: "long" },
      )} ${date.getDate()}, ${date.getFullYear()}`,
    });

    today = date;
  }

  const customStylesDD = {
    option: (provided) => ({
      ...provided,
      color: "black",
    }),
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!paymentMethod || !deliveryDate) {
      setAlertText("You MUST fill in your payment method and delivery date, please");
      setAlertToggle(true);
    } else {
      try {
        if (cart.products.length > 0) {
          const response = await axios({
            method: "POST",
            url: `${import.meta.env.VITE_BACK_URL}/orders`,
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
            data: {
              products: cart.products,
              paymentMethod,
              totalAmount: cart.totalAmount,
              totalQuantity: cart.totalQuantity,
              status: "paid",
              shippingDate: new Date(
                deliveryDate.getFullYear(),
                deliveryDate.getMonth(),
                deliveryDate.getDate() - 1,
              ),
              deliveryDate,
            },
          });
          setAlertToggle(false);
          dispatch(clearCart());
          setShow(true);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="graphite-background d-flex justify-content-center align-items-center py-5">
      <OrderModal show={show} />
      <div className="container checkout-container">
        <div className="d-flex justify-content-center align-items-center mb-5">
          <img
            src="src/assets/icons/Unicorn-beer-icon-3.svg"
            alt="unicorn icon"
            className="checkout-logo-icon me-3"
          />
          <h2 className="m-0">Check Out</h2>
        </div>
        <div className="row d-flex justify-content-evenly">
          <main className="col-12 col-md-7 main-checkout">
            <h3>Ship to</h3>
            <div className="row mb-3">
              <div className="col">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  value={user.firstname}
                  readOnly
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  value={user.lastname}
                  readOnly
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                <small>Shipping address:</small>
              </label>
              <input
                type="text"
                className="form-control form-control-sm"
                value={user.shippingAddress}
                readOnly
              />
            </div>
            <div className="mb-4">
              <label htmlFor="" className="form-label">
                <small>Phone:</small>
              </label>
              <input
                type="text"
                className="form-control form-control-sm"
                value={user.phone}
                readOnly
              />
            </div>
            <h4>Billing information</h4>
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                <small>Address:</small>
              </label>
              <input
                type="text"
                className="form-control form-control-sm"
                value={user.address}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                <small>Phone:</small>
              </label>
              <input
                type="text"
                className="form-control form-control-sm"
                value={user.phone}
                readOnly
              />
            </div>
            <h3>Payment</h3>
          </main>
          <aside className="col-12 col-md-4 aside-checkout">
            <h3>Order details</h3>
            <form method="post" onSubmit={handleSubmit}>
              {cart.products.length > 0 &&
                cart.products.map((product) => (
                  <CheckoutProducts product={product} key={product.id} />
                ))}
            </form>
            <div className="d-flex justify-content-between pt-2 border-top">
              <span>Order Value</span>
              <span>US$ {cart.totalAmount}</span>
            </div>
            <div className="d-flex justify-content-between py-1">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="d-flex justify-content-between py-2 border-top">
              <span>Total</span>
              <span>US$ {cart.totalAmount}</span>
            </div>
            <button className="btn btn-dark rounded-pill w-100">Complete Purchase</button>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
