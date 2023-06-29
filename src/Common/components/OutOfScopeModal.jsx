import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";

function OutOfScopeModal() {
  const [smShow, setSmShow] = useState(true);

  return (
    <>
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        centered
        aria-labelledby="modal-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-title">
            <span className="h3">Information</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span>This feature is not within the project's scope.</span>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default OutOfScopeModal;
