import axios from "axios";
import { useState } from "react";
import { Button, Col, Container, Form, Row, InputGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setToken } from "./userSlice";

function SignUp() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [alertText, setAlertText] = useState("");
  const [alertToggle, setAlertToggle] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: "POST",
        url: `${import.meta.env.VITE_BACK_URL}/auth/signup`,
        data: {
          firstname,
          lastname,
          email,
          password,
          phone,
          address,
          shippingAddress,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });
      dispatch(setToken(response.data));
      navigate("/shop");
    } catch (err) {
      console.error(err.response);
      setAlertToggle(true);
      setAlertText(err.response.data.message);
    }
  };
  return (
    <div className="graphiteBackground">
      <Container className="authContainer py-5">
        <div className="d-flex flex-column justify-content-start align-items-start">
          <div className="d-flex align-items-center my-3">
            <img
              src="src/assets/icons/Unicorn-beer-icon-3.svg"
              alt="unicron icon"
              className="uniIcon"
            />
            <h1 className="m-0">Create an Account</h1>
          </div>

          <small>Our Damn Tasty Beer is Just a Click Away</small>
        </div>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" className="my-2">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                onChange={(e) => setFirstname(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" className="my-2">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                onChange={(e) => setLastname(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" className="my-2">
              <Form.Label>Email</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Please put a contact e-mail.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="4" className="my-2">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" className="my-2">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Phone"
                required
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" className="my-2">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Home Address"
                required
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" className="my-2">
              <Form.Label>Shipping Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Shipping Address"
                required
                onChange={(e) => setShippingAddress(e.target.value)}
              />
            </Form.Group>
            <Col className="d-flex justify-content-end col-12">
              <Button
                type="submit"
                variant="outline-light"
                size="lg"
                className="rounded-pill mt-5 col-12 col-sm-5 col-lg-3 mb-4"
              >
                Create an Account
              </Button>
            </Col>
            <Col className="col-12">
              <small className="d-block">
                Already have an account?{" "}
                <Link className="authLink" to="/login">
                  Log in
                </Link>
              </small>
              {alertToggle && <Alert variant="danger">{alertText}</Alert>}
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default SignUp;
