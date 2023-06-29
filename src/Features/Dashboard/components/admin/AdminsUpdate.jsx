import "../styles.css";
import { Button, Col, Form, InputGroup, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateAdmin } from "../../adminSlice";
import { useState } from "react";
import axios from "axios";

function AdminsUpdate({ show, close, admin }) {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.admin.token.token);

  const [name, setName] = useState(admin.name);
  const [email, setEmail] = useState(admin.email);
  const [password, setPassword] = useState(admin.password);
  const [passwordRepeat, setPasswordRepeat] = useState(admin.password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password === passwordRepeat && name && email) {
        const response = await axios({
          method: "PATCH",
          url: `${import.meta.env.VITE_BACK_URL}/admin`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: {
            id: admin.id,
            name: name,
            email: email,
            password: password,
          },
        });
        dispatch(updateAdmin(response.data));
        close();
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Modal show={show} onHide={close} size="lg">
      <Modal.Header closeButton>
        <h2>Update Administrator</h2>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Form.Group as={Col} sm="6">
              <InputGroup className="mb-3">
                <InputGroup.Text>Name</InputGroup.Text>
                <Form.Control
                  placeholder="Admin Name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} sm="6">
              <InputGroup className="mb-3">
                <InputGroup.Text>@</InputGroup.Text>
                <Form.Control
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} sm="6">
              <InputGroup className="mb-3">
                <InputGroup.Text>Password</InputGroup.Text>
                <Form.Control
                  placeholder="Password"
                  name="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} sm="6">
              <InputGroup className="mb-3">
                <InputGroup.Text>Confirm Password</InputGroup.Text>
                <Form.Control
                  placeholder="Confirm Password"
                  name="passwordRepeat"
                  type="password"
                  onChange={(e) => setPasswordRepeat(e.target.value)}
                />
              </InputGroup>
            </Form.Group>
            <div className="d-flex justify-content-around align-items-end">
              <Button variant="success" type="submit">
                Update Admin
              </Button>
              <Button variant="secondary" onClick={close}>
                Close
              </Button>
            </div>
          </Row>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default AdminsUpdate;
