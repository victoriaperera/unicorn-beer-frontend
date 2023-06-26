import "./styles.css";
import { Alert, Badge, Button, Container, Col, ListGroup, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Select from "react-select";
import axios from "axios";
import { clearCart } from "../../../Common/Navbar/Cart/cartSlice";
import { capitalizeFirstLetter } from "../../../hook/capitalizeFirstLetter";

function CheckoutProducts() {
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
    <div className="d-flex flex-column">
      {cart.products.length > 0 ? (
        cart.products.map((item) => (
          <div key={item.id} className="d-flex flex-row align-items-center mb-3">
            <div className="me-2 text-center">
              <img
                src={`${import.meta.env.VITE_BACK_URL}/img/${item.photo}`}
                alt={`${item.style.name} ${item.container.name}`}
                className={item.container.name === "can" ? "w-20" : "w-35"}
              />
            </div>
            <div className="w-75 ps-2">
              <div className="d-flex flex-column checkout-order-details">
                <span>{item.productName}</span>
                <span>Quantity: {item.quantity}</span>
                {item.quantity > 1 && (
                  <span>Subtotal: US$ {(item.price * item.quantity).toFixed(2)}</span>
                )}
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>No products in the cart</div>
      )}
    </div>
  );
}

export default CheckoutProducts;
