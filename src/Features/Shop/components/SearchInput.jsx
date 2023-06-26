import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setFilter } from "../shopSlice";

function SearchInput({ productRef }) {
  const dispatch = useDispatch();

  const handlerInput = (e) => {
    e.preventDefault();
    dispatch(setFilter({ filter: e.target.value }));
  };
  const handlerOnClick = (e) => {
    e.preventDefault();
    productRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Form onClick={handlerOnClick} className="scroll-margin">
      <span className="centering">
        <span className="box">
          <input className="search" placeholder=" " spellCheck="false" onInput={handlerInput} />
        </span>
      </span>
    </Form>
  );
}

export default SearchInput;
