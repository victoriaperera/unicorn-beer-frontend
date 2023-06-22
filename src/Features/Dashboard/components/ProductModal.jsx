import "./styles.css";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";

function ProductModal({show, close}){
    
    

    return (
            <Modal
              show={show} 
              onHide={close}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  Edit or Creat, that depends
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                  dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                  consectetur ac, vestibulum at eros.
                </p>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={close}>Make it happen</Button>
              </Modal.Footer>
            </Modal>
          );
    
}

export default ProductModal;