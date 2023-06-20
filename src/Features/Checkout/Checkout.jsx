import "./styles.css";
import { Badge, Button, Container, Col, InputGroup, ListGroup, Form, Row, FormSelect } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Select from 'react-select';

function  Checkout() {
    const {user, cart} = useSelector(state => state);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [alertText, setAlertText] = useState("");
    const [alertToggle, setAlertToggle] = useState(false);

    const options = [
        { value: 'visa', label: 'Visa', image:"src/assets/icons/icons8-tarjeta-visa-48.png" },
        { value: 'mastercard', label: 'Master Card', image:"src/assets/icons/icons8-mastercard-48.png" },
        { value: 'paypal', label: 'PayPal', image:"src/assets/icons/icons8-paypal-48.png" }
      ];
    const customStyles = {
        option: (provided, state) => ({
          ...provided,
          color: "black",
          background: `url(${state.data.image}) no-repeat center left`,
          paddingLeft: '50px',
        }),
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios({
                method: "POST",
                url: "http://localhost:3000/orders",
            })
        } catch(err) {

        }
    }

    return (
      <div className="graphiteBackground py-5">
         <Container className="container checkOutContainer py-5">
            <div className="d-flex flex-column justify-content-start align-items-start">
                <div className="d-flex align-items-center my-3">
                    <img
                    src="src/assets/icons/Unicorn-beer-icon-3.svg"
                    alt="unicron icon"
                    className="uniIcon"
                    />
                    <h1 className="m-0">Check Out</h1>
                </div>
                <small>Our Damn Tasty Beer is Just a Click Away</small>
            </div>
            <Form method="POST" onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" className="my-2">
                        <Form.Label>Client</Form.Label>
                        <Form.Control
                        type="text"
                        value={`${user.firstname} ${user.lastname}`}
                        disabled
                        readOnly  
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="6" className="my-2">
                        <Form.Label>Shipping Address</Form.Label>                    
                        <FormSelect name="shippingAddress">
                            <option value={user.address}>{user.address}</option>
                            <option value={user.shippingAddress}>{user.shippingAddress}</option>
                        </FormSelect>
                        <p className="my-2">Change <Link className="authLink">address</Link></p>
                    </Form.Group>
                    <ListGroup as="ul" numbered className="px-2">
                        {cart 
                            ? cart.map( (item) => 
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start"
                            >
                                <div className="ms-2 me-auto">
                                    <p className="m-0 fw-bold">{item.style.name}</p>
                                    <p className="m-0">{item.container.name}  ${item.price}</p>
                                </div>
                                <Badge bg="primary" pill>
                                item.quantity
                                </Badge>
                            </ListGroup.Item>
                        ) 
                            :
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start"
                            >
                                <div className="ms-2 me-auto">
                                    <p className="m-0 fw-bold">The cart it's emtpy</p>
                                    
                                </div>
                                <Badge bg="primary" pill>
                                0
                                </Badge>
                            </ListGroup.Item>
                        
                        }
                            
                    </ListGroup>
                    <Form.Group as={Col} md="6" className="my-2">
                        <Form.Label>Select Payment Method</Form.Label>                    
                        <Select
                        options={options}
                        styles={customStyles}/>
                    </Form.Group>
                    <Form.Group as={Col} md="6" className="my-2">
                        <Form.Label>Total</Form.Label>
                        <Form.Control
                            type="number"
                            value={123}
                            name="totalAmount"
                            disabled
                            readOnly  
                        />
                    </Form.Group>
                </Row>
                <Row className="justify-content-end">
                    <Button
                    type="submit"
                    variant="outline-light"
                    size="lg"
                    className="rounded-pill w-25 me-3 mt-5"
                    >
                    Proceed to Checkout
                    </Button>
                    {alertToggle && <Alert variant="danger">{alertText}</Alert>}
                </Row>
            </Form>
        </Container>
      </div>
    )

}

export default Checkout