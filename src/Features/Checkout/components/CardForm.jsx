import "./styles.css";
import { Form } from "react-bootstrap";
import React, { useState } from "react";

function CardForm({ user }) {
  //   const [cardHolder, setCardHolder] = useState("");

  //   const handleCardHolderChange = (e) => {
  //     setCardHolder(e.target.value);
  //   };

  return (
    <div>
      <Form.Group className="my-2">
        <Form.Label>Card Number</Form.Label>
        <Form.Control
          type="text"
          name="cardNumber"
          value="9876-5432-1234-5678"
          placeholder="Enter card number"
          readOnly
        />
      </Form.Group>
      <Form.Group className="my-2">
        <Form.Label>Card Holder</Form.Label>
        <Form.Control
          type="text"
          name="cardHolder"
          value={`${user.firstname} ${user.lastname}`}
          placeholder="Enter card holder name"
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
                placeholder="MM/YY"
                readOnly
              />
              <Form.Control
                type="text"
                name="expirationYear"
                value="2027"
                placeholder="MM/YY"
                readOnly
              />
            </div>
          </Form.Group>
        </div>
        <div className="col">
          <Form.Group className="my-2">
            <Form.Label>CVV</Form.Label>
            <Form.Control type="text" name="cvv" value="123" placeholder="Enter CVV" readOnly />
          </Form.Group>
        </div>
      </div>
    </div>
  );
}

export default CardForm;
