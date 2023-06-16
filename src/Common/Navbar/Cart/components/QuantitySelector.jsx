import React from "react";
import Form from "react-bootstrap/Form";

function QuantitySelector({ value, onChange, min = 1, max = 10 }) {
  const options = [];
  for (let i = min; i <= max; i++) {
    options.push(
      <option key={i} value={i}>
        {i}
      </option>,
    );
  }

  return (
    <Form.Select
      value={value}
      onChange={onChange}
      className="selector mb-3"
      aria-label="Quantity selector"
    >
      {options}
    </Form.Select>
  );
}

export default QuantitySelector;
