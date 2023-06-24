import "./styles.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setToken } from "./userSlice";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useRandomColor } from "../../hook/useRandomColor";

function Login() {
  const [user, setUser] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [alertText, setAlertText] = useState("");
  const [alertToggle, setAlertToggle] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const color = useRandomColor();

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
    <div className="graphite-background d-flex justify-content-center " style={{ height: "80vh" }}>
      <div className="container p-5 m-5">
        <div className=" login-card p-0">
          <div className="row p-0 m-0">
            <div
              className="col-8 d-none d-md-flex flex-wrap align-items-center justify-content-center p-5"
              style={{ backgroundColor: color }}
            >
              <img
                src="../src/assets/icons/Unicorn-beer-white-logo.svg"
                alt="Unicorn Logo"
                className="header-logo w-sm-50 w-75 h-75"
              />
            </div>
            <div className="col-md-4  d-flex align-items-center justify-content-center text-black py-5 px-3">
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
                <div>
                  <small className="d-block">
                    Don't you have an account?{" "}
                    <Link className="auth-link" to="/signup" style={{ color: color }}>
                      Create an Account
                    </Link>
                  </small>
                  {alertToggle && <Alert variant="danger">{alertText}</Alert>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
