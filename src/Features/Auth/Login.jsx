import "./styles.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "./userSlice";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useRandomColor } from "../../hook/useRandomColor";
import PageTitle from "../../Common/components/PageTitle";
import { fromCheckOut } from "../Shop/shopSlice";
import unicornLogo from "../../assets/icons/Unicorn-beer-white-logo.svg";

function Login() {
  const pageTitle = "Login";
  const user = useSelector((state) => state.user);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [alertText, setAlertText] = useState("");
  const [alertToggle, setAlertToggle] = useState(false);
  const [color, setColor] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const checkOut = useSelector((state) => state.shop.fromCheckOut);

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
    } catch (err) {
      console.error(err.response);
      setAlertToggle(true);
      setAlertText(err.response.data.message);
    }
  };

  useEffect(() => {
    setColor(useRandomColor());
    if (user) {
      checkOut ? navigate("/checkout") : navigate("/shop");
      dispatch(fromCheckOut(false));
    }
  }, [user]);

  return (
    <>
      <PageTitle title={pageTitle} />
      <div className="parent_container" style={{ height: "90vh" }}>
        <div className="d-flex justify-content-center align-items-center">
          <div id="login-row" className="row mx-0">
            <div
              className="col-md-7 d-none d-md-flex flex-wrap align-items-center justify-content-center p-4 rounded-start "
              style={{ backgroundColor: color }}
            >
              <img src={unicornLogo} alt="Unicorn Logo" className="header-logo w-sm-50 w-75 h-75" />
            </div>
            <div className="d-flex col-12 col-md-5 text-black py-5 px-5 bg-white align-items-center justify-content-center rounded-end form-border">
              <form onSubmit={handleSubmit} method="post">
                <h1>Login</h1>
                <small>Our Damn Tasty Beer is Just a Click Away</small>
                <div className="form my-3">
                  <input
                    onInput={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="text"
                    className="form-control form-control-auth mb-3"
                    id="userName"
                    name="username"
                    placeholder="Username or email"
                  />

                  <input
                    onInput={(e) => {
                      setPassword(e.target.value);
                    }}
                    type="password"
                    className="form-control form-control-auth mb-3"
                    id="floatingPassword"
                    placeholder="Password"
                    name="password"
                  />
                </div>
                <div className="d-grid my-3">
                  <Button type="submit" variant="outline-dark" size="md" className="rounded-pill">
                    Log in
                  </Button>
                </div>
                <div>{alertToggle && <Alert variant="danger">{alertText}</Alert>}</div>
                <div>
                  <small className="d-block">
                    Don't you have an account?{" "}
                    <Link className="auth-link" to="/signup" style={{ color: color }}>
                      Create an Account
                    </Link>
                  </small>
                  <small className="d-block">
                    Forgot your password?{" "}
                    <Link className="auth-link" to="/reset-password" style={{ color: color }}>
                      Reset password
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

export default Login;
