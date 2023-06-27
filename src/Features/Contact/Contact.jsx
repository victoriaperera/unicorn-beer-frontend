import "./styles.css";
import OutOfScopeModal from "../../Common/components/OutOfScopeModal";
import { Button, Form, InputGroup, Alert } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../../Common/components/Header";
import { useRandomColor } from "../../hook/useRandomColor";
import axios from "axios";

function Contact() {
  const pageTitle = "Contact Us";
  const user = useSelector((state) => state.user);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [alertText, setAlertText] = useState("");
  const [alertToggle, setAlertToggle] = useState(null);
  const [color, setColor] = useState("");

  useEffect(() => {
    setColor(useRandomColor());
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!firstname || !lastname || !email || !message) {
      setAlertToggle(true);
      setAlertText("Fill in all the fields, please");
    } else {
      try {
        const response = await axios({
          method: "POST",
          url: `${import.meta.env.VITE_BACK_URL}/auth/contact `, // TODO: probablemente como una opción de mejora
          data: {
            firstname,
            lastname,
            email,
            message,
          },
        });
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <>
      <Header title={pageTitle} />
      <OutOfScopeModal />
      <div className="parent_container">
        <div className="d-flex justify-content-center align-items-center container-contact">
          <div className="row d-flex justify-content-center mx-4">
            <div
              className="col-md-7 d-none d-md-flex flex-wrap align-items-center justify-content-center p-4 rounded-start"
              style={{ backgroundColor: color }}
            >
              <img
                src="../src/assets/icons/Unicorn-beer-white-logo.svg"
                alt="Unicorn Logo"
                className="header-logo w-sm-75 w-75 h-75"
              />
            </div>
            <div className="col-10 col-md-5 d-flex text-black py-4 px-4 bg-white rounded-end form-border">
              <Form method="POST" onSubmit={handleSubmit}>
                <h1>Leave us a message</h1>
                <div className="row my-2">
                  <Form.Group className="col-6 ">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                      value={user ? `${user.firstname}` : ""}
                      required
                      type="text"
                      placeholder="First name"
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="col-6">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                      value={user ? `${user.lastname}` : ""}
                      required
                      type="text"
                      placeholder="Last name"
                      onChange={(e) => setLastname(e.target.value)}
                    />
                  </Form.Group>
                </div>

                <div className="row my-2">
                  <Form.Group className="col-12">
                    <Form.Label>Email</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control
                        value={user ? `${user.email}` : ""}
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
                </div>

                <div className="row mt-3">
                  <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      required
                      as="textarea"
                      style={{ height: "100px" }}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </Form.Group>
                </div>
                <div className="row justify-content-end m-0">
                  <Button
                    type="submit"
                    variant="outline-dark"
                    size="md"
                    className="rounded-pill mt-3"
                  >
                    Send
                  </Button>
                </div>
                <div>
                  <small className="d-block mt-3">
                    Back to{" "}
                    <Link className="auth-link" to="/" style={{ color: color }}>
                      HOME
                    </Link>
                  </small>
                  {alertToggle && <Alert variant="danger">{alertText}</Alert>}
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
