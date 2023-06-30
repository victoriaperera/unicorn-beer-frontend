import "../styles.css";
import axios from "axios";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createProduct, setToggleProduct, setToggleStyle } from "../../adminSlice";
import { Link } from "react-router-dom";

function ProductModalCU() {
  const product = useSelector((state) => state.admin.product);
  const token = useSelector((state) => state.admin.token.token);
  const styles = useSelector((state) => state.admin.styles);
  const toggleProduct = useSelector((state) => state.admin.toggleCreateProduct);
  const [featured, setFeatured] = useState(false);
  const dispatch = useDispatch();

  const [style, setStyle] = product ? useState(product.style.name) : useState("");
  const [containers, setContainers] = useState([]);
  const [container, setContainer] = product ? useState(product.style.container) : useState(null);
  const [stock, setStock] = product ? useState(product.stock) : useState("");

  const handleSelectStyle = (e) => {
    setStyle(e);
    for (const style of styles) {
      style.id === e ? setContainers(style.containers) : "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
      const response = await axios({
        method: "POST",
        url: `${import.meta.env.VITE_BACK_URL}/products`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          style: style,
          featured: featured === "on" ? true : false,
          container: containers.filter((cont) => cont.name === container),
          stock: stock,
        },
      });
      dispatch(createProduct(response.data));
      dispatch(setToggleProduct(false));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal
      show={toggleProduct}
      onHide={() => {
        dispatch(setToggleProduct(false));
      }}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="" style={{ borderBottom: "none" }}>
        <Modal.Title className="position-relative" id="contained-modal-title-vcenter">
          <h3 className="m-0">Create Product </h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Style</Form.Label>
              <Form.Select
                name="style"
                id="style"
                onChange={(e) => handleSelectStyle(e.target.value)}
                required
              >
                {styles.map((style) => (
                  <option key={style.id} value={style.id}>
                    {style.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Container</Form.Label>
              <Form.Select
                name="container"
                id="container"
                onChange={(e) => setContainer(e.target)}
                required
              >
                <option>Select a container</option>
                {containers.map((container) => (
                  <option key={container.id} value={container.id}>
                    {container.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <p className="my-2">
                Would you like to create a brand new{" "}
                <Link
                  onClick={() => {
                    dispatch(setToggleStyle(true));
                    dispatch(setToggleProduct(false));
                  }}
                >
                  Style?
                </Link>
              </p>
              <Form.Check
                label="Featured"
                name="Featured"
                type="checkbox"
                className="me-2"
                onChange={(e) => setFeatured(e.target.value)}
              />
              <Form.Group className="d-flex gap-3 justify-content-center align-items-center">
                <Form.Label className="mb-0">Stock</Form.Label>
                <Form.Control
                  type="number"
                  name="stock"
                  onChange={(e) => setStock(e.target.value)}
                  required
                />
              </Form.Group>
            </div>
          </Row>
          <Row className="mb-3">
            <Col className="d-flex justify-content-end">
              <Button className="w-25" type="submit" variant="success">
                Create Product
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ProductModalCU;
