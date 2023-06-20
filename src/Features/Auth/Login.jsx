import axios from "axios";
import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setToken } from "./userSlice";
import { Button, Col, Container, Form, Row, InputGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import "./styles.css";

function Login() {
  const [user, setUser] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [alertText, setAlertText] = useState("");
  const [alertToggle, setAlertToggle] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: "POST",
        url: `${import.meta.env.VITE_BACK_URL}/auth/token`,
        data: { email: email, password: password },
        headers: {
          "Content-Type": "application/json",
        },
      });
      dispatch(setToken(response.data));
      setUser(response.data);
    } catch (err) {
      console.error(err.response);
      setAlertToggle(true);
      setAlertText(err.response.data.message);
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/shop");
    }
  }, [user]);

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
            <h1 className="m-0">Login</h1>
          </div>
          <small>Our Damn Tasty Beer is Just a Click Away</small>
        </div>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3 flex-column">
            <Form.Group as={Col} className="my-2">
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
            <Form.Group as={Col} className="my-2">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row className="justify-content-end">
            <Button
              type="submit"
              variant="outline-light"
              size="lg"
              className="rounded-pill w-25 me-3 mt-5"
            >
              Log in
            </Button>
            <small className="d-block">
              Don't you have an account?{" "}
              <Link className="authLink" to="/signup">
                Create an Account
              </Link>
            </small>
            {alertToggle && <Alert variant="danger">{alertText}</Alert>}
          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default Login;
