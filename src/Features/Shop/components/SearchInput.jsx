import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setFilter } from "../shopSlice";
import { useRef } from "react";

function SearchInput() {
  const dispatch = useDispatch();
  const ref = useRef(null);

  const handlerInput = (e) => {
    e.preventDefault();
    dispatch(setFilter({ filter: e.target.value }));
  };
  const handlerOnClick = (e) => {
    e.preventDefault();
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Form onClick={handlerOnClick} className="search-container" ref={ref}>
      <span className="centering">
        <span className="box">
          <input className="search" placeholder=" " spellCheck="false" onInput={handlerInput} />
        </span>
      </span>
    </Form>
  );
}

export default SearchInput;
