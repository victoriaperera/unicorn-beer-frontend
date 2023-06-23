import "./styles.css";
import OutOfScopeModal from "../../Common/components/OutOfScopeModal";
import { Button, Col, Container, Form, Row, InputGroup } from "react-bootstrap";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Alert } from "react-bootstrap";
import axios from "axios";

function Contact() {
  const pageTitle = "Contact Us";
  const user = useSelector((state) => state.user);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [alertText, setAlertText] = useState("");
  const [alertToggle, setAlertToggle] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!firstname || !lastname || !email || !phone || !message) {
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
            phone,
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
      <OutOfScopeModal />
      <div className="graphite-background d-flex justify-content-center" style={{ height: "79vh" }}>
        <div className="container-contact">
          <div className="card-contact">
            <div className="row card-row">
              <div className="col-12 col-md-4 p-4 rounded-start card-contact-us">
                <h3 className="mb-5">Leave Us a message</h3>
                <img
                  src="src/assets/icons/Unicorn-beer-white-logo.svg"
                  alt="unicron icon"
                  className="contactIcon"
                />
              </div>
              <div className="col-12 col-md-8 p-4">
                <Form method="POST" onSubmit={handleSubmit}>
                  <div className="row">
                    <Form.Group className="col-6 my-2">
                      <Form.Label>First name</Form.Label>
                      <Form.Control
                        value={user ? `${user.firstname}` : ""}
                        required
                        type="text"
                        placeholder="First name"
                        onChange={(e) => setFirstname(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="col-6 my-2">
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

                  <div className="row">
                    <Form.Group className="col-6 my-2">
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
                    <Form.Group className="col-6 my-2">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        value={user ? `${user.phone}` : ""}
                        type="number"
                        placeholder="Phone"
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </Form.Group>
                  </div>

                  <Form.Group className="my-2">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      required
                      as="textarea"
                      style={{ height: "100px" }}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </Form.Group>
                </Form>

                <div className="row justify-content-end">
                  <Button
                    type="submit"
                    variant="outline-dark"
                    size="md"
                    className="rounded-pill w-25 me-3 mt-4"
                  >
                    Send
                  </Button>
                </div>
                {alertToggle && (
                  <Alert className="mt-5" variant="danger">
                    {alertText}
                  </Alert>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
