import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Collapse, Form, InputGroup, Modal } from "react-bootstrap";
import "./styles.css";
import { useVerifyAge } from "../../../hook/useVerifyAge";
import { toggleModal } from "./verifyAgeSlice";

function Verify() {
  const show = useSelector((state) => state.verify);
  const dispatch = useDispatch();
  const [child, setChild] = useState();
  const [birthDay, setDay] = useState("");
  const [birthMonth, setMonth] = useState("");
  const [birthYear, setYear] = useState("");
  const allInputsSeted = birthDay && birthMonth && birthYear.length > 3;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (allInputsSeted) {
      const isOldEnough = useVerifyAge(birthDay, birthMonth, birthYear);
      if (isOldEnough) {
        dispatch(toggleModal());
      } else {
        setChild(true);
      }
    }
  };

  return (
    <Modal show={show} size="md" centered backdrop="static" className="unicornModal">
      <Modal.Header className="border-0 d-flex flex-column justify-content-center">
        <img
          src="src/assets/icons/Unicorn-beer-icon-black.svg"
          alt="Unicorn Logo"
          className="w-50 pt-3"
        />
        <Modal.Title>
          <h3 className="mt-4 text-center">Please, tell us: When were you born?</h3>
          {child && (
            <small className="oops">
              Oops! We're sorry, but you have to be an adult to get into this site
            </small>
          )}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <div className="d-flex my-3">
            <InputGroup className="m-2">
              <Form.Control
                id="month"
                className="dateInput"
                placeholder="MM"
                autoFocus
                aria-label="Month"
                name="month"
                type="number"
                min={1}
                max={12}
                onChange={(e) => setMonth(e.target.value)}
              />
            </InputGroup>
            <InputGroup className="m-2">
              <Form.Control
                id="day"
                className="dateInput"
                placeholder="DD"
                aria-label="Day"
                name="day"
                type="number"
                min={1}
                max={31}
                onChange={(e) => setDay(e.target.value)}
              />
            </InputGroup>
            <InputGroup className="m-2">
              <Form.Control
                id="year"
                className="dateInput year"
                placeholder="YYYY"
                aria-label="Year"
                name="year"
                min={1900}
                onChange={(e) => setYear(e.target.value)}
              />
            </InputGroup>
          </div>
          <div className="d-flex justify-content-center">
            <InputGroup className="my-2 w-50">
              <Form.Control
                className={allInputsSeted ? "enterBtnActive" : "enterBtnInactive"}
                value="enter"
                type="submit"
              />
            </InputGroup>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default Verify;
