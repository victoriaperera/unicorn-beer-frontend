import axios from "axios";
import { useEffect, useState } from "react";
import { useRandomColor } from "../../hook/useRandomColor";
import { Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../../Common/components/Header";
import unicornLogo from "../../assets/icons/Unicorn-beer-white-logo.svg";

function RequestPassChange() {
  const pageTitle = "Reset password";
  const [email, setEmail] = useState();
  const [color, setColor] = useState("");
  const [alertText, setAlertText] = useState("");
  const [alertToggle, setAlertToggle] = useState(false);
  const [responseToggle, setResponseToggle] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios({
        method: "POST",
        url: `${import.meta.env.VITE_BACK_URL}/users/resetPassword`,
        data: { email: email },
      });

      setResponseToggle(true);
      alertText(response.data);
    } catch (err) {
      setAlertToggle(true);
      setAlertText(err.response.data.message);
    }
  };

  useEffect(() => {
    setColor(useRandomColor());
  }, []);

  return (
    <>
      <Header title={pageTitle} />
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
                <h1>Reset password</h1>
                <small>Our Damn Tasty Beer is Just a Click Away</small>
                <div className="form my-3">
                  <input
                    onInput={(e) => setEmail(e.target.value)}
                    type="text"
                    className="form-control form-control-auth mb-3"
                    id="email"
                    placeholder="Email"
                    name="email"
                  />
                </div>
                <div className="d-grid my-3">
                  <Button type="submit" variant="outline-dark" size="md" className="rounded-pill">
                    Reset your password
                  </Button>
                </div>
                <div>
                  <div>{alertToggle && <Alert variant="danger">{alertText}</Alert>}</div>
                  <div>{responseToggle && <Alert variant="info">{alertText}</Alert>}</div>
                </div>
                <small className="d-block">
                  Back to{" "}
                  <Link className="auth-link" to="/login" style={{ color: color }}>
                    LOGIN
                  </Link>
                </small>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RequestPassChange;
