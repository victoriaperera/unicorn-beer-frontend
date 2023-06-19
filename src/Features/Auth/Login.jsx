import axios from "axios";
import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setToken } from "./userSlice";
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

  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: "POST",
        url: "http://localhost:3000/auth/token",
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
    <div className="container authContainer">
      <form onSubmit={handlerSubmit} method="post" className="w-100 p-3">
        <h1>Login</h1>
        <small>Ready to drink some M%$#F!*r Beer?</small>
        <div className="form my-3">
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            className="form-control mb-3"
            name="username"
            placeholder="Email"
          />

          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            className="form-control"
            placeholder="Password"
            name="password"
          />
        </div>
        <div className="d-grid my-3">
          <button
            id="logInButton"
            className="btn btn-login rounded-pill btn-fluid text-white mb-5 "
          >
            Login
          </button>
          {alertToggle && <Alert variant="danger">{alertText}</Alert>}
        </div>

        <small className="d-block text-center">
          Don't have an account? <Link to="/signup">Create an account</Link>
        </small>
      </form>
    </div>
  );
}

export default Login;
