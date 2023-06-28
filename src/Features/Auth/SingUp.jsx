import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setToken } from "./userSlice";
import Header from "../../Common/components/Header";
import { useRandomColor } from "../../hook/useRandomColor";

function SignUp() {
  const pageTitle = "Sign Up";
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [alertText, setAlertText] = useState("");
  const [alertToggle, setAlertToggle] = useState(false);

  const [color, setColor] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setColor(useRandomColor());
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
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
    } else {
      setAlertToggle(true);
      setAlertText("Passwords doesn't match, try again!");
    }
  };
  return (
    <>
      <Header title={pageTitle} />
      <div className="parent_container" style={{ height: "100vh" }}>
        <div className="d-flex justify-content-center align-items-center">
          <div id="signup-row" className="row mx-0">
            <div
              className="col-md-7 d-none d-md-flex align-items-center justify-content-center p-4 rounded-start"
              style={{ backgroundColor: color }}
            >
              <img
                src="../src/assets/icons/Unicorn-beer-white-logo.svg"
                alt="Unicorn Logo"
                className="header-logo w-sm-75 w-75 h-75"
              />
            </div>
            <div className="col-12 col-md-5 d-flex align-items-center justify-content-center text-black py-4 px-4 bg-white rounded-end form-border">
              <form onSubmit={handleSubmit} method="post">
                <h1>Sign Up</h1>
                <small>Our Damn Tasty Beer is Just a Click Away</small>
                <div className="form my-3">
                  <input
                    onInput={(e) => {
                      setFirstname(e.target.value);
                    }}
                    type="text"
                    className="form-control form-control-auth mb-3"
                    id="firstname"
                    name="firstname"
                    placeholder="Firstname"
                    required
                  ></input>
                  <input
                    onInput={(e) => {
                      setLastname(e.target.value);
                    }}
                    type="text"
                    className="form-control form-control-auth mb-3"
                    id="lastname"
                    name="lastname"
                    placeholder="Lastname"
                    required
                  ></input>
                  <input
                    onInput={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="text"
                    className="form-control form-control-auth mb-3"
                    id="userName"
                    name="username"
                    placeholder="Email"
                    required
                  ></input>
                  <input
                    onInput={(e) => {
                      setPhone(e.target.value);
                    }}
                    type="text"
                    className="form-control form-control-auth mb-3"
                    id="phone"
                    name="phone"
                    placeholder="Phone"
                    required
                  ></input>
                  <input
                    onInput={(e) => {
                      setAddress(e.target.value);
                    }}
                    type="text"
                    className="form-control form-control-auth mb-3"
                    id="address"
                    name="address"
                    placeholder="Address"
                    required
                  ></input>
                  <input
                    onInput={(e) => {
                      setShippingAddress(e.target.value);
                    }}
                    type="text"
                    className="form-control form-control-auth mb-3"
                    id="shipping address"
                    name="shipping address"
                    placeholder="Shipping address"
                    required
                  ></input>
                  <input
                    onInput={(e) => {
                      setPassword(e.target.value);
                    }}
                    type="password"
                    className="form-control form-control-auth mb-3"
                    id="floatingPassword"
                    placeholder="Password"
                    name="password"
                    required
                  ></input>
                  <input
                    onInput={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                    type="password"
                    className="form-control form-control-auth mb-3"
                    id="floatingConfirmPassword"
                    placeholder="Confirm password"
                    name="confirmPassword"
                    required
                  ></input>
                </div>
                <div className="d-grid my-3">
                  <Button type="submit" variant="outline-dark" size="md" className="rounded-pill">
                    Log in
                  </Button>
                </div>
                <div>{alertToggle && <Alert variant="danger">{alertText}</Alert>}</div>
                <div>
                  <small className="d-block">
                    Back to{" "}
                    <Link className="auth-link" to="/login" style={{ color: color }}>
                      LOGIN
                    </Link>
                  </small>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
