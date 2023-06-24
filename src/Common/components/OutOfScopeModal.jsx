import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";

function OutOfScopeModal() {
  const [smShow, setSmShow] = useState(true);

  return (
    <>
      <Modal size="sm" show={smShow} onHide={() => setSmShow(false)} aria-labelledby="modal-title">
        <Modal.Header closeButton>
          <Modal.Title id="modal-title">Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>This feature is not within the project's scope.</Modal.Body>
      </Modal>
    </>
  );
}

export default OutOfScopeModal;
