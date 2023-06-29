import "./styles.css";
import { Form } from "react-bootstrap";

function CardForm({ user }) {
  return (
    <>
      <Form.Group className="my-2">
        <Form.Label>Card Number</Form.Label>
        <Form.Control type="text" name="cardNumber" value="9876-5432-1234-5678" disabled readOnly />
      </Form.Group>
      <Form.Group className="my-2">
        <Form.Label>Card Holder</Form.Label>
        <Form.Control
          type="text"
          name="cardHolder"
          value={`${user.firstname} ${user.lastname}`}
          disabled
          readOnly
        />
      </Form.Group>
      <div className="row">
        <div className="col">
          <Form.Group className="my-2">
            <Form.Label>Expiration Date</Form.Label>
            <div className="d-flex">
              <Form.Control
                type="text"
                name="expirationMonth"
                value="12"
                className="me-2"
                disabled
                readOnly
              />
              <Form.Control type="text" name="expirationYear" value="2027" disabled readOnly />
            </div>
          </Form.Group>
        </div>
        <div className="col">
          <Form.Group className="my-2">
            <Form.Label>CVV</Form.Label>
            <Form.Control type="text" name="cvv" value="123" disabled readOnly />
          </Form.Group>
        </div>
      </div>
    </>
  );
}

export default CardForm;
