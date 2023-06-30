import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { setToken } from "./userSlice";
import { useRandomColor } from "../../hook/useRandomColor";
import PageTitle from "../../Common/components/PageTitle";
import { Alert, Button } from "react-bootstrap";
import unicornLogo from "../../assets/icons/Unicorn-beer-white-logo.svg";

function ForgotPassword() {
  const pageTitle = "Reset password";
  const user = useSelector((state) => state.user);
  const [confirmPassword, setConfirmPassword] = useState();
  const [password, setPassword] = useState();
  const [alertText, setAlertText] = useState("");
  const [alertToggle, setAlertToggle] = useState(false);
  const [color, setColor] = useState("");
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      try {
        const response = await axios({
          method: "PATCH",
          url: `${import.meta.env.VITE_BACK_URL}/users/resetPassword/${params.id}`,
          data: { password: password },
        });

        dispatch(setToken(response.data));
        navigate("/shop");
      } catch (err) {
        console.error(err.response);
        setAlertToggle(true);
        setAlertText(err.response.data.message);
      }
    }
  };

  useEffect(() => {
    setColor(useRandomColor());
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
                      setPassword(e.target.value);
                    }}
                    type="password"
                    className="form-control form-control-auth mb-3"
                    id="floatingPassword"
                    placeholder="Password"
                    name="password"
                  />
                  <input
                    onInput={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                    type="password"
                    className="form-control form-control-auth mb-3"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                  />
                </div>
                <div className="d-grid my-3">
                  <Button type="submit" variant="outline-dark" size="md" className="rounded-pill">
                    Change Password
                  </Button>
                </div>
                <div>
                  <div>{alertToggle && <Alert variant="danger">{alertText}</Alert>}</div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
