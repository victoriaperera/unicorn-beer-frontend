<<<<<<< Updated upstream
import { useState } from 'react';
import { Form, InputGroup, Modal } from 'react-bootstrap';
import "./styles.css";
import { useVerifyAge } from '../../../hook/useVerifyAge';

function Verify() {
  const [show, setShow] = useState(true);
  const [birthDay, setDay] = useState();
  const [birthMonth, setMonth] = useState();
  const [birthYear, setYear] = useState();


  const handleSubmit = (e) => {
    e.preventDefault();
    const isOldEnough = useVerifyAge(birthDay, birthMonth, birthYear)
    if(isOldEnough){
      setShow(false);
    }  
  }
  return(
    <Modal show={show} size="xl" className='unicornModal'>
            <Modal.Header className="border-0 d-flex flex-column">
              <img alt='Unicorn Logo'/>
              <Modal.Title className='me-5'>
                <h3 className='mt-3'>Please, tell us: When where you born?</h3>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleSubmit}>
                <div className='d-flex'>
                  <InputGroup className="m-2 inputDate">
                    <Form.Control
                      className='text-center month'
                      placeholder="MM"
                      aria-label="Month"
                      name="month"
                      onChange={(e) => setMonth(e.target.value)}
                    />
                  </InputGroup>
                  <InputGroup className="m-2 inputDate">
                    <Form.Control
                      className='text-center day'
                      placeholder="DD"
                      aria-label="Day"
                      name="day"
                      onChange={(e) => setDay(e.target.value)}
                    />
                  </InputGroup>
                  <InputGroup className="m-2 inputDate">
                    <Form.Control
                      className='text-center year'
                      placeholder="YYYY"
                      aria-label="Year"
                      name="year"
                      onChange={(e) => setYear(e.target.value)}
                    />
                    </InputGroup>
                </div>
                <div>
                  <InputGroup className="m-2">
                   <Form.Control
                    className='text-center btn-primary'
                    value="ENTER"
                    type="submit"
                    />
                  </InputGroup>
                </div>
              </Form>
            </Modal.Body>
        
          </Modal>
  )
    
          
  
=======
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
>>>>>>> Stashed changes
}

export default Verify;
