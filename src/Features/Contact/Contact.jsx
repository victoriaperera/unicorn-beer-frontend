import "./styles.css";
import { Button, Col, Container, Form, Row, InputGroup } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Alert } from "react-bootstrap";
function Contact() {
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
    if(!firstname || !lastname || !email || !phone || !message){
      setAlertToggle(true);
      setAlertText("Fill in all the fields, please")
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
      <div className="graphiteBackground p-5">
        <Container className="contactContainer my-5 py-5 container">
          <div className="d-flex align-items-end">
            <img
              src="src/assets/icons/Unicorn-beer-icon-3.svg"
              alt="unicron icon"
              className="contactIcon me-3"
            />
            <h2 className="m-0">Leave Us a message</h2>
          </div>
          <Form method="POST" onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" className="my-2">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  value={user ? `${user.firstname}` : ""}
                  required
                  type="text"
                  placeholder="First name"
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col} md="6" className="my-2">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  value={user ? `${user.lastname}` : ""}
                  required
                  type="text"
                  placeholder="Last name"
                  onChange={(e) => setLastname(e.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col} md="6" className="my-2">
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
              <Form.Group as={Col} md="6" className="my-2">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  value={user ? `${user.phone}` : ""}
                  type="number"
                  placeholder="Phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} className="my-2">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  style={{ height: "200px" }}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Row className="justify-content-end">
              <Button
                type="submit"
                variant="outline-light"
                size="lg"
                className="rounded-pill w-25 me-3 mt-4"
              >
                Send
              </Button>
            </Row>
          </Form>
          {alertToggle && (
              <Alert className="mt-5" variant="danger">
                {alertText}
              </Alert>
            )}
        </Container>
      </div>
    </>
  );
}

export default Contact;
