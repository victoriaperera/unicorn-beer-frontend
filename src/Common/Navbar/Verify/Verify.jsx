import { useState } from 'react';
import { Form, InputGroup, Modal } from 'react-bootstrap';
import "./styles.css";
import { useVerifyAge } from '../../../hook/useVerifyAge';

function Verify() {
  const [show, setShow] = useState(true);
  const [birthDay, setDay] = useState();
  const [birthMonth, setMonth] = useState();
  const [birthYear, setYear] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isOldEnough = useVerifyAge(birthDay, birthMonth, birthYear)
    console.log(isOldEnough)
    if(isOldEnough){
      handleClose(); 
      setShow(false);
    }  
  }
  return(
    <Modal show={show} size="lg" className='unicornModal'>
            <Modal.Header className='border-0 d-flex justify-content-start' >
              <Modal.Title className='me-5'><img alt='Unicorn Logo'/></Modal.Title>
              <h2>Please, tell us: When where you born?</h2>
            </Modal.Header>
            <Modal.Body>
              <Form className='d-flex justify-content-center fs-5' onSubmit={handleSubmit}>
                <InputGroup className="m-2">
                  <Form.Control
                    className='text-center month'
                    placeholder="MM"
                    aria-label="Month"
                    name="month"
                    onChange={(e) => setMonth(e.target.value)}
                  />
                 </InputGroup>
                 <InputGroup className="m-2">
                  <Form.Control
                    className='text-center day'
                    placeholder="DD"
                    aria-label="Day"
                    name="day"
                    onChange={(e) => setDay(e.target.value)}
                  />
                 </InputGroup>
                 <InputGroup className="m-2">
                  <Form.Control
                    className='text-center year'
                    placeholder="YYYY"
                    aria-label="Year"
                    name="year"
                    onChange={(e) => setYear(e.target.value)}
                  />
                  </InputGroup>
                 <InputGroup className="m-2">
                  <Form.Control
                    className='text-center btn-primary'
                    value="ENTER"
                    type="submit"
                  />
                  </InputGroup>
              </Form>
            </Modal.Body>
        
          </Modal>
  )
    
          
  
}

export default Verify