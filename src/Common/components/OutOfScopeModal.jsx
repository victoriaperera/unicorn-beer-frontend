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
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>This feature is not within the project's scope.</Modal.Body>
      </Modal>
    </>
  );
}

export default OutOfScopeModal;
