import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Col, Button, Form, Modal, Row } from "react-bootstrap";
import { createStyle, setToggleStyle } from "../adminSlice";

function CategoryCreate() {
  const token = useSelector((state) => state.admin.token);
  const toggleStyle = useSelector((state) => state.admin.toggleCreateStyle);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [photos, setPhotos] = useState([]);
  const [abv, setABV] = useState(null);
  const [containers, setContainer] = useState([]);
  const [price, setPrice] = useState(0);

  const handleCheckbox = (value) => {
    if (!containers.includes(value)) {
      containers.push(value);
    } else {
      const result = containers.filter((item) => item !== value);
      setContainer(result);
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      const response = await axios({
        method: "POST",
        url: `${import.meta.env.VITE_BACK_URL}/styles`,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      dispatch(setToggleStyle(false));
      dispatch(createStyle(response.data));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal
      show={toggleStyle}
      onHide={() => dispatch(setToggleStyle(false))}
      size="lg"
      className="adminModal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h2 className="text-center">Create Category</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleCreate} id="myForm">
          <Row>
            <Form.Group className="mb-2" as={Col} sm="6">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" onChange={(e) => setName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-2" as={Col} sm="6">
              <Form.Label>Alcohol By Volume (A.B.V) %</Form.Label>
              <Form.Control type="number" name="abv" onChange={(e) => setABV(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                type="text"
                name="description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-2" as={Col} sm="6">
              <Form.Label>Photos</Form.Label>
              <Form.Control
                type="file"
                multiple
                name="photos"
                onChange={(e) => setPhotos(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="d-flex align-items-center justify-content-center"
              as={Col}
              sm="6"
            >
              <Form.Label className="m-0 me-2">Containers</Form.Label>
              <Form.Check
                label="Can"
                name="can"
                type="checkbox"
                className="me-2"
                onChange={(e) => handleCheckbox(e.target.name)}
              />
              <Form.Check
                label="Bottle"
                name="bottle"
                type="checkbox"
                className="me-2"
                onChange={(e) => handleCheckbox(e.target.name)}
              />
              <Form.Check
                label="Keg"
                name="keg"
                type="checkbox"
                className="me-2"
                onChange={(e) => handleCheckbox(e.target.name)}
              />
            </Form.Group>
            <Form.Group className="mb-2" as={Col} sm="2">
              <Form.Label>Price per litre</Form.Label>
              <Form.Control type="number" name="price" onChange={(e) => setPrice(e.target.value)} />
            </Form.Group>
          </Row>
          <Button type="submit" variant="success">
            Create
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default CategoryCreate;
