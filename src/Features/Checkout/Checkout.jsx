import "./styles.css";
import OrderModal from "./components/OrderModal";
import { Badge, Button, Container, Col, ListGroup, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Select from "react-select";
import axios from "axios";
import { clearCart } from "../../Common/Navbar/Cart/cartSlice";
import { Alert } from "react-bootstrap";
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
                <i class="bi bi-pencil-square edit-info-icon"></i>
              </div>

              <div className="d-flex flex-column mb-3">
                <span>
                  <small>Shipping address:</small>
                </span>
                <span className="fw-bold">{user.shippingAddress}</span>
              </div>
              <div className="d-flex flex-column mb-3">
                <span>
                  <small>Phone:</small>
                </span>
                <span className="fw-bold">{user.phone}</span>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="d-flex">
                <h4>Shipping information </h4>
                <i class="bi bi-pencil-square edit-info-icon"></i>
              </div>
              <div className="d-flex flex-column mb-3">
                <span>
                  <small>Address:</small>
                </span>
                <span className="fw-bold">{user.address}</span>
              </div>
              <div className="d-flex flex-column mb-3">
                <span>
                  <small>Phone:</small>
                </span>
                <span className="fw-bold">{user.phone}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="main-checkout">
          <Form method="POST" onSubmit={handleSubmit}>
            <h3>Payment</h3>
            <Form.Group as={Col} md="6" className="my-2">
              <Form.Label>
                <i className="bi bi-credit-card-fill me-2"></i> Select Payment Method
              </Form.Label>
              <Select
                name="paymentMethod"
                options={paymentOptions}
                styles={customStylesPM}
                onChange={(e) => setPaymentMet(e.value)}
                required
              />
            </Form.Group>
            <Form.Group as={Col} md="6" className="my-2">
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

            <div className="row mb-3">
              <h3>Order details</h3>
              <ListGroup as="ul" className="px-2">
                {cart.products.length > 0 ? (
                  cart.products.map((item) => {
                    const photo = item.style.photos.filter(
                      (photo) => photo.includes("Main") && photo.includes(`${item.container.name}`),
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

              <Col md="12" className="my-2 d-flex justify-content-end align-items-end">
                <p className="m-0 me-2 fs-3 fw-bold text-orange">Total: </p>
                <p className="m-0 fs-3 fw-bold">US$ {cart.totalAmount}</p>
              </Col>
            </div>
            <Row className="">
              <Button type="submit" variant="warning" className="rounded-pill w-25 mt-5">
                Confirm Order
              </Button>
              <span className="text-center">
                <small>Our Damn Tasty Beer is Just a Click Away!</small>
              </span>
              {alertToggle && (
                <Alert className="mt-5" variant="danger">
                  {alertText}
                </Alert>
              )}
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
