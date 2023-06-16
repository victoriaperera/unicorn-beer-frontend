import "./styles.css";
import { Button, Col, Container, Form, Row, InputGroup } from "react-bootstrap";
import React from "react";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <>
    <div className="header">
       <h1>Contact</h1>
    </div>
    <div className="contact">
      <Container className="contactContainer py-5">
        <h2 className="py-5">Leave Us a message</h2>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" className="my-2">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name" 
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" className="my-2">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" className="my-2">
              <Form.Label>Email</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please put a contact e-mail.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" className="my-2">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="City" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" className="my-2">
              <Form.Label>State</Form.Label>
              <Form.Control type="text" placeholder="State" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" className="my-2">
              <Form.Label>Zip</Form.Label>
              <Form.Control type="text" placeholder="Zip" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="justify-content-end">
            <Button type="submit" variant="outline-light" size="lg" className="rounded-pill w-25 me-3 mt-5">Send</Button>
          </Row> 
        </Form>
      </Container>
    </div>
   
   </>

  );
}

export default Contact;
