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
    var date = new Date(today.getTime() + (1 * 24 * 60 * 60 * 1000));
    deliveryOptions.push({
      value : date, 
      label: `${date.toLocaleDateString("en-US", {weekday: "long"})}, ${date.toLocaleDateString("en-US", {month: "long"})} ${date.getDate()}, ${date.getFullYear()}`
            
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
            status: "paid",
            shippingDate: new Date(deliveryDate.getFullYear(), deliveryDate.getMonth(), deliveryDate.getDate() - 1),
            deliveryDate
          },
        });
        setAlertToggle(false);
        dispatch(clearCart());
        setShow(true);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="graphiteBackground py-5">
      <OrderModal show={show} />
      <Container className="container checkOutContainer py-5">
        <div className="d-flex flex-column justify-content-start align-items-start">
          <div className="d-flex align-items-center my-3">
            <img
              src="src/assets/icons/Unicorn-beer-icon-3.svg"
              alt="unicron icon"
              className="uniIcon"
            />
            <h1 className="m-0">Check Out</h1>
          </div>
          <small>Our Damn Tasty Beer is Just a Click Away</small>
        </div>
        <Row className="mt-5 mb-3">
               <div className="d-flex align-items-center">
                    <p className="me-2 text-orange">Client:</p>
                    <p>{user.firstname} {user.lastname}</p>
               </div>
               <div className="d-flex align-items-center">
                    <p className="me-2 text-orange">Address:</p>
                    <p>{user.shippingAddress}</p>
               </div>
        </Row>
        <Form method="POST" onSubmit={handleSubmit}>
          <Row className="mb-3">
            <p className="text-orange">Cart</p>
            <ListGroup as="ul" className="px-2">
              {cart.products.length > 0 ? (
                cart.products.map((item) => {
                  const photo = item.product.style.photos.filter(
                    (photo) =>
                      photo.includes("Main") && photo.includes(`${item.product.container.name}`),
                  );
                  return (
                    <ListGroup.Item
                      key={item.product.id}
                      as="li"
                      className="d-flex align-items-center justify-content-between"
                    >
                      <div className="col-1 text-center">
                        <img
                          src={`${import.meta.env.VITE_BACK_URL}/img/${photo}`}
                          alt={`${item.product.style.name} ${item.product.container.name}`}
                          className={item.product.container.name === "can" ? "w-20" : "w-35"}
                        />
                      </div>
                      <div className="col-6 me-auto d-flex flex-column justify-content-center">
                        <p className="m-0 fw-bold">{item.product.style.name}</p>
                        <p className="m-0">
                          {item.product.container.name} ${item.product.price}
                        </p>
                      </div>
                      <Badge bg="primary" pill>
                        {item.productQuantity}
                      </Badge>
                    </ListGroup.Item>
                  );
                })
              ) : (
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <p className="m-0 fw-bold">Your cart it's emtpy :(</p>
                  </div>
                  <Badge bg="danger" pill>
                    0
                  </Badge>
                </ListGroup.Item>
              )}
            </ListGroup>
            <Form.Group as={Col} md="6" className="my-2">
              <Form.Label>Select Payment Method</Form.Label>
                <Select
                  name="paymentMethod"
                  options={paymentOptions}
                  styles={customStylesPM}
                  onChange={(e) => setPaymentMet(e.value)}
                  required
                />
            </Form.Group>
            <Form.Group as={Col} md="6" className="my-2">
              <Form.Label>Select Delivery Date</Form.Label>                    
                <Select
                 name="deliveryDate"
                 options={deliveryOptions}
                 onChange={(e)=> setDeliveryDate(e.value)}
                 styles={customStylesDD}
                />  
            </Form.Group>
            <Col  md="12" className="my-2 d-flex justify-content-end align-items-end">
                        <p className="m-0 me-2 fs-3 fw-bold text-orange">TOTAL: </p>
                        <p className="m-0 fs-3 fw-bold">$ {cart.totalAmount}</p>
            </Col>
          </Row>
          <Row className="justify-content-end">
            <Button
              type="submit"
              variant="outline-light"
              size="lg"
              className="rounded-pill w-50 me-3 mt-5"
            >
              Proceed to Checkout
            </Button>
            {alertToggle && (
              <Alert className="mt-5" variant="danger">
                {alertText}
              </Alert>
            )}
          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default Checkout;
