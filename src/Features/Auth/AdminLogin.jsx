import "./styles.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAdminToken } from "../Dashboard/adminSlice";
import { useRandomColor } from "../../hook/useRandomColor";
import Header from "../../Common/components/Header";

function AdminLogin() {
  const pageTitle = "Login / Admin";
  const [admin, setAdmin] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [alertText, setAlertText] = useState("");
  const [color, setColor] = useState("");
  const [alertToggle, setAlertToggle] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: "POST",
        url: `${import.meta.env.VITE_BACK_URL}/admin/token`,
        data: { email: email, password: password },
        headers: {
          "Content-Type": "application/json",
        },
      });
      dispatch(setAdminToken(response.data));
      setAdmin(response.data);
    } catch (err) {
      console.error(err.response);
      setAlertToggle(true);
      setAlertText(err.response.data.message);
    }
  };

  useEffect(() => {
    setColor(useRandomColor());
    if (admin) {
      navigate("/admin");
    }
  }, [admin]);

  return (
    <>
      <Header title={pageTitle} />
      <div className="parent_container" style={{ height: "90vh" }}>
        <div className="d-flex justify-content-center align-items-center">
          <div id="admin-row" className="row mx-4">
            <div
              className="col-md-7 d-none d-md-flex flex-wrap align-items-center justify-content-center p-4 rounded-start "
              style={{ backgroundColor: color }}
            >
              <img
                src="../src/assets/icons/Unicorn-beer-white-logo.svg"
                alt="Unicorn Logo"
                className="header-logo w-sm-50 w-75 h-75"
              />
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
                    className="form-control form-control-auth"
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
