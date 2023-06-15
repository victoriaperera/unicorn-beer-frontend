import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Collapse, Form, InputGroup, Modal } from 'react-bootstrap';
import "./styles.css";
import { useVerifyAge } from '../../../hook/useVerifyAge';
import { toggleModal } from './verifyAgeSlice';
function Verify() {
  const show = useSelector( state => state.verify )
  const dispatch = useDispatch();
  
  const [birthDay, setDay] = useState();
  const [birthMonth, setMonth] = useState();
  const [birthYear, setYear] = useState();


  const handleSubmit = (e) => {
    e.preventDefault();
    const isOldEnough = useVerifyAge(birthDay, birthMonth, birthYear)
    if(isOldEnough){
      dispatch(toggleModal()) ;
    }  
  }
  return(
    
        <Modal show={show} size="xl" backdrop="static" className='unicornModal'>
            <Modal.Header className="border-0 d-flex flex-column justify-content-center">
              <img alt='Unicorn Logo'/>
              <Modal.Title>
                <h3 className='mt-5 text-center'>Please, tell us: When where you born?</h3>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleSubmit}>
                <div className='d-flex'>
                  <InputGroup className="m-2">
                    <Form.Control
                      className='dateInput month'
                      placeholder="MM"
                      aria-label="Month"
                      name="month"
                      type="number"
                      range="1-12"
                      onChange={(e) => setMonth(e.target.value)}
                    />
                  </InputGroup>
                  <InputGroup className="m-2">
                    <Form.Control
                      className='dateInput day'
                      placeholder="DD"
                      aria-label="Day"
                      name="day"
                      type="number"
                      onChange={(e) => setDay(e.target.value)}
                    />
                  </InputGroup>
                  <InputGroup className="m-2">
                    <Form.Control
                      className='dateInput year'
                      placeholder="YYYY"
                      aria-label="Year"
                      name="year"
                      onChange={(e) => setYear(e.target.value)}
                    />
                    </InputGroup>
                </div>
                <div className='d-flex justify-content-center'>
                  <InputGroup className="my-4 w-75">
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
    
          
  
}

export default Verify;
