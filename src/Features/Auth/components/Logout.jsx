import axios from "axios";
import { useNavigate } from "react-router-dom";
import { clearToken } from "../userSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavDropdown } from "react-bootstrap";

function Logout() {
  const navigate = useNavigate();
  const [response, setResponse] = useState();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handlerLogout = async () => {
    const res = await axios.get("http://localhost:3000/auth/logout", {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    setResponse(res);
    dispatch(clearToken());

    navigate("/");
  };

  return (
    <NavDropdown.Item onClick={handlerLogout}>
      Log out
    </NavDropdown.Item>
  );
}

export default Logout;
