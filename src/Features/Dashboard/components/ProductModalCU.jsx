import "./styles.css";
import { Button, Col, Form, InputGroup, Modal, Row,  } from "react-bootstrap";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createProduct, updateProduct } from "../adminSlice";
import axios from "axios";
import { capitalizeFirstLetter } from "../../../hook/capitalizeFirstLetter";

function ProductModalCU({show, close, product, action}){
  const token = useSelector((state)=> state.admin.token.token);
  const styles = useSelector((state)=> state.admin.styles);

  const dispatch = useDispatch();
  const [style, setStyle] = product ? useState(product.style) : useState("");
  const [container, setContainer] = product ? useState(product.container) : useState("");
  const [price, setPrice] = product ? useState(product.price) : useState("");
  const [stock, setStock] = product ? useState(product.stock) : useState("");

  const productName = (style, container)=>{
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
  const handleSubmit = async (e)=>{
    e.preventDefault();
    if(action === "create"){
      try{
        const response = await axios({
          method: "POST",
          url: `${import.meta.env.VITE_BACK_URL}/products`,
          // headers: {
          //   Authorization: `Bearer ${token}`,
          // },
          data:{
            style: style,
            container: container,
            price: price,
            stock: stock,
            name: productName(style, container),
          }
        })
        dispatch(createProduct(response.data))
      }catch(err){
        console.log(err);
      }
    }
    if(action === "edit"){
      try{
        dispatch(updateProduct(product.id))
      }catch(err){
        console.log(err)
      }
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
                  <h3 className="mb-4">{action} Product </h3>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <Form
              onSubmit={(e)=> handleSubmit(e)}
              >
                <Row className="mb-3">
                  <Form.Group as={Col}>
                      <Form.Label>Style</Form.Label>
                        <Form.Select name="container" id="container"
                        onChange={(e) =>  setStyle(e.target.value)}
                        >
                          {!product ? styles.map((style) =>
                          <option 
                          key={style.id}
                          value={style.name}
                          >
                          {style.name}
                          </option>
                          ):
                          <option>{product.style.name}</option>
                          }
                        </Form.Select>
                      </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>Container</Form.Label>
                        <Form.Select name="container" id="container"
                        onChange={(e) =>  setContainer(e.target.value)}
                        >
                          <option>Select a container size</option>
                          {!product ?
                          <> 
                          <option value="bottle">Botlle</option>
                          <option value="can">Can</option>
                          <option value="keg">Keg</option>
                          </>
                          :
                          <option>{capitalizeFirstLetter(product.container.name)}</option>
                        }
                        </Form.Select>
                      </Form.Group>
                    <Form.Group as={Col}>
                    <Form.Label>Price</Form.Label>
                      <InputGroup>
                       {!product ?
                       <>
                       <InputGroup.Text>US$</InputGroup.Text>
                       <Form.Control
                         type="number"
                         name="price"
                         onChange={(e) => setPrice(e.target.value)}
                       />
                       </>
                    :
                    <>
                   <InputGroup.Text>US$</InputGroup.Text>
                       <Form.Control
                         type="number"
                         name="price"
                         readOnly
                         value={product.price}
                       />
                   </>
                   }
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
                  <Row className="mb-3">
                   <Col className="d-flex justify-content-end">
                    <Button className="w-25" type="submit">Make it happen</Button>
                   </Col>
                  </Row>      
                </Form>  
              </Modal.Body>
            </Modal>
          );
}

export default ProductModalCU;