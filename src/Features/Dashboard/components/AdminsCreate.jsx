import "./styles.css";
import { Button, Col, Form, InputGroup, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createAdmin } from "../adminSlice";
import { useState } from "react";
import axios from "axios";

function AdminCreate({show, close}){
    const dispatch = useDispatch();

    const token = useSelector((state) => state.admin.token.token);

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [passwordRepeat, setPasswordRepeat] = useState(null);

    const handleSubmit = async (e)=> {
        e.preventDefault();
        try{
            if(password === passwordRepeat && name && email){
                const response = await axios({
                    method: "POST",
                    url: `${import.meta.env.VITE_BACK_URL}/admin`,
                    headers:{
                        Authorization: `Bearer ${token}`
                    },
                    data:{
                        name: name,
                        email: email,
                        password: password
                    }
                })
                dispatch(createAdmin(response.data))
                close();
            }
        }catch(err) {
            console.log(err);
        }
    }
    return (
        <Modal show={show} onHide={close} size="lg">
            <Modal.Header closeButton>
            <h2>Create Administrator</h2>
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
                            onChange={(e)=> setName(e.target.value)}
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
                            onChange={(e)=> setEmail(e.target.value)}
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
                            onChange={(e)=> setPassword(e.target.value)}
                            />
                    </InputGroup>
                   </Form.Group>
                    <Form.Group as={Col} sm="6">
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Repeat password</InputGroup.Text>
                            <Form.Control
                            placeholder="Password"
                            name="passwordRepeat"
                            type="password"
                            onChange={(e)=> setPasswordRepeat(e.target.value)}
                            />
                        </InputGroup>
                    </Form.Group>
                    <div className="d-flex justify-content-around align-items-end">
                        <Button variant="success" type="submit">
                            Create Admin
                        </Button>
                        <Button variant="secondary" onClick={close}>
                            Close
                        </Button>
                    </div>      
                 </Row>
            </Form>
            </Modal.Body> 
        </Modal>
    )
}

export default AdminCreate;