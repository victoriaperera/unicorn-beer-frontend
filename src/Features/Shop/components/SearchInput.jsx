import React from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setFilter } from "../shopSlice";

function SearchInput() {
  const dispatch = useDispatch();

  const handlerInput = (e) => {
    e.preventDefault();
    dispatch(setFilter({ filter: e.target.value }));
  };

  return (
    <Form>
      <Form.Control
        type="search"
        placeholder="Search products..."
        className="rounded-pill custom-width"
        aria-label="Search"
        onInput={(e) => handlerInput(e)}
      />
    </Form>
  );
}

export default SearchInput;
