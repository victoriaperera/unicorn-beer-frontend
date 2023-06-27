import { Modal, Button } from "react-bootstrap";
import "./styles.css"

function OrderModal({order, show, close}) {

    return(
        <>
        <Modal show={show} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title>Order Nro: {order.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={close}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </>

    )
}

export default OrderModal;