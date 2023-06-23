import "./styles.css";
import { Button, Col, Form, InputGroup, Modal, Row,  } from "react-bootstrap";
import { useState } from "react";
import { useSelector } from "react-redux";
import { createProduct, updateProduct } from "../adminSlice";
import axios from "axios";

function ProductModalCU({show, close, product, action}){
  const token = useSelector((state)=> state.admin.token.token);
  const styles = useSelector((state)=> state.admin.styles);

  const [style, setStyle] = useState("");
  const [container, setContainer] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const productName = (container, style)=>{
    if(container === "can") {
      return `${style} ${container} 0.09 Oz`
    }
    if(container === "bottle") {
      return `${style} ${container} 0.13 Oz`
    }
    if(container === "keg") {
      return `${style} ${container} 1.32 Gal`
    }
  }
  const handleSubmit = async ()=>{
    e.preventDefault();
    try{
      const response = axios({
        method: "POST",
        url: `${import.meta.env.VITE_BACK_URL}/products`,
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
        data:{
          style,
          container,
          price,
          stock,
          name: productName(container, style)
        }
      })

    }catch(err){
      console.log(err);
    }
  }

  return (
            <Modal
              show={show} 
              onHide={()=> {
                close();
                setStyle("")
                setContainer("")
                setPrice("")
                setStock("")
              }
            }
              size="xl"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton className="mb-4" style={{borderBottom : "none"}}>
                <Modal.Title className="position-relative" id="contained-modal-title-vcenter">
                  <h3 className="mb-4">{action} Product</h3>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <Form
              onSubmit={handleSubmit}
              >
                <Row className="mb-3">
                  <Form.Group as={Col}>
                      <Form.Label>Style</Form.Label>
                        <Form.Select name="container" id="container"
                        onChange={(e) =>  setStyle(e.target.value)}
                        >
                          <option>Select a style</option>
                          {styles.map((style) =>
                          <option 
                          key={style.id}
                          value={style.name}
                          >
                          {style.name}
                          </option>
                          )}
                        </Form.Select>
                      </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>Container</Form.Label>
                        <Form.Select name="container" id="container"
                        onChange={(e) =>  setContainer(e.target.value)}
                        >
                          <option>Select a container size</option>
                          <option value="bottle">Botlle</option>
                          <option value="can">Can</option>
                          <option value="keg">Keg</option>
                        </Form.Select>
                      </Form.Group>
                    <Form.Group as={Col}>
                    <Form.Label>Price</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>$</InputGroup.Text>
                          <Form.Control
                            type="number"
                            name="price"
                            onChange={(e) => setPrice(e.target.value)}
                          />
                      </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col}>
                    <Form.Label>Stock</Form.Label>
                      <Form.Control
                        type="number"
                        name="stock"
                        onChange={(e) => setStock(e.target.value)}
                      />
                    </Form.Group>
                  </Row>
                </Form>  
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={close}>Make it happen</Button>
              </Modal.Footer>
            </Modal>
          ); 
}

export default ProductModalCU;