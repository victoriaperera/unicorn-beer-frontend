import "./styles.css";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Badge, ListGroup, Form } from "react-bootstrap";
import { Alert } from "react-bootstrap";
import { setOrder } from "../../redux/orderSlice";
import Select from "react-select";
import CardForm from "./components/CardForm";
import OrderModal from "./components/OrderModal";
import OutOfScopeModal from "../../Common/components/OutOfScopeModal";

function Checkout() {
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const order = useSelector((state) => state.order);

  const dispatch = useDispatch();
  const [paymentMethod, setPaymentMet] = useState();
  const [deliveryDate, setDeliveryDate] = useState();
  const [showCardForm, setShowCardForm] = useState(false);
  const [show, setShow] = useState(false);
  const [showPaypalLink, setShowPaypalLink] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [alertText, setAlertText] = useState("");
  const [alertToggle, setAlertToggle] = useState(null);

  const paymentOptions = [
    {
      value: "Amex",
      label: "Amex",
      image: "src/assets/icons/icons8-amex-48.png",
    },
    {
      value: "Mastercard",
      label: "Mastercard",
      image: "src/assets/icons/icons8-mastercard-48.png",
    },
    { value: "Visa", label: "Visa", image: "src/assets/icons/icons8-tarjeta-visa-48.png" },
    { value: "Paypal", label: "PayPal", image: "src/assets/icons/icons8-paypal-48.png" },
  ];

  const handlePaypalAccount = () => {
    setShowModal(true);
  };

  const handlePaymentMethodChange = (selectedOption) => {
    setPaymentMet(selectedOption);
    if (selectedOption.value === "Paypal") {
      setShowPaypalLink(true);
      setShowCardForm(false);
    } else {
      setShowPaypalLink(false);
      setShowCardForm(true);
    }
  };

  const formatOptionLabel = (option) => {
    return (
      <div>
        <img src={option.image} alt={option.label} style={{ width: "33px", marginRight: "10px" }} />
        {option.label}
      </div>
    );
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
              paymentMethod: paymentMethod.label,
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

          dispatch(setOrder(response.data));
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
        <div className="d-flex justify-content-center align-items-center my-5">
          <img
            src="src/assets/icons/Unicorn-beer-icon-3.svg"
            alt="unicorn icon"
            className="checkout-logo-icon me-3"
          />
          <h2 className="m-0">Check Out</h2>
        </div>
        <div className="main-checkout">
          <h3 className="pb-2">Ship to</h3>
          <div className="mb-4">
            <span className="fw-bold">
              {user.firstname} {user.lastname}
            </span>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="d-flex">
                <h4>Shipping information </h4>
                <Link to={`/account/${user.id}`}>
                  <i className="bi bi-pencil-square edit-info-icon"></i>
                </Link>
              </div>
              <div className="d-flex flex-column mb-3 read-only">
                <span>
                  <small>Shipping address:</small>
                </span>
                <span className="fw-bold">{user.shippingAddress}</span>
              </div>
              <div className="d-flex flex-column mb-3 read-only">
                <span>
                  <small>Phone:</small>
                </span>
                <span className="fw-bold">{user.phone}</span>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="d-flex">
                <h4>Billing Information </h4>
                <Link to={`/account/${user.id}`}>
                  <i className="bi bi-pencil-square edit-info-icon"></i>
                </Link>
              </div>
              <div className="d-flex flex-column mb-3 read-only">
                <span>
                  <small>Address:</small>
                </span>
                <span className="fw-bold">{user.address}</span>
              </div>
              <div className="d-flex flex-column mb-3 read-only">
                <span>
                  <small>Phone:</small>
                </span>
                <span className="fw-bold">{user.phone}</span>
              </div>
            </div>
          </div>
        </div>
        <Form method="POST" onSubmit={handleSubmit}>
          <div className="main-checkout">
            <div className="row d-flex justify-content-between">
              <h3>Payment & Delivery</h3>
              <div className="col-12 col-md-6">
                <Form.Group className="my-2">
                  <Form.Label>
                    <i className="bi bi-credit-card-fill me-2"></i> Select Payment Method
                  </Form.Label>
                  <Select
                    value={paymentMethod}
                    name="paymentMethod"
                    options={paymentOptions}
                    onChange={handlePaymentMethodChange}
                    formatOptionLabel={formatOptionLabel}
                    required
                  />
                </Form.Group>
                {!showPaypalLink && <CardForm user={user} />}
                {showPaypalLink && (
                  <button
                    type="button"
                    className="btn btn-sm rounded-pill btn-outline-primary mt-3"
                    onClick={handlePaypalAccount}
                  >
                    Go to my PAYPAL account
                  </button>
                )}
              </div>
              <div className="col-12 col-md-6">
                <Form.Group className="my-2">
                  <Form.Label>
                    <i className="bi bi-truck fs-6 text-black me-2"></i> Select Delivery Date
                  </Form.Label>
                  <Select
                    name="deliveryDate"
                    options={deliveryOptions}
                    onChange={(e) => setDeliveryDate(e.value)}
                    styles={customStylesDD}
                  />
                </Form.Group>
              </div>
            </div>
            {showModal && <OutOfScopeModal onClose={() => setShowModal(false)} />}
          </div>
          <div className="main-checkout aside-checkout">
            <div className="row">
              <div className="col-12 col-md-6 mb-3">
                <h3>Order details</h3>
                <ListGroup as="ul" className="">
                  {cart.products.length > 0 ? (
                    cart.products.map((item) => {
                      const photo = item.style.photos.filter(
                        (photo) =>
                          photo.includes("Main") && photo.includes(`${item.container.name}`),
                      );
                      return (
                        <ListGroup.Item
                          key={item.id}
                          as="li"
                          className="d-flex flex-row align-items-center"
                        >
                          <div className="w-50 me-2 text-center">
                            <img
                              src={`${import.meta.env.VITE_BACK_URL}/img/${photo}`}
                              alt={`${item.style.name} ${item.container.name}`}
                              className="checkout-img"
                            />
                          </div>
                          <div className="w-50 ps-2">
                            <span className="m-0 fw-bold">{item.name}</span>
                            <div className="d-flex flex-column checkout-product-details">
                              <span>
                                <span className="fw-bold text-orange">{item.quantity}</span> x US${" "}
                                {item.price}
                              </span>
                            </div>
                          </div>
                        </ListGroup.Item>
                      );
                    })
                  ) : (
                    <ListGroup.Item
                      as="li"
                      className="d-flex justify-content-between align-items-start"
                    >
                      <div className="ms-2 me-auto">
                        <p className="m-0 text-body-secondary">Your cart it's emtpy :(</p>
                      </div>
                      <Badge bg="danger" pill>
                        0
                      </Badge>
                    </ListGroup.Item>
                  )}
                </ListGroup>
              </div>
              <div className="col-12 col-md-6 d-flex flex-column mb-3">
                <h3>Payment summary</h3>
                <div className="d-flex flex-column px-3 pt-4">
                  <div className="d-flex justify-content-between mb-3 text-orange">
                    <span>Total items in cart:</span>
                    <span>{cart.totalQuantity}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-1">
                    <span>Sub-total:</span>
                    <span>US$ {cart.totalAmount}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-1">
                    <span>Shipping:</span>
                    <span>Free!</span>
                  </div>
                  <div className="d-flex justify-content-between fw-bold my-1">
                    <span className="">Payment Total:</span>
                    <span>US$ {cart.totalAmount}</span>
                  </div>
                </div>
                <button type="submit" className="btn btn-cofirm-order rounded-pill w-75 my-3">
                  <i className="bi bi-lock-fill me-2"></i>
                  Confirm Order
                </button>
                <span className="text-center">
                  <small>Our damn tasty beer is just a click away!</small>
                </span>
                {alertToggle && (
                  <Alert className="mt-5" variant="danger">
                    {alertText}
                  </Alert>
                )}
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Checkout;
