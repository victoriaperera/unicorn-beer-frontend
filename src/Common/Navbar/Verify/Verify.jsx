import { useState } from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import "./styles.css";

function Verify() {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // onHide={handleClose} dentro de Modal
  return (
    <Modal show={show} onHide={handleClose} size="xl">
      <Modal.Header className="border-0 d-flex justify-content-start">
        <Modal.Title className="m-5">
          <img alt="Unicorn Logo" />
        </Modal.Title>
        <h2>Please, tell us: When where you born?</h2>
      </Modal.Header>
      <Modal.Body>
        <Form className="d-flex fs-5">
          <InputGroup className="m-3">
            <Form.Control
              className="text-center month"
              placeholder="MM"
              aria-label="Month"
            />
          </InputGroup>
          <InputGroup className="m-3">
            <Form.Control
              className="text-center day"
              placeholder="DD"
              aria-label="Day"
            />
          </InputGroup>
          <InputGroup className="m-3">
            <Form.Control
              className="text-center year"
              placeholder="YYYY"
              aria-label="Year"
            />
          </InputGroup>
          <Button className="button">Enter</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default Verify;
