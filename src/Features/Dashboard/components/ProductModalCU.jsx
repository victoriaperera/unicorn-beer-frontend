import "./styles.css";
import { Button, Col, Form, InputGroup, Modal, Row } from "react-bootstrap";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createProduct, setToggleProduct, setToggleStyle, updateProduct } from "../adminSlice";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductModalCU({ product, action }) {
  const token = useSelector((state) => state.admin.token.token);
  const styles = useSelector((state) => state.admin.styles);
  const toggleProduct = useSelector((state) => state.admin.toggleCreateProduct);
  const toggleStyle = useSelector((state) => state.admin.toggleCreateStyle);

  const dispatch = useDispatch();

  const [style, setStyle] = product ? useState(product.style.name) : useState("");
  const [containers, setContainers] = useState([]);
  const [container, setContainer] = product ? useState(product.container) : useState(null);
  const [stock, setStock] = product ? useState(product.stock) : useState("");

  const handleSelectStyle = (e) => {
    setStyle(e);
    for (const style of styles) {
      style._id === e ? setContainers(style.containers) : "";
    }
  };

  const resetStates = () => {
    return setStyle(""), setContainer([]), setStock("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (action === "create") {
      try {
        const response = await axios({
          method: "POST",
          url: `${import.meta.env.VITE_BACK_URL}/products`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: {
            style: style,
            featured: false,
            container: container,
            stock: stock,
          },
        });
        dispatch(createProduct(response.data));
        console.log(response.data);
        dispatch(setToggleProduct(false));
        // resetStates();
      } catch (err) {
        console.log(err);
      }
    }
    if (action === "edit") {
      try {
        const response = await axios({
          method: "PATCH",
          url: `${import.meta.env.VITE_BACK_URL}/products`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: {
            productId: product.id,
            stock: stock,
          },
        });
        dispatch(updateProduct(response.data));
        close();
        resetStates();
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Modal
      show={toggleProduct}
      onHide={() => {
        dispatch(setToggleProduct(false));
        resetStates();
      }}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="mb-4" style={{ borderBottom: "none" }}>
        <Modal.Title className="position-relative" id="contained-modal-title-vcenter">
          <h3 className="mb-4">{action} Product </h3>
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
              >
                {action !== "edit" ? (
                  styles.map((style) => (
                    <option key={style.id} value={style.id}>
                      {style.name}
                    </option>
                  ))
                ) : (
                  <option>{product.style.name}</option>
                )}
              </Form.Select>
            </Form.Group>
            {/* // TODO featured */}
            <Form.Group as={Col}>
              <Form.Label>Container</Form.Label>
              <Form.Select
                name="container"
                id="container"
                onChange={(e) => setContainer(e.target.value)}
              >
                {action !== "edit" ? (
                  <>
                    <option>Select a container</option>
                    {containers.map((container) => (
                      <option key={container._id} value={container._id}>
                        {container.name}
                      </option>
                    ))}
                  </>
                ) : (
                  <option>{product.container.name}</option>
                )}
              </Form.Select>
            </Form.Group>
            {action !== "edit" && (
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
            )}

            <Form.Group>
              <Form.Label>Stock</Form.Label>
              <Form.Control type="number" name="stock" onChange={(e) => setStock(e.target.value)} />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Col className="d-flex justify-content-end">
              <Button className="w-25" type="submit">
                Make it happen
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ProductModalCU;
